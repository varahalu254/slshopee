import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/terms-conditions')({
  component: TermsConditionsPage,
});

export function TermsConditionsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[oklch(0.98_0.005_260)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-white p-8 sm:p-12 shadow-elevated prose prose-brand max-w-none">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground mb-8">Terms & Conditions</h1>

          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              By accessing the SL SHOPEE website, making purchases via our web application, or shopping directly at any of our physical warehouse branches, you agree to be bound by these foundational Terms and Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Pricing and Availability</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              While we aggressively strive for accuracy, inventory and stock levels fluctuate constantly across our physical branches.
              SL SHOPEE reserves the right to cancel orders if an item suddenly becomes unavailable or if pricing errors occur.
              We offer "No-cost EMI" options only through explicitly approved banking partners; processing fees strictly depend on the provider.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              When you create an account with us, your profile is registered within our database to track orders securely.
              You are responsible for safely maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Warranties</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              All electronics and appliances sold by SL SHOPEE come exclusively with the original manufacturer's warranties.
              SL SHOPEE specifically disclaims any separate extended store-warranties unless formally purchased and receipted as a unique service plan during checkout.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-border/60">
            <h2 className="text-xl font-bold text-foreground mb-4">Legal Jurisdiction</h2>
            <p className="text-foreground/80 leading-relaxed">
              These terms are governed explicitly under the legal jurisdiction of Andhra Pradesh courts.
              Disputes shall first resolve through our local customer mediation staff in Kakinada district.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
