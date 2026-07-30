#!/usr/bin/env python3
"""Run Whisper ASR and compare against human annotations."""

from __future__ import annotations

import argparse
import csv
import json
import re
from collections import Counter
from pathlib import Path

import jiwer
import matplotlib.pyplot as plt
import pandas as pd
import whisper
from opencc import OpenCC
from tqdm import tqdm

_CC_T2S = OpenCC("t2s")


_PUNCT_RE = re.compile(
    r"[\s\u3000，。！？、；：\"'（）【】《》…—·,.!?;:(){}[\]]+"
)


def normalize_text(text: str) -> str:
    text = text.strip().lower()
    text = _CC_T2S.convert(text)
    text = _PUNCT_RE.sub("", text)
    return text


def classify_error(human: str, ai: str) -> list[str]:
    tags: list[str] = []
    h, a = normalize_text(human), normalize_text(ai)

    if not a:
        tags.append("missing_transcription")
        return tags
    if h == a:
        tags.append("correct")
        return tags

    if len(a) < len(h):
        tags.append("deletion")
    if len(a) > len(h):
        tags.append("insertion")

    # Homophone-heavy edits (same length, different chars)
    if len(a) == len(h) and a != h:
        tags.append("substitution_homophone_likely")

    # Partial overlap suggests accent/noise impact on boundary words
    overlap = sum(1 for ch in h if ch in a)
    if overlap / max(len(h), 1) < 0.6:
        tags.append("accent_or_noise_impact")

    if not tags:
        tags.append("other")
    return tags


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--annotations",
        type=Path,
        default=Path("speech-annotation-demo/annotations/human_annotations.csv"),
    )
    parser.add_argument(
        "--audio-root",
        type=Path,
        default=Path("speech-annotation-demo"),
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("ai-speech-evaluation-demo/results"),
    )
    parser.add_argument("--model", default="base")
    parser.add_argument("--language", default="zh")
    args = parser.parse_args()

    args.output_dir.mkdir(parents=True, exist_ok=True)

    rows = list(csv.DictReader(args.annotations.open(encoding="utf-8")))
    print(f"Loading Whisper model: {args.model}")
    model = whisper.load_model(args.model)

    results: list[dict] = []
    for row in tqdm(rows, desc="Transcribing"):
        audio_path = args.audio_root / row["audio_file"]
        out = model.transcribe(str(audio_path), language=args.language, fp16=False)
        ai_text = (out.get("text") or "").strip()

        human = row["human_transcript"]
        tags = classify_error(human, ai_text)
        wer = jiwer.wer(normalize_text(human), normalize_text(ai_text)) if human else 1.0
        cer = jiwer.cer(normalize_text(human), normalize_text(ai_text)) if human else 1.0

        results.append(
            {
                "id": row["id"],
                "audio_file": row["audio_file"],
                "human_transcript": human,
                "whisper_transcript": ai_text,
                "wer": round(wer, 4),
                "cer": round(cer, 4),
                "error_tags": tags,
                "noise_level": row.get("noise_level", ""),
                "accent_notes": row.get("accent_notes", ""),
            }
        )

    results_path = args.output_dir / "whisper_vs_human.json"
    results_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")

    df = pd.DataFrame(results)
    df["error_tags_str"] = df["error_tags"].apply(lambda x: ",".join(x))
    csv_path = args.output_dir / "whisper_vs_human.csv"
    df.drop(columns=["error_tags"]).to_csv(csv_path, index=False, encoding="utf-8-sig")

    tag_counter: Counter[str] = Counter()
    for item in results:
        for tag in item["error_tags"]:
            tag_counter[tag] += 1

    summary = {
        "model": args.model,
        "language": args.language,
        "num_clips": len(results),
        "avg_wer": round(df["wer"].mean(), 4),
        "avg_cer": round(df["cer"].mean(), 4),
        "median_cer": round(df["cer"].median(), 4),
        "error_type_counts": dict(tag_counter),
        "clips_with_cer_gt_0.2": int((df["cer"] > 0.2).sum()),
        "clips_with_cer_eq_0": int((df["cer"] == 0).sum()),
        "notes": "Chinese evaluation uses CER as primary metric; text normalized to simplified Chinese.",
    }
    summary_path = args.output_dir / "summary.json"
    summary_path.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")

    _plot_error_distribution(tag_counter, args.output_dir / "error_type_distribution.png")
    _plot_cer_histogram(df, args.output_dir / "cer_histogram.png")

    print(json.dumps(summary, ensure_ascii=False, indent=2))
    print(f"Results saved to {args.output_dir}")


def _plot_error_distribution(counter: Counter, path: Path) -> None:
    if not counter:
        return
    labels, values = zip(*counter.most_common())
    plt.figure(figsize=(8, 4))
    plt.bar(labels, values)
    plt.xticks(rotation=30, ha="right")
    plt.title("ASR Error Type Distribution")
    plt.tight_layout()
    plt.savefig(path, dpi=150)
    plt.close()


def _plot_cer_histogram(df: pd.DataFrame, path: Path) -> None:
    plt.figure(figsize=(6, 4))
    plt.hist(df["cer"], bins=10)
    plt.xlabel("CER")
    plt.ylabel("Clip count")
    plt.title("Whisper CER Distribution (Simplified Chinese)")
    plt.tight_layout()
    plt.savefig(path, dpi=150)
    plt.close()


if __name__ == "__main__":
    main()
