import type { ReactNode, CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Skip animation for above-the-fold critical content */
  instant?: boolean;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  instant = false,
}: FadeInProps) {
  if (instant) {
    return <div className={className}>{children}</div>;
  }

  const style: CSSProperties | undefined =
    delay > 0 ? { animationDelay: `${delay}s` } : undefined;

  return (
    <div className={`animate-fade-up ${className}`} style={style}>
      {children}
    </div>
  );
}
