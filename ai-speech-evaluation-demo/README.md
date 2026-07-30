# AI Speech Evaluation Demo

Compare **OpenAI Whisper** transcriptions against **human annotations** from `../speech-annotation-demo/`.

## What this demo does

1. Runs Whisper (`base` model) on 30 Mandarin clips
2. Compares output to human ground truth
3. Computes **CER** (primary for Chinese) and WER
4. Tags likely error types:
   - `deletion` (漏词)
   - `insertion` (多词)
   - `substitution_homophone_likely` (同音替换)
   - `accent_or_noise_impact` (口音/噪声影响)
   - `missing_transcription`

## Quick start

```bash
pip install -r requirements.txt
python scripts/evaluate_whisper.py --model base --language zh
```

Outputs are written to `results/`:
- `whisper_vs_human.csv` — per-clip comparison
- `whisper_vs_human.json` — full results with error tags
- `summary.json` — aggregate metrics
- `error_type_distribution.png`
- `cer_histogram.png`
- `ERROR_ANALYSIS.md` — qualitative error breakdown

## Evaluation methodology

### Text normalization
Before metric calculation, both human and AI transcripts are normalized:
- lowercased
- whitespace removed
- Chinese punctuation removed

This focuses evaluation on **lexical content**, not formatting differences.

### Error tagging (heuristic)
Tags are assigned with simple rules for portfolio-level analysis:
- length mismatch → insertion/deletion
- same length but different characters → homophone-like substitution
- low character overlap → accent/noise impact

These tags are meant for **qualitative review**, not linguistic gold labels.

## Example analysis questions

Use the CSV to answer:
1. Which clips have highest WER?
2. Are errors concentrated in code-switched tokens (`wifi`, `coaster`)?
3. Do long sentences (`fleurs_zh_004`) increase deletion errors?
4. Are numeric phrases (`1767`, `100米`) transcribed reliably?

## Sample result schema

| id | human_transcript | whisper_transcript | wer | error_tags |
|---|---|---|---|---|
| fleurs_zh_007 | 他称他制作了一个wifi门铃 | ... | 0.12 | substitution_homophone_likely |

## Resume bullet (suggested)

> Built a small speech annotation and evaluation project to better understand multilingual speech data quality and AI transcription performance.

## Related

- Human labels: `../speech-annotation-demo/`
- Evaluation script: `../scripts/evaluate_whisper.py`
