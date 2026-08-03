import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";
import { formatCaseNumber } from "@/lib/cases";
import { Tag } from "@/components/ui/Tag";

interface CaseCardProps {
  caseStudy: CaseStudy;
  variant?: "default" | "featured";
}

export function CaseCard({ caseStudy, variant = "default" }: CaseCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/cases/${caseStudy.slug}`}
      className={`group block rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/30 hover:bg-surface-elevated ${
        isFeatured ? "p-8 md:p-10" : "p-6"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-sm text-accent">
          {formatCaseNumber(caseStudy.number)}
        </span>
        {caseStudy.status && (
          <Tag variant="accent">{caseStudy.status}</Tag>
        )}
      </div>

      <h3
        className={`mt-4 font-medium tracking-tight text-foreground transition-colors group-hover:text-accent ${
          isFeatured ? "text-2xl md:text-3xl" : "text-lg"
        }`}
      >
        {caseStudy.title}
      </h3>

      <p
        className={`mt-3 leading-relaxed text-muted ${
          isFeatured ? "text-base" : "text-sm"
        }`}
      >
        {caseStudy.subtitle}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <p className="mt-6 text-sm text-subtle transition-colors group-hover:text-accent">
        Read Case Study →
      </p>
    </Link>
  );
}
