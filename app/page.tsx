import Link from "next/link";
import { getAllCases, getFeaturedCases } from "@/lib/cases";
import { siteConfig } from "@/lib/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { CaseCard } from "@/components/cases/CaseCard";
import { CaseListItem } from "@/components/cases/CaseListItem";

export default function HomePage() {
  const featuredCases = getFeaturedCases();
  const allCases = getAllCases();

  return (
    <>
      {/* Prelude */}
      <section className="flex min-h-[85vh] items-center">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] text-subtle">
              {siteConfig.title}
            </p>
            <h1 className="mt-6 text-4xl font-medium tracking-tight text-foreground md:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-xl text-muted md:text-2xl">
              {siteConfig.role}
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              记录产品决策过程。
              <br />
              从问题定义到可运行的产品。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/cases"
                className="inline-flex items-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                进入 Case Studies →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <h2 className="text-sm uppercase tracking-[0.2em] text-subtle">
              Featured
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredCases.map((caseStudy, i) => (
              <FadeIn key={caseStudy.slug} delay={i * 0.1}>
                <CaseCard caseStudy={caseStudy} variant="featured" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All Cases */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <div className="flex items-end justify-between">
              <h2 className="text-sm uppercase tracking-[0.2em] text-subtle">
                All Case Studies
              </h2>
              <span className="text-sm text-subtle">{allCases.length} projects</span>
            </div>
          </FadeIn>
          <div className="mt-8">
            {allCases.map((caseStudy, i) => (
              <FadeIn key={caseStudy.slug} delay={i * 0.05}>
                <CaseListItem caseStudy={caseStudy} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow Entry */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <Link
              href="/ai-workflow"
              className="group block rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:bg-surface-elevated md:p-12"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-subtle">
                Methodology
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
                AI 如何参与我的产品开发
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                六个项目中的 AI 工作流模式总结——从问题定义到产品验证，AI
                在每个环节扮演什么角色。
              </p>
              <p className="mt-6 text-sm text-subtle transition-colors group-hover:text-accent">
                阅读 AI Workflow →
              </p>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
