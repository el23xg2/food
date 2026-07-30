# Error Analysis: Whisper vs Human Annotations

## Summary

- Model: `base`
- Clips evaluated: **30**
- Average CER: **14.07%**
- Median CER: **10.30%**
- Perfect matches (CER=0): **3**
- High-error clips (CER>0.2): **10**

> CER (Character Error Rate) is the primary metric for Chinese ASR in this demo.

## Error type distribution

| Error tag | Count | Interpretation |
|---|---:|---|
| `substitution_homophone_likely` | 18 | Same-length substitution, often homophone-related (同音字) |
| `deletion` | 6 | Missing characters (漏词) |
| `correct` | 3 | Exact match after normalization |
| `insertion` | 3 | Extra characters (多词) |
| `accent_or_noise_impact` | 1 | Low overlap; likely accent/noise/phrase boundary issue |

## Top error examples

### `fleurs_zh_017` (CER=42.11%)

- **Human:** 每年规模最大的锦标赛于12月份在拉斯卡尼塔斯lascañitas的马球场举行
- **Whisper:** 每年規模最大的金票賽與12月份在拉斯卡因大斯的馬球上舉行
- **Tags:** deletion, accent_or_noise_impact

### `fleurs_zh_027` (CER=34.38%)

- **Human:** 很快配备了防暴装备的警察进入了院子并用催泪瓦斯把囚犯逼得走投无路
- **Whisper:** 很快配備了防爆裝備的警察清洛院子並用吹類瓦斯江囚犯壁的走投烏洛
- **Tags:** deletion

### `fleurs_zh_018` (CER=31.58%)

- **Human:** 这位奥运会金牌得主本应参加100米和200米自由泳和英联邦运动会的三项接力赛但由于他的抱怨他的健康状况一直受到质疑
- **Whisper:** 這位高雲會金牌的主本贏參加的一百米和兩百米自由永恆贏兩幫運動會的三項建立賽但由於他的抱園他的健康狀況一直受到質疑
- **Tags:** deletion

### `fleurs_zh_016` (CER=30.77%)

- **Human:** 大多数地区都能坐到舒适结实的日本coaster小巴车
- **Whisper:** 大多数地区都能做到出使揭示的日本Costas小巴车
- **Tags:** deletion

### `fleurs_zh_025` (CER=29.63%)

- **Human:** 目睹第一次世界大战中的肆虐残暴后各国都渴望避免重蹈覆辙
- **Whisper:** 莫篤第一次世界大戰的中的私女殘暴後各國都渴望避免重打負責
- **Tags:** insertion

### `fleurs_zh_003` (CER=27.78%)

- **Human:** 它也没有权力推翻各州之间的税法和关税
- **Whisper:** 他有沒有權力推翻各周之間的睡法和關水
- **Tags:** substitution_homophone_likely

### `fleurs_zh_029` (CER=25.93%)

- **Human:** 由于一天只颁发十八块奖牌许多国家的运动员未能登上领奖台
- **Whisper:** 由于一天只班,班发18块奖牌,许多国家的运动员未能登上邻较抬
- **Tags:** insertion

### `fleurs_zh_002` (CER=25.00%)

- **Human:** 科学家表示这种动物的羽毛顶部为栗棕色底部为浅色或胡萝卜色
- **Whisper:** 科學家表示這種用物的羽毛頂部為力中色底部為前色或弧落不色
- **Tags:** substitution_homophone_likely

## Observations

1. **Homophone substitutions** are common in Mandarin ASR (e.g., 税/睡, 宗派/中派).
2. **Code-switched tokens** (`wifi`, `coaster`, foreign place names) increase error risk.
3. **Long sentences** tend to accumulate small boundary errors across clauses.
4. **Numeric phrases** are mostly stable when clearly articulated.
5. **Traditional vs simplified** output must be normalized before fair comparison.

## Perfect / near-perfect clips

- `fleurs_zh_001`: 他们仍在努力确定这次撞击的规模以及对地球的影响
- `fleurs_zh_007`: 他称他制作了一个wifi门铃
- `fleurs_zh_013`: 如果需要进行任何修改或有任何要求应该首先通过旅行代理商进行办理而不是直接与酒店接洽
