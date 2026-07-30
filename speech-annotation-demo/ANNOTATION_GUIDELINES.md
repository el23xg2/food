# Mandarin Speech Annotation Guidelines

These guidelines were used to produce `annotations/human_annotations.csv`.

## 1. Goal

Create **human ground-truth transcripts** suitable for:
- training / fine-tuning speech models
- evaluating ASR quality
- teaching annotation consistency to other reviewers

## 2. Transcription style

| Rule | Example |
|---|---|
| Chinese characters only, no spaces | `他们仍在努力确定` |
| Keep spoken numerals as digits | `1767年`, `100米` |
| Keep spoken foreign words | `wifi`, `coaster` |
| No sentence completion if audio is cut off | annotate only spoken content |
| No semantic paraphrase | do not rewrite for fluency |

## 3. Handling accents

Mandarin in this dataset is mostly standard, but real speech includes:
- English loanwords with non-native phonetics
- proper nouns from other languages
- faster reduced syllables in long clauses

**Policy:**
1. Transcribe what is heard, not the "correct" news-reading form.
2. Add a short note in `accent_notes` when accent/code-switch affects spelling choices.
3. If unsure between two homophones, choose the one that matches spoken semantics; lower confidence if ambiguous.

## 4. Handling noise

FLEURS studio recordings are relatively clean, but some clips include:
- slight room tone
- consonant softness at phrase boundaries
- fast speech in long sentences

**Policy:**
1. Never guess missing words due to noise.
2. Use `noise_level`:
   - `low`: fully intelligible
   - `medium`: occasional boundary uncertainty
   - `high`: repeated listening still ambiguous
3. Document uncertainty in `reviewer_notes`.

## 5. Handling pauses

Pauses are **metadata**, not always punctuation.

Record pause behavior in `pause_notes`, e.g.:
- `natural_phrasing`
- `number_boundary_pause`
- `sentence_truncated_at_end`
- `comma_like_pauses_between_clauses`

Do not insert `[pause]` tokens unless a downstream spec requires them.

## 6. Confidence levels

| Level | Meaning |
|---|---|
| `high` | repeated listenings agree |
| `medium` | minor ambiguity (truncation, proper noun) |
| `low` | significant uncertainty; needs second reviewer |

## 7. Quality checklist (per clip)

- [ ] Listened at least twice with headphones
- [ ] Transcript matches audio verbatim
- [ ] Numbers / foreign words verified
- [ ] Accent/noise/pause notes filled when non-trivial
- [ ] Confidence reflects real uncertainty

## 8. Common edge cases in this dataset

1. **Code-switching** (`wifi`, `coaster`, `las cañitas`)  
   Keep original script; do not force Chinese transliteration unless clearly spoken that way.

2. **Truncated endings** (`fleurs_zh_011`)  
   Do not complete the sentence.

3. **Long compound sentences** (`fleurs_zh_004`, `fleurs_zh_018`)  
   Maintain spoken word order; avoid adding punctuation that implies unspoken boundaries.

4. **Homophones**  
   If ASR or another reviewer disagrees, note the alternative in `reviewer_notes`.

## 9. Annotation schema

| Field | Description |
|---|---|
| `human_transcript` | verbatim transcript |
| `punctuation_style` | formatting convention used |
| `filler_words` | none / present |
| `noise_level` | low / medium / high |
| `accent_notes` | short accent or dialect observation |
| `pause_notes` | pause behavior summary |
| `annotation_confidence` | high / medium / low |
| `reviewer_notes` | free-text decisions for auditors |
