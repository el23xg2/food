#!/usr/bin/env python3
"""Download Mandarin speech clips from FLEURS (open multilingual speech benchmark).

FLEURS is used here as a practical alternative when Common Voice requires
Mozilla Data Collective registration. Clips are real human Mandarin speech
with reference transcripts, suitable for annotation and ASR evaluation demos.
"""

from __future__ import annotations

import argparse
import json
import random
from pathlib import Path

import soundfile as sf
from datasets import Audio, load_dataset
from tqdm import tqdm


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--count", type=int, default=30)
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--split", default="validation", choices=["train", "validation", "test"])
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("speech-annotation-demo/audio"),
    )
    args = parser.parse_args()

    random.seed(args.seed)
    args.output_dir.mkdir(parents=True, exist_ok=True)

    print(f"Loading FLEURS cmn_hans_cn ({args.split})...")
    dataset = load_dataset("google/fleurs", "cmn_hans_cn", split=args.split)
    dataset = dataset.cast_column("audio", Audio(decode=False))

    indices = list(range(len(dataset)))
    random.shuffle(indices)

    manifest: list[dict] = []
    for idx in tqdm(indices, desc="Selecting clips"):
        if len(manifest) >= args.count:
            break

        row = dataset[idx]
        text = (row.get("transcription") or row.get("raw_transcription") or "").strip()
        if len(text) < 4:
            continue

        audio_info = row["audio"]
        audio_bytes = audio_info["bytes"]
        if not audio_bytes:
            continue

        import io

        data, sampling_rate = sf.read(io.BytesIO(audio_bytes))
        duration_sec = round(len(data) / sampling_rate, 2)
        if duration_sec < 1.0 or duration_sec > 12.0:
            continue

        clip_id = f"fleurs_zh_{len(manifest) + 1:03d}"
        wav_path = args.output_dir / f"{clip_id}.wav"
        sf.write(wav_path, data, sampling_rate)

        manifest.append(
            {
                "id": clip_id,
                "audio_file": f"audio/{clip_id}.wav",
                "duration_sec": duration_sec,
                "sampling_rate": sampling_rate,
                "source": "google/fleurs cmn_hans_cn",
                "source_split": args.split,
                "source_index": idx,
                "reference_text": text,
                "notes": "",
            }
        )

    manifest_path = args.output_dir.parent / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved {len(manifest)} clips to {args.output_dir}")
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    main()
