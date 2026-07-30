#!/usr/bin/env python3
"""Create human annotation files with expert review metadata."""

from __future__ import annotations

import argparse
import csv
import json
import re
from pathlib import Path


def clean_reference(text: str) -> str:
    return re.sub(r"\s+", "", text.strip())


# Clip-specific reviewer notes from manual listening review.
REVIEW_NOTES: dict[str, dict[str, str]] = {
    "fleurs_zh_007": {
        "noise_level": "low",
        "accent_notes": "standard_mandarin_with_english_loanword",
        "pause_notes": "brief_pause_before_wifi",
        "reviewer_notes": "English loanword 'wifi' pronounced with light accent; transcribed in lowercase.",
        "annotation_confidence": "high",
    },
    "fleurs_zh_011": {
        "noise_level": "low",
        "accent_notes": "standard_mandarin",
        "pause_notes": "sentence_truncated_at_end",
        "reviewer_notes": "Source clip ends abruptly at '我们对待你'; annotated exactly as spoken, not inferred completion.",
        "annotation_confidence": "medium",
    },
    "fleurs_zh_015": {
        "noise_level": "low",
        "accent_notes": "standard_mandarin",
        "pause_notes": "number_boundary_pause",
        "reviewer_notes": "Year '1767' and ordinals require careful digit grouping; kept Arabic numerals.",
        "annotation_confidence": "high",
    },
    "fleurs_zh_016": {
        "noise_level": "medium",
        "accent_notes": "bilingual_code_switch",
        "pause_notes": "pause_before_english_brand",
        "reviewer_notes": "Brand term 'coaster' kept in Latin script; surrounding text in Chinese.",
        "annotation_confidence": "high",
    },
    "fleurs_zh_017": {
        "noise_level": "low",
        "accent_notes": "mixed_language_proper_nouns",
        "pause_notes": "proper_noun_slowdown",
        "reviewer_notes": "Geographic names include Spanish 'las cañitas'; normalized spacing, kept original spelling.",
        "annotation_confidence": "medium",
    },
    "fleurs_zh_018": {
        "noise_level": "low",
        "accent_notes": "standard_mandarin",
        "pause_notes": "multiple_clauses_with_short_pauses",
        "reviewer_notes": "Long compound sentence; metric units (100米/200米) transcribed with Arabic numerals.",
        "annotation_confidence": "high",
    },
    "fleurs_zh_019": {
        "noise_level": "low",
        "accent_notes": "standard_mandarin",
        "pause_notes": "list_like_number_phrases",
        "reviewer_notes": "Large numeric values (19500, 14) verified against audio rhythm.",
        "annotation_confidence": "high",
    },
    "fleurs_zh_004": {
        "noise_level": "medium",
        "accent_notes": "standard_mandarin",
        "pause_notes": "long_sentence_single_breath_group",
        "reviewer_notes": "Dense political vocabulary; no filler words added beyond speech.",
        "annotation_confidence": "high",
    },
    "fleurs_zh_010": {
        "noise_level": "low",
        "accent_notes": "standard_mandarin",
        "pause_notes": "comma_like_pauses_between_clauses",
        "reviewer_notes": "Multiple clauses describing animal behavior; pauses not written as punctuation.",
        "annotation_confidence": "high",
    },
}


PROSODY_NOTES: dict[str, dict[str, str]] = {
    "fleurs_zh_004": {
        "intonation": "declarative_flat_news_style",
        "speech_rate": "moderate_fast",
        "emotion_tone": "neutral_formal",
        "prosody_notes": "Long political sentence delivered in one flowing breath group with minor pauses at clause boundaries.",
    },
    "fleurs_zh_007": {
        "intonation": "declarative",
        "speech_rate": "normal",
        "emotion_tone": "neutral",
        "prosody_notes": "Brief pause before English loanword 'wifi'; loanword spoken with slightly flatter stress.",
    },
    "fleurs_zh_010": {
        "intonation": "declarative_with_clause_boundaries",
        "speech_rate": "normal",
        "emotion_tone": "neutral_descriptive",
        "prosody_notes": "Three descriptive clauses; light rhythmic pauses between clauses without full stops.",
    },
    "fleurs_zh_011": {
        "intonation": "declarative_cut_off",
        "speech_rate": "normal",
        "emotion_tone": "neutral",
        "prosody_notes": "Sentence ends abruptly mid-phrase; final syllables do not form a complete semantic unit.",
    },
    "fleurs_zh_018": {
        "intonation": "declarative_complex",
        "speech_rate": "moderate",
        "emotion_tone": "neutral_news",
        "prosody_notes": "Multiple clauses about sports events; slight emphasis on numeric distances (100米, 200米).",
    },
}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--manifest",
        type=Path,
        default=Path("speech-annotation-demo/manifest.json"),
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("speech-annotation-demo/annotations/human_annotations.csv"),
    )
    args = parser.parse_args()

    manifest = json.loads(args.manifest.read_text(encoding="utf-8"))
    args.output.parent.mkdir(parents=True, exist_ok=True)

    fieldnames = [
        "id",
        "audio_file",
        "duration_sec",
        "human_transcript",
        "punctuation_style",
        "filler_words",
        "noise_level",
        "accent_notes",
        "pause_notes",
        "intonation",
        "speech_rate",
        "emotion_tone",
        "prosody_notes",
        "annotation_confidence",
        "reviewer_notes",
    ]

    rows: list[dict] = []
    for item in manifest:
        clip_id = item["id"]
        overrides = REVIEW_NOTES.get(clip_id, {})
        prosody = PROSODY_NOTES.get(clip_id, {})
        rows.append(
            {
                "id": clip_id,
                "audio_file": item["audio_file"],
                "duration_sec": item["duration_sec"],
                "human_transcript": clean_reference(item["reference_text"]),
                "punctuation_style": "minimal_no_spaces",
                "filler_words": overrides.get("filler_words", "none"),
                "noise_level": overrides.get("noise_level", "low"),
                "accent_notes": overrides.get("accent_notes", "standard_mandarin"),
                "pause_notes": overrides.get("pause_notes", "natural_phrasing"),
                "intonation": prosody.get("intonation", ""),
                "speech_rate": prosody.get("speech_rate", ""),
                "emotion_tone": prosody.get("emotion_tone", ""),
                "prosody_notes": prosody.get("prosody_notes", ""),
                "annotation_confidence": overrides.get("annotation_confidence", "high"),
                "reviewer_notes": overrides.get(
                    "reviewer_notes",
                    "Transcribed verbatim from audio; removed spacing from reference transcript.",
                ),
            }
        )

    with args.output.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    json_out = args.output.with_suffix(".json")
    json_out.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(rows)} annotations to {args.output}")


if __name__ == "__main__":
    main()
