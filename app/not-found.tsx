import { TransitionLink } from "@/components/ui/TransitionLink";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-2xl font-medium text-foreground">Page not found</h1>
      <p className="mt-3 text-sm text-muted">The page you are looking for does not exist.</p>
      <TransitionLink
        href="/"
        className="mt-8 text-sm text-subtle transition-colors hover:text-accent"
      >
        ← Back to home
      </TransitionLink>
    </div>
  );
}
