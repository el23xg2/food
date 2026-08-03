"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, type ComponentProps, type MouseEvent } from "react";

type TransitionLinkProps = ComponentProps<typeof Link>;

function shouldSkipTransition(event: MouseEvent<HTMLAnchorElement>): boolean {
  return (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

function getHrefString(href: TransitionLinkProps["href"]): string {
  if (typeof href === "string") return href;
  if ("pathname" in href && href.pathname) return href.pathname;
  return "";
}

export function TransitionLink({
  href,
  onClick,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const hrefString = getHrefString(href);
  const isInternal =
    hrefString.startsWith("/") && !hrefString.startsWith("//");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (!isInternal || shouldSkipTransition(event)) return;

    event.preventDefault();

    const navigate = () => {
      startTransition(() => {
        router.push(hrefString);
        window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" as ScrollBehavior : "auto" });
      });
    };

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.startViewTransition(navigate);
      return;
    }

    navigate();
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
