"use client";

import { useEffect, useState } from "react";
import type { CaseStudy, CaseStudySection } from "@/types/case-study";
import { CASE_SECTIONS } from "@/types/case-study";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { CaseStudyGallery } from "@/components/cases/CaseStudyGallery";
import { ProductHuntCard } from "@/components/cases/ProductHuntCard";
import { formatCaseNumber } from "@/lib/cases";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

function SectionContent({ section }: { section: CaseStudySection }) {
  return (
    <div className="prose-case">
      {section.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul>
          {section.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const [activeSection, setActiveSection] = useState("why");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    CASE_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const sectionContent: Record<string, React.ReactNode> = {
    why: <SectionContent section={caseStudy.why} />,
    problem: <SectionContent section={caseStudy.problem} />,
    opportunity: <SectionContent section={caseStudy.opportunity} />,
    solution: (
      <div>
        <SectionContent section={caseStudy.solution} />
        {caseStudy.media?.productImages && (
          <CaseStudyGallery
            title="Product Screenshots"
            images={caseStudy.media.productImages}
          />
        )}
      </div>
    ),
    aiWorkflow: (
      <div>
        <div className="prose-case">
          <p>{caseStudy.aiWorkflow.intro}</p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated">
                <th className="px-4 py-3 font-medium text-foreground">阶段</th>
                <th className="px-4 py-3 font-medium text-foreground">我的工作</th>
                <th className="px-4 py-3 font-medium text-foreground">AI 的角色</th>
              </tr>
            </thead>
            <tbody>
              {caseStudy.aiWorkflow.rows.map((row, i) => (
                <tr key={i} className="border-b border-border-subtle last:border-0">
                  <td className="px-4 py-3 text-accent">{row.phase}</td>
                  <td className="px-4 py-3 text-muted">{row.myWork}</td>
                  <td className="px-4 py-3 text-muted">{row.aiRole}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {caseStudy.aiWorkflow.examples.length > 0 && (
          <ul className="prose-case mt-8">
            {caseStudy.aiWorkflow.examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        )}
      </div>
    ),
    outcome: (
      <div>
        <SectionContent section={caseStudy.outcome} />
        {caseStudy.productHunt && (
          <ProductHuntCard
            tagline={caseStudy.productHunt.tagline}
            description={caseStudy.productHunt.description}
            launchDate={caseStudy.productHunt.launchDate}
            upvotes={caseStudy.productHunt.upvotes}
            comments={caseStudy.productHunt.comments}
            followers={caseStudy.productHunt.followers}
            pricing={caseStudy.productHunt.pricing}
            tags={caseStudy.productHunt.tags}
            link={caseStudy.productHunt.url}
          />
        )}
        {caseStudy.media?.images && (
          <CaseStudyGallery
            title="Product Hunt Launch"
            images={caseStudy.media.images}
          />
        )}
      </div>
    ),
    reflection: <SectionContent section={caseStudy.reflection} />,
  };

  return (
    <div className="relative">
      {/* Overview */}
      <FadeIn>
        <div className="mb-20 border-b border-border-subtle pb-16">
          <span className="font-mono text-sm text-accent">
            CASE STUDY {formatCaseNumber(caseStudy.number)}
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
              <p className="text-xs uppercase tracking-wider text-subtle">Key Outcome</p>
              <p className="mt-1 text-sm text-foreground">{caseStudy.keyOutcome}</p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted">
            {caseStudy.overview}
          </p>

          {caseStudy.links && caseStudy.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {caseStudy.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent transition-colors hover:text-foreground"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </FadeIn>

      <div className="flex gap-16">
        {/* Sidebar TOC - desktop */}
        <aside className="hidden w-48 shrink-0 lg:block">
          <nav className="sticky top-24">
            <p className="mb-4 text-xs uppercase tracking-wider text-subtle">
              Contents
            </p>
            <ul className="space-y-1">
              {CASE_SECTIONS.map(({ id, label, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`block py-1.5 text-sm transition-colors ${
                      activeSection === id
                        ? "text-accent"
                        : "text-subtle hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono text-xs">{label}</span>
                    <span className="mt-0.5 block text-xs text-subtle">{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1 max-w-3xl">
          {CASE_SECTIONS.map(({ id, label, title }, index) => (
            <section key={id} id={id} className="mb-20 scroll-mt-24">
              <FadeIn delay={index * 0.05}>
                <div className="mb-8">
                  <span className="font-mono text-xs text-accent">{label}</span>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                    {title}
                  </h2>
                </div>
                {sectionContent[id]}
              </FadeIn>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
