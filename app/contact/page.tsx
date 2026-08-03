import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description: "联系高雪怿，讨论产品决策细节或合作机会。",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="text-sm uppercase tracking-[0.2em] text-subtle">Contact</p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-5xl">
          联系我
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          如果你想讨论某个 Case 的决策细节，或探索合作机会，欢迎联系。
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-16 max-w-lg space-y-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-subtle">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block text-lg text-foreground transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-subtle">Links</p>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-muted transition-colors hover:text-accent"
              >
                GitHub ↗
              </a>
              <a
                href={siteConfig.links.quotebox}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-muted transition-colors hover:text-accent"
              >
                QuoteBox ↗
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm leading-relaxed text-muted">
              {siteConfig.name} · {siteConfig.role}
            </p>
            <p className="mt-2 text-sm text-subtle">
              英国利兹大学 机器人与机电一体化硕士
              <br />
              武汉科技大学 自动化本科
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
