"use client";

import { TransitionLink } from "@/components/ui/TransitionLink";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <TransitionLink
          href="/"
          className="text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {siteConfig.name}
        </TransitionLink>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-foreground"
                  : "text-subtle hover:text-foreground"
              }`}
            >
              {item.label}
            </TransitionLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-px w-5 bg-foreground transition-transform duration-200 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-transform duration-200 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <nav
        className={`grid overflow-hidden border-t border-border-subtle bg-background transition-[grid-template-rows] duration-200 md:hidden ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-6 py-4">
            {siteConfig.nav.map((item) => (
              <TransitionLink
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </TransitionLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
