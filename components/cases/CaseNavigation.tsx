import { TransitionLink } from "@/components/ui/TransitionLink";
import type { CaseStudy } from "@/types/case-study";
import { formatCaseNumber } from "@/lib/cases";

interface CaseNavigationProps {
  prev: CaseStudy | null;
  next: CaseStudy | null;
}

export function CaseNavigation({ prev, next }: CaseNavigationProps) {
  return (
    <nav className="mt-20 flex items-stretch justify-between gap-4 border-t border-border-subtle pt-10">
      {prev ? (
        <TransitionLink
          href={`/cases/${prev.slug}`}
          className="group flex-1 rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/30 hover:bg-surface-elevated"
        >
          <span className="text-xs text-subtle">← Previous</span>
          <p className="mt-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            <span className="font-mono text-accent">
              {formatCaseNumber(prev.number)}
            </span>{" "}
            {prev.title}
          </p>
        </TransitionLink>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <TransitionLink
          href={`/cases/${next.slug}`}
          className="group flex-1 rounded-xl border border-border bg-surface p-5 text-right transition-all hover:border-accent/30 hover:bg-surface-elevated"
        >
          <span className="text-xs text-subtle">Next →</span>
          <p className="mt-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            <span className="font-mono text-accent">
              {formatCaseNumber(next.number)}
            </span>{" "}
            {next.title}
          </p>
        </TransitionLink>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
