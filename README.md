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

```bash
npm run build
```

Or connect the repository to [Vercel](https://vercel.com) for automatic deployments.

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
