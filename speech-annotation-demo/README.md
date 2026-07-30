# Speech Annotation Demo

A small Mandarin speech annotation project built to practice **human transcription**, **quality guidelines**, and **metadata capture** for AI tutor / audio data workflows.

## What this demo includes

- **30 real Mandarin speech clips** sourced from the open [FLEURS](https://huggingface.co/datasets/google/fleurs) dataset (`cmn_hans_cn`, validation split)
- **Human annotations** in `annotations/human_annotations.csv`
- **Annotation guidelines** in `ANNOTATION_GUIDELINES.md`
- Reproducible download script in `../scripts/download_samples.py`

> **Why FLEURS instead of Common Voice?**  
> Mozilla Common Voice now distributes large releases via [Mozilla Data Collective](https://mozilladatacollective.com/), which requires registration for bulk download. FLEURS provides the same type of open, real-human Mandarin speech with reference transcripts and is practical for a lightweight portfolio demo.

## Project structure

```
speech-annotation-demo/
├── audio/                         # 30 wav clips (16 kHz)
├── annotations/
│   ├── human_annotations.csv      # primary annotation sheet
│   └── human_annotations.json
├── manifest.json                  # clip metadata + source references
├── ANNOTATION_GUIDELINES.md
└── README.md
```

## Annotation principles (summary)

### 1. Verbatim transcription
- Write exactly what is spoken.
- Do **not** correct grammar or complete truncated sentences.
- Example: clip `fleurs_zh_011` ends abruptly — annotation stops at the spoken boundary.

### 2. Punctuation & spacing
- Use **minimal punctuation** for ASR-style labels.
- Remove spaces between Chinese characters.
- Keep Arabic numerals when spoken (`1767`, `100米`).
- Keep necessary English/foreign tokens (`wifi`, `coaster`, `las cañitas`).

### 3. Accents & dialect
- Do not normalize accent to standard written forms.
- If pronunciation differs from canonical spelling, prefer **phonetic fidelity** over dictionary spelling.
- Record accent observations in `accent_notes`.

### 4. Noise handling
- Background noise does **not** justify inventing missing words.
- If a word is unintelligible, mark lower `annotation_confidence` and explain in `reviewer_notes`.
- Noise level is rated qualitatively: `low` / `medium` / `high`.

### 5. Pauses & disfluencies
- Do not insert commas for pauses unless required by project spec.
- Explicit filler words (`嗯`, `那个`) are preserved when clearly audible.
- Pause behavior is documented in `pause_notes`.

## How to reproduce

```bash
pip install -r requirements.txt
python scripts/download_samples.py --count 30
python scripts/create_annotations.py
```

## Sample annotation row

| id | human_transcript | noise_level | accent_notes | annotation_confidence |
|---|---|---|---|---|
| fleurs_zh_007 | 他称他制作了一个wifi门铃 | low | standard_mandarin_with_english_loanword | high |
| fleurs_zh_011 | 然而我们百分之八十的商品在中美洲国家被征收关税我们对待你 | low | standard_mandarin | medium |

## Skills demonstrated

- Manual speech transcription in Mandarin
- Consistent annotation schema design
- Handling multilingual tokens, numbers, and truncated audio
- Documenting subjective decisions for downstream ML teams

## Next step

See `../ai-speech-evaluation-demo/` for Whisper-based ASR evaluation against these human labels.
