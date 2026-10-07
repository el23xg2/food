"use client";

import { useEffect, useState } from "react";
import type { CaseStudy } from "@/types/case-study";
import { TRAVEL_CASE_SECTIONS } from "@/types/case-study";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { formatCaseNumber } from "@/lib/cases";

interface TravelCaseStudyContentProps {
  caseStudy: CaseStudy & {
    layout: "travel";
    travelProfile: NonNullable<CaseStudy["travelProfile"]>;
  };
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
      <span className="font-mono text-accent">{index}</span>
      <span className="text-muted"> / </span>
      {title}
    </h2>
  );
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
            CASE #{formatCaseNumber(caseStudy.number)} · TRAVEL
          </span>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl md:leading-tight">
            {caseStudy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
            {profile.caseAttribute}
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
              <p className="text-xs uppercase tracking-wider text-subtle">Key outcome</p>
              <p className="mt-1 text-sm text-foreground">{caseStudy.keyOutcome}</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="flex gap-16">
        <aside className="hidden w-52 shrink-0 lg:block">
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
          <section id="profile" className="scroll-mt-24">
            <FadeIn>
              <SectionHeading index="01" title="玩家画像：深度高频旅行者的真实样本" />
              <p className="prose-case mt-6">
                <span className="font-medium text-foreground">年度旅行资产：</span>
                {profile.playerProfile.annualAssets}
              </p>
              <p className="mt-8 text-sm font-medium text-foreground">多维场景覆盖</p>
              <ul className="mt-4 space-y-4">
                {profile.playerProfile.scenarios.map((s) => (
                  <li
                    key={s.label}
                    className="rounded-xl border border-border bg-surface p-5"
                  >
                    <p className="text-sm font-medium text-accent">{s.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </section>

          <section id="scenes" className="scroll-mt-24">
            <FadeIn>
              <SectionHeading index="02" title="场景复盘：旅行决策与「现场不确定性」" />
              <div className="mt-8 space-y-8">
                {profile.sceneReview.map((item, i) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-border bg-surface overflow-hidden"
                  >
                    <div className="border-b border-border-subtle bg-surface-elevated px-6 py-3">
                      <h3 className="text-sm font-medium text-foreground">
                        {i + 1}. {item.title}
                      </h3>
                    </div>
                    <div className="space-y-4 px-6 py-5 text-sm leading-relaxed">
                      <p className="text-muted">
                        <span className="font-medium text-foreground">现象 </span>
                        {item.phenomenon}
                      </p>
                      <p className="text-muted">
                        <span className="font-medium text-foreground">思考 </span>
                        {item.thinking}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </FadeIn>
          </section>

          <section id="pain" className="scroll-mt-24">
            <FadeIn>
              <SectionHeading index="03" title="核心痛点：从「内容社区」到「地图导航」的体验断层" />
              <div className="prose-case mt-6 space-y-4">
                <p>
                  <span className="font-medium text-foreground">真实场景 </span>
                  {profile.corePain.scene}
                </p>
                <p className="font-medium text-foreground">体验卡点</p>
                <ul>
                  {profile.corePain.painPoints.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p>
                  <span className="font-medium text-foreground">产品抽象 </span>
                  {profile.corePain.abstraction}
                </p>
              </div>
            </FadeIn>
          </section>

          <section id="concepts" className="scroll-mt-24">
            <FadeIn>
              <SectionHeading index="04" title="0-1 概念设想：AI Native 时代的旅行工具解法" />
              <p className="prose-case mt-6">
                <span className="font-medium text-foreground">核心目标 </span>
                {profile.concepts.goal}
              </p>
              <div className="mt-8 space-y-6">
                {profile.concepts.ideas.map((idea) => (
                  <article
                    key={idea.title}
                    className="rounded-xl border border-border bg-surface overflow-hidden"
                  >
                    <div className="border-b border-border-subtle bg-surface-elevated px-6 py-3">
                      <h3 className="text-sm font-medium text-foreground">{idea.title}</h3>
                    </div>
                    <div className="space-y-4 px-6 py-5 text-sm leading-relaxed">
                      <p className="text-muted">
                        <span className="font-medium text-foreground">AI 工作流 </span>
                        {idea.aiWorkflow}
                      </p>
                      <p className="text-muted">
                        <span className="font-medium text-foreground">产品体验 </span>
                        {idea.productExperience}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </FadeIn>
          </section>

          <section id="summary" className="scroll-mt-24">
            <FadeIn>
              <SectionHeading index="05" title="PM 思考与总结" />
              <div className="prose-case mt-8 space-y-4">
                {profile.pmSummary.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </section>
        </div>
      </div>
    </div>
  );
}
