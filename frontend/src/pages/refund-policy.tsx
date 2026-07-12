import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/refund-policy')({
  component: RefundPolicyPage,
});

export function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[oklch(0.98_0.005_260)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-white p-8 sm:p-12 shadow-elevated prose prose-brand max-w-none">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground mb-8">Refund & Return Policy</h1>

          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Return Window</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              SL SHOPEE ensures that all customers receive 100% brand-authorised inventory.
              Returns are accepted within 7 days of delivery only in cases of manufacturing defects or dead-on-arrival (DOA) scenarios for electronics and large appliances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Conditions for Return</h2>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
              <li>The item must remain in its original box, securely packed with manuals and all included accessories intact.</li>
              <li>A technician from the authorized brand's service center must verify the defect.</li>
              <li>Furniture is subject to return only if physical transit damage is reported within 24 hours of delivery.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Refunds Process</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Once a defective return is approved, we will process your refund to the original payment method utilized during checkout or EMI loan provider.
              Refunds typically reflect within 5-7 business days depending on your banking institution.
              Alternatively, customers can elect to receive an immediate 1-to-1 replacement from our branch inventory!
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-border/60">
            <h2 className="text-xl font-bold text-foreground mb-4">Need Help?</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have any issues with your delivery, contact our branch staff via WhatsApp immediately to initiate a report.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
