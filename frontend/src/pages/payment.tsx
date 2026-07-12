import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/payment')({
  component: PageComponent,
});

export function PageComponent() {
  return (
    <div className="pt-32 pb-10 min-h-screen bg-[oklch(0.98_0.005_260)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-white p-8 shadow-elevated">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">Payment</h1>
          <p className="mt-2 text-muted-foreground">Enter payment details.</p>
          <div className="mt-8 flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/30 py-8">
            <span className="text-sm text-muted-foreground">Content coming soon...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
