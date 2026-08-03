import type { CaseStudyLink } from "@/types/case-study";

interface ProductHuntCardProps {
  tagline: string;
  description: string;
  launchDate: string;
  upvotes: number;
  comments: number;
  followers: number;
  pricing: string;
  tags: string[];
  link: string;
  links?: CaseStudyLink[];
}

export function ProductHuntCard({
  tagline,
  description,
  launchDate,
  upvotes,
  comments,
  followers,
  pricing,
  tags,
  link,
}: ProductHuntCardProps) {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border-subtle px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#DA552F] text-sm font-bold text-white">
            PH
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Product Hunt Launch</p>
            <p className="text-xs text-subtle">{launchDate}</p>
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent transition-colors hover:text-foreground"
        >
          View on PH ↗
        </a>
      </div>

      <div className="space-y-4 px-5 py-5">
        <p className="text-base font-medium text-foreground">{tagline}</p>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        <p className="text-sm text-subtle">{pricing}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs text-subtle"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-border-subtle pt-4">
          <div>
            <p className="text-lg font-medium text-foreground">{upvotes}</p>
            <p className="text-xs text-subtle">Upvotes</p>
          </div>
          <div>
            <p className="text-lg font-medium text-foreground">{comments}</p>
            <p className="text-xs text-subtle">Comments</p>
          </div>
          <div>
            <p className="text-lg font-medium text-foreground">{followers}</p>
            <p className="text-xs text-subtle">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
