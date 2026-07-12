import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Search, Eye, Trash2, X, Users, Phone, Mail, MapPin, Store, Loader2 } from "lucide-react";
import { customersApi, type CustomerAPI } from "@/lib/api";
import { BRANCHES } from "@/lib/site-data";

export const Route = createFileRoute("/admin/customers")({
    component: CustomersManagement,
});

export function CustomersManagement() {
    const [customers, setCustomers] = useState<CustomerAPI[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filterBranch, setFilterBranch] = useState("All");
    const [viewCustomer, setViewCustomer] = useState<CustomerAPI | null>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => { fetchCustomers(); }, []);

    const fetchCustomers = async () => {
        try {
            setLoading(true);
            const data = await customersApi.getAll();
            setCustomers(data);
        } catch (err) {
            console.error("Failed to fetch customers:", err);
        } finally {
            setLoading(false);
        }
    };

    const filtered = customers.filter((c) => {
        const matchSearch =
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.phone.includes(search) ||
            c.email.toLowerCase().includes(search.toLowerCase());
        const matchBranch = filterBranch === "All" || c.branch === filterBranch;
        return matchSearch && matchBranch;
    });

    const totalSpend = customers.reduce(
        (sum, c) => sum + Number(c.totalSpend.replace(/[₹,]/g, "")),
        0,
    );

    const del = async (id: string) => {
        try {
            await customersApi.delete(id);
            setCustomers(customers.filter((c) => c._id !== id));
            setDeleteId(null);
        } catch (err) {
            console.error("Failed to delete customer:", err);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-brand" />
            </div>
        );
    }

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 className="font-display text-xl font-bold">Customers</h2>
                    <p className="text-sm text-muted-foreground">
                        {customers.length} customers · Total spend: ₹{totalSpend.toLocaleString("en-IN")}
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name, phone, or email..."
                        className="w-full rounded-xl border border-border bg-white pl-9 pr-4 py-2.5 text-sm outline-none focus:border-brand"
                    />
                </div>
                <select
                    value={filterBranch}
                    onChange={(e) => setFilterBranch(e.target.value)}
                    className="rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-brand"
                >
                    <option value="All">All Branches</option>
                    {BRANCHES.map((b) => (
                        <option key={b.slug} value={b.name}>{b.name}</option>
                    ))}
                </select>
            </div>

            {/* Customer cards grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-16 text-muted-foreground">
                        <Users className="mb-2 h-8 w-8 opacity-30" />
                        <span>No customers found</span>
                    </div>
                ) : (
                    filtered.map((c) => (
                        <div key={c._id} className="rounded-2xl border border-border/60 bg-white p-5 shadow-elevated hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand font-display text-sm font-bold">
                                        {c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-sm leading-tight">{c.name}</h3>
                                        <p className="text-[10px] font-mono text-muted-foreground">{c._id.slice(-8)}</p>
                                    </div>
                                </div>
                                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${c.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                                    {c.status}
                                </span>
                            </div>

                            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Phone className="h-3 w-3" />
                                    <span>{c.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-3 w-3" />
                                    <span>{c.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-3 w-3" />
                                    <span>{c.city}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Store className="h-3 w-3" />
                                    <span>{c.branch}</span>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3">
                                <div>
                                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Orders</p>
                                    <p className="font-display font-bold text-sm">{c.totalOrders}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Total Spend</p>
                                    <p className="font-display font-bold text-sm text-brand">{c.totalSpend}</p>
                                </div>
                            </div>

                            <div className="mt-3 flex gap-2">
                                <button
                                    onClick={() => setViewCustomer(c)}
                                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-brand hover:text-brand"
                                >
                                    <Eye className="h-3.5 w-3.5" /> View
                                </button>
                                <button
                                    onClick={() => setDeleteId(c._id)}
                                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-destructive hover:text-destructive"
                                >
                                    <Trash2 className="h-3.5 w-3.5" /> Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* View Customer Modal */}
            {viewCustomer && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white shadow-elevated">
                        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                            <h3 className="font-display font-semibold">Customer Details</h3>
                            <button onClick={() => setViewCustomer(null)} className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted">
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand font-display text-lg font-bold">
                                    {viewCustomer.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-lg">{viewCustomer.name}</h4>
                                    <p className="font-mono text-xs text-muted-foreground">{viewCustomer._id.slice(-8)}</p>
                                </div>
                            </div>
                            <div className="grid gap-3 text-sm">
                                <DetailRow label="Phone" value={viewCustomer.phone} />
                                <DetailRow label="Email" value={viewCustomer.email} />
                                <DetailRow label="City" value={viewCustomer.city} />
                                <DetailRow label="Branch" value={viewCustomer.branch} />
                                <DetailRow label="Total Orders" value={String(viewCustomer.totalOrders)} />
                                <DetailRow label="Total Spend" value={viewCustomer.totalSpend} highlight />
                                <DetailRow label="Last Order" value={viewCustomer.lastOrder} />
                                <DetailRow label="Status" value={viewCustomer.status.charAt(0).toUpperCase() + viewCustomer.status.slice(1)} />
                            </div>
                        </div>
                        <div className="flex justify-end border-t border-border/60 px-5 py-4">
                            <button onClick={() => setViewCustomer(null)} className="rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete confirm */}
            {deleteId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated">
                        <h3 className="font-display font-semibold">Delete Customer?</h3>
                        <p className="mt-2 text-sm text-muted-foreground">This action cannot be undone.</p>
                        <div className="mt-4 flex gap-2">
                            <button onClick={() => setDeleteId(null)} className="flex-1 rounded-xl border border-border py-2 text-sm font-medium hover:bg-muted">Cancel</button>
                            <button onClick={() => del(deleteId)} className="flex-1 rounded-xl bg-destructive py-2 text-sm font-semibold text-white">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function DetailRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
    return (
        <div className="flex justify-between">
            <span className="text-muted-foreground">{label}</span>
            <span className={highlight ? "font-semibold text-brand" : "font-medium"}>{value}</span>
        </div>
    );
}
