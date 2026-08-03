export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="h-4 w-32 animate-pulse rounded bg-surface-elevated" />
      <div className="mt-6 h-12 w-64 animate-pulse rounded bg-surface-elevated" />
      <div className="mt-4 h-6 w-48 animate-pulse rounded bg-surface-elevated" />
      <div className="mt-8 space-y-3">
        <div className="h-4 w-full max-w-xl animate-pulse rounded bg-surface-elevated" />
        <div className="h-4 w-full max-w-lg animate-pulse rounded bg-surface-elevated" />
      </div>
    </div>
  );
}
