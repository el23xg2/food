# Interview Prep — SpaceXAI AI Tutor (Chinese)

## 1-minute self-introduction (English)

> I'm Xueyi, a native Mandarin speaker with IELTS 7.0 and a product management background. Recently I built a speech annotation portfolio where I manually transcribed 30 Mandarin clips, wrote annotation guidelines, and evaluated Whisper ASR against human labels. I found that homophone errors and code-switched words were the most common failure modes. My product work trained me to evaluate AI outputs carefully and document quality standards—skills I believe transfer directly to audio tutoring and speech data curation. I'm excited about helping improve multilingual voice AI at SpaceXAI.

## 1分钟中文自我介绍（备用）

> 我是高雪怡，中文母语，雅思七分。最近做了一个中文语音标注和评测的项目：人工转写了三十段音频，写了标注规范，并用 Whisper 做了自动语音识别对比和错误分析。我发现同音字和英中混读是最容易出错的地方。之前在做产品经理和 AI 辅助开发项目时，我主要负责评估 AI 输出质量、写清晰规范和做细节判断，我觉得这些能力和 AI Tutor 的音频标注、质检工作很接近。我希望能为 Grok 的多语言语音能力贡献高质量的数据和评测支持。

---

## Likely questions & suggested answers

### Q: Do you have professional speech annotation experience?

**A:** Not professionally yet. I built a portfolio project specifically to practice the workflow: verbatim transcription, handling edge cases like code-switching and truncated audio, and evaluating ASR output. I'm a fast learner and already comfortable with the core tasks.

### Q: How do you handle ambiguous or noisy audio?

**A:** I don't guess missing words. I annotate exactly what I hear, lower confidence when uncertain, and document the reason in reviewer notes. In my project, clip fleurs_zh_011 was truncated—I annotated only the spoken portion without completing the sentence.

### Q: Why do you want this role?

**A:** I enjoy work where human judgment directly improves AI quality. Voice AI is harder than text because of accents, noise, and prosody. I want to contribute to making multilingual systems more reliable, and this role matches my language skills and attention to detail.

### Q: How is your English?

**A:** IELTS 7.0. I studied and worked in the UK (University of Leeds MSc). I'm comfortable communicating in English for work and can provide clear voice recordings in English when needed.

### Q: What's the difference between good and bad training data?

**A:** Good data is consistent, verbatim, and documents ambiguity. Bad data mixes annotator assumptions, inconsistent handling of accents/noise, and paraphrased transcripts that don't match the audio. In my Whisper evaluation, many errors were homophones—showing why precise human labels matter.

---

## Clips to listen before interview

| Clip | Why |
|---|---|
| fleurs_zh_007 | English loanword `wifi` |
| fleurs_zh_011 | Truncated sentence — don't complete |
| fleurs_zh_003 | Homophone errors in ASR (税法→睡法) |
| fleurs_zh_016 | Code-switch `coaster` |
| fleurs_zh_004 | Long sentence, dense vocabulary |

---

## Key numbers to remember

- **30** clips annotated
- **~14%** average CER (Whisper base vs human)
- **3** perfect matches, **10** high-error clips
- Top error: **homophone substitution**
