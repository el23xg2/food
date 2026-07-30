# Mandarin Speech Annotation & ASR Evaluation Portfolio

Two small, reproducible demos for an **Audio / AI Tutor** portfolio:

1. **Speech Annotation Demo** — manual Mandarin transcription + annotation guidelines  
2. **AI Speech Evaluation Demo** — Whisper ASR vs human labels + error analysis

## Resume-ready summary

Built a small speech annotation and evaluation project to better understand multilingual speech data quality and AI transcription performance.

## Repository layout

```
.
├── speech-annotation-demo/          # human transcription + guidelines
├── ai-speech-evaluation-demo/     # Whisper evaluation results
├── scripts/
│   ├── download_samples.py
│   ├── create_annotations.py
│   └── evaluate_whisper.py
└── requirements.txt
```

## Setup

```bash
pip install -r requirements.txt
```

## Reproduce end-to-end

```bash
# 1) Download 30 Mandarin clips (FLEURS cmn_hans_cn)
python scripts/download_samples.py --count 30

# 2) Create human annotation files
python scripts/create_annotations.py

# 3) Run Whisper evaluation
python scripts/evaluate_whisper.py --model base --language zh
```

## Data source

- **Audio:** [google/fleurs](https://huggingface.co/datasets/google/fleurs) (`cmn_hans_cn`)
- **ASR model:** [OpenAI Whisper](https://github.com/openai/whisper) (`base`)

FLEURS is used as an open, real-human Mandarin speech corpus with reference transcripts. The annotation workflow mirrors Common Voice-style practices (verbatim transcription, metadata for noise/accent/pauses).

## What I learned

- Designing consistent annotation guidelines reduces reviewer drift.
- ASR errors are not random: code-switching, numbers, and long clauses are common failure modes.
- Human labels and normalized metrics (WER/CER) are necessary to interpret model output responsibly.

## Portfolio & Application

- **Speech annotation project:** [speech-annotation-demo](./speech-annotation-demo/)
- **ASR evaluation:** [ai-speech-evaluation-demo](./ai-speech-evaluation-demo/)
- **SpaceXAI application materials:** [application](./application/)
- **Voice recording guide:** [voice-samples](./voice-samples/)

## Author

Portfolio project for AI Tutor (Audio) applications.
