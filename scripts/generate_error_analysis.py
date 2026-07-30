#!/usr/bin/env python3
"""Generate a markdown error analysis report from evaluation results."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--results",
        type=Path,
        default=Path("ai-speech-evaluation-demo/results/whisper_vs_human.json"),
    )
    parser.add_argument(
        "--summary",
        type=Path,
        default=Path("ai-speech-evaluation-demo/results/summary.json"),
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("ai-speech-evaluation-demo/ERROR_ANALYSIS.md"),
    )
    args = parser.parse_args()

    results = json.loads(args.results.read_text(encoding="utf-8"))
    summary = json.loads(args.summary.read_text(encoding="utf-8"))

    sorted_by_cer = sorted(results, key=lambda x: x["cer"], reverse=True)
    top_errors = sorted_by_cer[:8]
    perfect = [r for r in results if r["cer"] == 0]

    lines = [
        "# Error Analysis: Whisper vs Human Annotations",
        "",
        "## Summary",
        "",
        f"- Model: `{summary['model']}`",
        f"- Clips evaluated: **{summary['num_clips']}**",
        f"- Average CER: **{summary['avg_cer']:.2%}**",
        f"- Median CER: **{summary['median_cer']:.2%}**",
        f"- Perfect matches (CER=0): **{summary['clips_with_cer_eq_0']}**",
        f"- High-error clips (CER>0.2): **{summary['clips_with_cer_gt_0.2']}**",
        "",
        "> CER (Character Error Rate) is the primary metric for Chinese ASR in this demo.",
        "",
        "## Error type distribution",
        "",
        "| Error tag | Count | Interpretation |",
        "|---|---:|---|",
    ]

    tag_meanings = {
        "correct": "Exact match after normalization",
        "deletion": "Missing characters (漏词)",
        "insertion": "Extra characters (多词)",
        "substitution_homophone_likely": "Same-length substitution, often homophone-related (同音字)",
        "accent_or_noise_impact": "Low overlap; likely accent/noise/phrase boundary issue",
        "missing_transcription": "ASR returned empty output",
        "other": "Unclassified mismatch",
    }

    for tag, count in sorted(summary["error_type_counts"].items(), key=lambda x: -x[1]):
        meaning = tag_meanings.get(tag, "")
        lines.append(f"| `{tag}` | {count} | {meaning} |")

    lines.extend(
        [
            "",
            "## Top error examples",
            "",
        ]
    )

    for item in top_errors:
        tags = ", ".join(item["error_tags"])
        lines.extend(
            [
                f"### `{item['id']}` (CER={item['cer']:.2%})",
                "",
                f"- **Human:** {item['human_transcript']}",
                f"- **Whisper:** {item['whisper_transcript']}",
                f"- **Tags:** {tags}",
                "",
            ]
        )

    lines.extend(
        [
            "## Observations",
            "",
            "1. **Homophone substitutions** are common in Mandarin ASR (e.g., 税/睡, 宗派/中派).",
            "2. **Code-switched tokens** (`wifi`, `coaster`, foreign place names) increase error risk.",
            "3. **Long sentences** tend to accumulate small boundary errors across clauses.",
            "4. **Numeric phrases** are mostly stable when clearly articulated.",
            "5. **Traditional vs simplified** output must be normalized before fair comparison.",
            "",
            "## Perfect / near-perfect clips",
            "",
        ]
    )

    if perfect:
        for item in perfect[:5]:
            lines.append(f"- `{item['id']}`: {item['human_transcript']}")
    else:
        near = sorted(results, key=lambda x: x["cer"])[:5]
        for item in near:
            lines.append(f"- `{item['id']}` (CER={item['cer']:.2%}): {item['human_transcript']}")

    args.output.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Wrote {args.output}")


if __name__ == "__main__":
    main()
