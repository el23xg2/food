import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-subtle">{siteConfig.role}</p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Contact
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
