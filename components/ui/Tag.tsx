interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide ${
        variant === "accent"
          ? "bg-accent/10 text-accent"
          : "bg-surface-elevated text-subtle"
      }`}
    >
      {children}
    </span>
  );
}
