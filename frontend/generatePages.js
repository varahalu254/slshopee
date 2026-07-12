const fs = require('fs');
const path = require('path');

const pages = [
    ['profile.tsx', 'Profile', 'Manage your personal details and preferences.'],
    ['checkout.tsx', 'Checkout', 'Complete your purchase securely.'],
    ['cart.tsx', 'Shopping Cart', 'Review items in your cart.'],
    ['forgot-password.tsx', 'Forgot Password', 'Retrieve your account access.'],
    ['my-orders.tsx', 'My Orders', 'View your order history.'],
    ['payment.tsx', 'Payment', 'Enter payment details.'],
    ['privacy-policy.tsx', 'Privacy Policy', 'Our data privacy policies.'],
    ['refund-policy.tsx', 'Refund Policy', 'Our policies on refunds and returns.'],
    ['reset-password.tsx', 'Reset Password', 'Create a new password.'],
    ['terms-conditions.tsx', 'Terms & Conditions', 'Our terms of service.'],
    ['wishlist.tsx', 'Wishlist', 'Your saved items.'],
    ['products.$id.tsx', 'Product Details', 'View product details.'],
    ['order-details.$id.tsx', 'Order Details', 'View order details.']
];

const dir = path.join(__dirname, 'src', 'pages');

const template = `import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/__ROUTE__')({
  component: PageComponent,
});

export function PageComponent() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[oklch(0.98_0.005_260)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-white p-8 shadow-elevated">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">__TITLE__</h1>
          <p className="mt-2 text-muted-foreground">__DESC__</p>
          <div className="mt-8 flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/30 py-20">
            <span className="text-sm text-muted-foreground">Content coming soon...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

pages.forEach(([fileName, title, desc]) => {
    let route = fileName.replace('.tsx', '').replace('.', '/');
    let content = template.replace('__ROUTE__', route).replace('__TITLE__', title).replace('__DESC__', desc);
    fs.writeFileSync(path.join(dir, fileName), content);
});

console.log('Pages generated successfully!');
