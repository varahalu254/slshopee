const fs = require('fs');
const path = require('path');

const updatePages = (dir, templates) => {
    templates.forEach(({ file, content }) => {
        const p = path.join(dir, file);
        if (fs.existsSync(p)) {
            let text = fs.readFileSync(p, 'utf8');
            text = text.replace(/<div className="mt-8 flex items-center justify-center.*?<\/div>/s, content);
            fs.writeFileSync(p, text);
        }
    });
};

const clientDir = path.join(__dirname, 'src', 'pages');
const clientTemplates = [
    {
        file: 'cart.tsx', content: `<div className="mt-8 space-y-6">
  <div className="flex items-center justify-between border-b border-border/60 pb-4">
    <div className="flex items-center gap-4"><div className="h-16 w-16 bg-muted rounded-xl"></div><div><p className="font-semibold">Example Product</p><p className="text-sm text-muted-foreground">Qty: 1</p></div></div>
    <div className="font-bold">₹5,999</div>
  </div>
  <div className="flex justify-between font-bold text-lg"><span>Total</span><span>₹5,999</span></div>
  <button className="w-full rounded-xl bg-brand-gradient py-3 font-semibold text-white">Proceed to Checkout</button>
</div>` },
    {
        file: 'checkout.tsx', content: `<form className="mt-8 space-y-4">
  <input className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand" placeholder="Full Name" />
  <input className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand" placeholder="Shipping Address" />
  <button className="w-full rounded-xl bg-brand font-semibold text-white py-3">Continue to Payment</button>
</form>` },
    {
        file: 'profile.tsx', content: `<form className="mt-8 space-y-4">
  <input className="w-full rounded-xl border border-border px-4 py-3" defaultValue="User Name" />
  <input className="w-full rounded-xl border border-border px-4 py-3" defaultValue="user@example.com" />
  <button className="rounded-xl bg-brand px-6 py-2 text-white font-medium">Save Changes</button>
</form>` }
];

const adminDir = path.join(__dirname, 'src', 'pages', 'admin');
const adminTemplates = [
    { file: 'management.tsx', content: `<div className="mt-8 overflow-hidden rounded-xl border border-border bg-white"><table className="w-full text-left text-sm"><thead className="bg-muted/50"><tr className="border-b border-border/60"><th className="p-4 font-semibold">Admin Name</th><th className="p-4 font-semibold">Role</th><th className="p-4 font-semibold">Status</th></tr></thead><tbody><tr><td className="p-4">Super Admin</td><td className="p-4">Owner</td><td className="p-4"><span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs">Active</span></td></tr></tbody></table></div>` },
    { file: 'audit-log.tsx', content: `<div className="mt-8 overflow-hidden rounded-xl border border-border bg-white"><table className="w-full text-left text-sm"><thead className="bg-muted/50"><tr className="border-b border-border/60"><th className="p-4 font-semibold">Timestamp</th><th className="p-4 font-semibold">User</th><th className="p-4 font-semibold">Action</th></tr></thead><tbody><tr><td className="p-4 text-muted-foreground">Just now</td><td className="p-4">Admin</td><td className="p-4">Updated settings</td></tr></tbody></table></div>` }
];

updatePages(clientDir, clientTemplates);
updatePages(adminDir, adminTemplates);
console.log('UI written!');
