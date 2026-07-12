import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
});

export function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[oklch(0.98_0.005_260)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-white p-8 sm:p-12 shadow-elevated prose prose-brand max-w-none">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground mb-8">Privacy Policy</h1>

          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              At SL SHOPEE, we collect information to provide you with the best shopping experience across our 5 branches and online platform.
              This includes basic information like your name, phone number, email, and shipping address when you register for an account or place an order.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The data we gather is strictly utilized for:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Fulfilling and managing your electronics and furniture orders.</li>
              <li>Delivering home installation services accurately.</li>
              <li>Communicating important updates, offers, and warranty tracking.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Protection and Security</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Your trust is our priority. We implement robust, industry-standard security measures to safeguard your personal data.
              We never sell your phone numbers or personal details to third-party marketing companies.
              Your data is stored securely in our MongoDB database under encrypted user architectures.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-border/60">
            <h2 className="text-xl font-bold text-foreground mb-4">Contacting Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have any questions regarding this Privacy Policy, please reach out to us at our main branch or email us directly at privacy@slshopee.in.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
