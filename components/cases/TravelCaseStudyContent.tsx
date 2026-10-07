"use client";

import { useEffect, useState } from "react";
import type { CaseStudy } from "@/types/case-study";
import { TRAVEL_CASE_SECTIONS } from "@/types/case-study";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { formatCaseNumber } from "@/lib/cases";

interface TravelCaseStudyContentProps {
  caseStudy: CaseStudy & { layout: "travel"; travelProfile: NonNullable<CaseStudy["travelProfile"]> };
}

export function TravelCaseStudyContent({ caseStudy }: TravelCaseStudyContentProps) {
  const profile = caseStudy.travelProfile;
  type TravelSectionId = (typeof TRAVEL_CASE_SECTIONS)[number]["id"];
  const [activeSection, setActiveSection] = useState<TravelSectionId>(
    TRAVEL_CASE_SECTIONS[0].id
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    TRAVEL_CASE_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative">
      <FadeIn>
        <div className="mb-20 border-b border-border-subtle pb-16">
          <span className="font-mono text-sm text-accent">
            CASE STUDY {formatCaseNumber(caseStudy.number)} · TRAVEL
          </span>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {caseStudy.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-subtle">Role</p>
              <p className="mt-1 text-sm text-foreground">{caseStudy.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-subtle">Timeline</p>
              <p className="mt-1 text-sm text-foreground">{caseStudy.timeline}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-subtle">Key takeaway</p>
              <p className="mt-1 text-sm text-foreground">{caseStudy.keyOutcome}</p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted">
            {caseStudy.overview}
          </p>
        </div>
      </FadeIn>

      <div className="flex gap-16">
        <aside className="hidden w-48 shrink-0 lg:block">
          <nav className="sticky top-24">
            <p className="mb-4 text-xs uppercase tracking-wider text-subtle">Contents</p>
            <ul className="space-y-1">
              {TRAVEL_CASE_SECTIONS.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`block py-1.5 text-sm transition-colors ${
                      activeSection === id
                        ? "text-accent"
                        : "text-subtle hover:text-foreground"
                    }`}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0 flex-1 max-w-3xl space-y-20">
          <section id="hook" className="scroll-mt-24">
            <FadeIn>
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                这页在证明什么
              </h2>
              <p className="prose-case mt-6 text-muted">{profile.readerHook}</p>
              <ul className="mt-8 space-y-4">
                {profile.traitsForRole.map((t) => (
                  <li
                    key={t.label}
                    className="rounded-xl border border-border bg-surface p-5"
                  >
                    <p className="text-sm font-medium text-accent">{t.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t.detail}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </section>

          <section id="routes" className="scroll-mt-24">
            <FadeIn>
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                我规划并成行的路线
              </h2>
              <p className="mt-4 text-sm text-subtle">
                不是打卡清单，而是多次独立/结伴规划的真实样本（留学期间为主，延续至今）。
              </p>
              <div className="mt-8 space-y-6">
                {profile.routes.map((block) => (
                  <div
                    key={block.group}
                    className="rounded-xl border border-border bg-surface p-6"
                  >
                    <h3 className="text-sm font-medium text-foreground">{block.group}</h3>
                    <ul className="prose-case mt-4">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          <section id="journey" className="scroll-mt-24">
            <FadeIn>
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                小红书用户的决策链路
              </h2>
              <p className="mt-4 text-sm text-subtle">
                我长期在小红书消费旅行内容，熟悉从种草到出发的完整路径。
              </p>
              <ol className="mt-8 space-y-6">
                {profile.journey.map((step, i) => (
                  <li
                    key={step.stage}
                    className="relative rounded-xl border border-border bg-surface p-6 pl-14"
                  >
                    <span className="absolute left-5 top-6 font-mono text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-medium text-foreground">{step.stage}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                    <p className="mt-3 border-t border-border-subtle pt-3 text-sm leading-relaxed text-subtle">
                      <span className="text-foreground/80">摩擦：</span>
                      {step.friction}
                    </p>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </section>

          <section id="frictions" className="scroll-mt-24">
            <FadeIn>
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                三个亲身痛点
              </h2>
              <p className="mt-4 text-sm text-subtle">
                每个痛点 = 真实场景 + 若我做产品会怎么理解（不是教程，不是吐槽）。
              </p>
              <div className="mt-8 space-y-6">
                {profile.frictions.map((f) => (
                  <article
                    key={f.title}
                    className="rounded-xl border border-border bg-surface overflow-hidden"
                  >
                    <div className="border-b border-border-subtle bg-surface-elevated px-6 py-3">
                      <h3 className="text-sm font-medium text-foreground">{f.title}</h3>
                    </div>
                    <div className="space-y-4 px-6 py-5 text-sm leading-relaxed">
                      <p className="text-muted">
                        <span className="font-medium text-foreground/90">场景 </span>
                        {f.scene}
                      </p>
                      <p className="text-muted">
                        <span className="font-medium text-foreground/90">产品启示 </span>
                        {f.productInsight}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </FadeIn>
          </section>

          <section id="method" className="scroll-mt-24">
            <FadeIn>
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                我怎么定方案
              </h2>
              <ul className="prose-case mt-8">
                {profile.planningMethod.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </FadeIn>
          </section>

          <section id="bets" className="scroll-mt-24">
            <FadeIn>
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                我会先验证什么
              </h2>
              <p className="mt-4 text-sm text-subtle">
                作为 PM 的 hypothetical 方向——来自上述痛点，不是已上线功能。
              </p>
              <ul className="prose-case mt-8">
                {profile.productBets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </FadeIn>
          </section>

          <section id="fit" className="scroll-mt-24">
            <FadeIn>
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                和「创新产品经理 · 旅行」的对应
              </h2>
              <p className="prose-case mt-6 text-muted">{profile.roleFit}</p>
            </FadeIn>
          </section>
        </div>
      </div>
    </div>
  );
}
