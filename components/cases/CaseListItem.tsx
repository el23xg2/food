import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";
import { formatCaseNumber } from "@/lib/cases";

interface CaseListItemProps {
  caseStudy: CaseStudy;
}

export function CaseListItem({ caseStudy }: CaseListItemProps) {
  return (
    <Link
      href={`/cases/${caseStudy.slug}`}
      className="group flex items-center justify-between gap-4 border-b border-border-subtle py-5 transition-colors hover:border-accent/20"
    >
      <div className="flex min-w-0 flex-1 items-baseline gap-4 sm:gap-6">
        <span className="shrink-0 font-mono text-sm text-accent">
          {formatCaseNumber(caseStudy.number)}
        </span>
        <span className="truncate text-base text-foreground transition-colors group-hover:text-accent sm:text-lg">
          {caseStudy.title}
        </span>
      </div>
      <div className="hidden shrink-0 items-center gap-4 sm:flex">
        <span className="text-sm text-subtle">{caseStudy.readTime}</span>
        {caseStudy.status && (
          <span className="text-xs text-accent">{caseStudy.status}</span>
        )}
      </div>
      <span className="shrink-0 text-subtle transition-colors group-hover:text-accent sm:hidden">
        →
      </span>
    </Link>
  );
}
