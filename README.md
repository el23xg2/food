# 高雪怿 · Product Case Studies

AI Native 产品经理作品集网站。记录产品决策过程，从问题定义到可运行的产品。

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS 4**
- **Framer Motion**
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### 方式一：一键导入（推荐，约 2 分钟）

1. 打开 [Vercel 导入页面](https://vercel.com/new/import?s=https://github.com/el23xg2/food)
2. 使用 GitHub 登录并授权 Vercel
3. 选择仓库 `el23xg2/food`，分支 `main`
4. Framework 会自动识别为 **Next.js**，无需修改配置
5. 点击 **Deploy**，等待约 1–2 分钟

部署完成后，在 `lib/site.ts` 中将 `url` 更新为你的 Vercel 域名（如 `https://food-xxx.vercel.app`）。

### 方式二：GitHub Actions 自动部署

在 GitHub 仓库 Settings → Secrets 中添加：

- `VERCEL_TOKEN` — 从 [Vercel Account Tokens](https://vercel.com/account/tokens) 获取
- `VERCEL_ORG_ID` — 运行 `vercel link` 后在 `.vercel/project.json` 中查看
- `VERCEL_PROJECT_ID` — 同上

推送至 `main` 分支后将自动部署。

## Adding a New Case Study

1. Create a new file in `content/cases/` (e.g. `my-project.ts`)
2. Export a `CaseStudy` object following the type in `types/case-study.ts`
3. Import and add it to the `cases` array in `content/cases/registry.ts`

Homepage, `/cases` index, sitemap, and navigation will update automatically — no homepage code changes needed.

## Project Structure

```
app/                    # Next.js pages
  cases/[slug]/         # Case study detail pages
  ai-workflow/          # AI workflow methodology
  contact/              # Contact page
components/
  cases/                # Case study components
  layout/               # Header, Footer
  ui/                   # Shared UI components
content/cases/          # Case study content (one file per project)
lib/                    # Utilities
types/                  # TypeScript types
```

## Case Study Structure

Each case study follows a seven-act structure:

1. **Why** — 为什么做
2. **Problem** — 问题是什么
3. **Opportunity** — 机会在哪里
4. **Solution** — 产品方案
5. **AI Workflow** — AI 如何参与
6. **Outcome** — 结果
7. **Reflection** — 反思
