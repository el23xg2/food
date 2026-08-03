#!/usr/bin/env python3
"""Generate portfolio screenshots from NutriDuel GDD sections."""

import shutil
import subprocess
import uuid
from pathlib import Path

import markdown

GDD_PATH = Path("/tmp/nutriduel/GAME_DESIGN_PRD.md")
OUT_DIR = Path("/workspace/public/images/cases/nutriduel")
HTML_DIR = Path("/tmp/nutriduel-gdd-html")

CSS = """
* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 48px 56px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  font-size: 15px;
  line-height: 1.65;
  color: #1a1a1a;
  background: #fafafa;
  width: 1200px;
}
.doc-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid #e5e5e5;
}
.doc-header h1 {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.doc-header .meta {
  color: #666;
  font-size: 14px;
}
.badge {
  display: inline-block;
  margin-top: 12px;
  padding: 4px 10px;
  border-radius: 6px;
  background: #eef6ff;
  color: #0969da;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.content {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 36px 40px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
h2 { font-size: 22px; margin: 0 0 16px; color: #111; }
h3 { font-size: 17px; margin: 24px 0 12px; color: #222; }
p { margin: 0 0 12px; }
ul { margin: 0 0 16px; padding-left: 1.4em; }
li { margin-bottom: 6px; }
blockquote {
  margin: 16px 0;
  padding: 12px 16px;
  border-left: 3px solid #0969da;
  background: #f6f8fa;
  color: #444;
}
pre, code {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
}
pre {
  background: #f6f8fa;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px 18px;
  overflow-x: auto;
  white-space: pre-wrap;
  line-height: 1.5;
  margin: 16px 0;
}
code { background: #f0f0f0; padding: 2px 6px; border-radius: 4px; }
table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 14px;
}
th, td {
  border: 1px solid #e0e0e0;
  padding: 10px 12px;
  text-align: left;
  vertical-align: top;
}
th { background: #f6f8fa; font-weight: 600; }
tr:nth-child(even) td { background: #fafafa; }
"""

SECTIONS = [
    {
        "file": "gdd-toc.png",
        "title": "NutriDuel 游戏设计规范文档",
        "badge": "GDD · 目录结构",
        "meta": "v8.3 · 5056 行 · 单一权威设计规范",
        "start": "## 如何使用本文档",
        "end": "## A. 游戏概述",
        "height": 1600,
    },
    {
        "file": "gdd-core-loop.png",
        "title": "核心玩法循环",
        "badge": "A.4 新手规则速览",
        "meta": "回合制策略 · 血糖系统驱动",
        "start": "### A.4 新手核心规则速览",
        "end": "## B. 核心资源：血糖系统",
        "height": 2000,
    },
    {
        "file": "gdd-turn-structure.png",
        "title": "回合结构",
        "badge": "C. 五阶段回合",
        "meta": "苏醒 → 摸牌 → 行动 → 代谢 → 结束",
        "start": "### C.1 回合顺序总览",
        "end": "### C.2 苏醒阶段",
        "height": 1200,
    },
    {
        "file": "gdd-nutrition-mapping.png",
        "title": "营养成分 → 数值映射",
        "badge": "M. 卡牌数值基准",
        "meta": "现实营养数据驱动游戏数值",
        "start": "### M.1 CSV（卡牌强度值）公式",
        "end": "### M.2 稀有度与数值上限对照",
        "height": 1400,
    },
    {
        "file": "gdd-rarity-system.png",
        "title": "稀有度与数值正交原则",
        "badge": "M.2 / M.4 / M.5",
        "meta": "现实营养密度 → ★级别 → 游戏技能",
        "start": "### M.2 稀有度与数值上限对照",
        "end": "### M.3 GI值定义表",
        "height": 2400,
    },
    {
        "file": "gdd-character-system.png",
        "title": "角色卡体系",
        "badge": "O. 饮食流派",
        "meta": "11 张角色卡 · 构筑策略核心",
        "start": "**角色卡 vs 方案卡：设计层次区分**",
        "end": "## P. 名菜卡规则",
        "height": 2200,
    },
    {
        "file": "gdd-balance-params.png",
        "title": "平衡性参数",
        "badge": "Q. 数值监控",
        "meta": "上限约束 · 已知风险 · 设计禁则",
        "start": "### Q.1 全卡池关键数值上限",
        "end": "## R. 样板卡组",
        "height": 2600,
    },
]


def extract_section(text: str, start: str, end: str) -> str:
    start_idx = text.find(start)
    if start_idx == -1:
        raise ValueError(f"Start marker not found: {start!r}")
    end_idx = text.find(end, start_idx + len(start))
    if end_idx == -1:
        raise ValueError(f"End marker not found: {end!r}")
    return text[start_idx:end_idx].strip()


def md_to_html(md: str) -> str:
    return markdown.markdown(
        md,
        extensions=["tables", "fenced_code", "nl2br"],
    )


def build_html(section: dict, body_md: str) -> str:
    body_html = md_to_html(body_md)
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>{section['title']}</title>
  <style>{CSS}</style>
</head>
<body>
  <div class="doc-header">
    <h1>{section['title']}</h1>
    <div class="meta">{section['meta']}</div>
    <div class="badge">{section['badge']}</div>
  </div>
  <div class="content">{body_html}</div>
</body>
</html>
"""


def screenshot(html_path: Path, png_path: Path, height: int = 1800) -> None:
    png_path.parent.mkdir(parents=True, exist_ok=True)
    profile_dir = Path(f"/tmp/chrome-gdd-{uuid.uuid4().hex}")
    profile_dir.mkdir(parents=True, exist_ok=True)
    cmd = [
        "google-chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--hide-scrollbars",
        "--run-all-compositor-stages-before-draw",
        f"--user-data-dir={profile_dir}",
        f"--screenshot={png_path}",
        f"--window-size=1200,{height}",
        f"file://{html_path}",
    ]
    try:
        subprocess.run(cmd, check=False, capture_output=True, timeout=20)
    except subprocess.TimeoutExpired:
        pass
    finally:
        shutil.rmtree(profile_dir, ignore_errors=True)

    if not png_path.exists():
        raise RuntimeError(f"Screenshot failed: {png_path}")


def main() -> None:
    text = GDD_PATH.read_text(encoding="utf-8")
    HTML_DIR.mkdir(parents=True, exist_ok=True)
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for section in SECTIONS:
        body_md = extract_section(text, section["start"], section["end"])
        html_path = HTML_DIR / section["file"].replace(".png", ".html")
        png_path = OUT_DIR / section["file"]
        html_path.write_text(build_html(section, body_md), encoding="utf-8")
        screenshot(html_path, png_path, section.get("height", 1800))
        print(f"✓ {section['file']}")


if __name__ == "__main__":
    main()
