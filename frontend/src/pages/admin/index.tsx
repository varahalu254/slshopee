import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, ShoppingCart, Users, TrendingUp, ArrowUpRight, IndianRupee, AlertTriangle } from "lucide-react";
import { INITIAL_ORDERS, INITIAL_PRODUCTS, INITIAL_CUSTOMERS, MONTHLY_SALES, CATEGORY_SALES } from "@/lib/admin-data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const STATUS_COLOR: Record<string, string> = {
  delivered: "bg-green-100 text-green-700",
  confirmed: "bg-blue-100 text-blue-700",
  pending: "bg-yellow-100 text-yellow-700",
  cancelled: "bg-red-100 text-red-700",
};

const PIE_COLORS = ["oklch(0.52 0.18 10)", "oklch(0.6 0.15 30)", "oklch(0.68 0.14 50)", "oklch(0.55 0.16 200)", "oklch(0.62 0.18 140)", "oklch(0.58 0.12 270)"];

const totalRevenue = INITIAL_ORDERS.filter(o => o.status !== "cancelled").reduce((s, o) => s + o.amountNum, 0);
const pendingOrders = INITIAL_ORDERS.filter(o => o.status === "pending").length;
const lowStock = INITIAL_PRODUCTS.filter(p => p.stock < 8).length;

export function AdminDashboard() {
  const recentOrders = INITIAL_ORDERS.slice(0, 6);

  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard icon={IndianRupee} label="Total Revenue" value={`₹${totalRevenue.toLocaleString("en-IN")}`} sub="This month" color="brand" />
        <KpiCard icon={ShoppingCart} label="Total Orders" value={String(INITIAL_ORDERS.length)} sub={`${pendingOrders} pending`} color="blue" />
        <KpiCard icon={Users} label="Customers" value={String(INITIAL_CUSTOMERS.length)} sub="Registered" color="green" />
        <KpiCard icon={Package} label="Products" value={String(INITIAL_PRODUCTS.length)} sub={`${lowStock} low stock`} color="orange" />
      </div>

      {/* Alerts */}
      {(pendingOrders > 0 || lowStock > 0) && (
        <div className="flex flex-wrap gap-3">
          {pendingOrders > 0 && (
            <Link to="/admin/orders" className="flex items-center gap-2 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-2.5 text-sm font-medium text-yellow-800 hover:bg-yellow-100">
              <AlertTriangle className="h-4 w-4" />
              {pendingOrders} orders awaiting confirmation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
          {lowStock > 0 && (
            <Link to="/admin/products" className="flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-2.5 text-sm font-medium text-orange-800 hover:bg-orange-100">
              <Package className="h-4 w-4" />
              {lowStock} products low on stock
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      )}

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
        {/* Revenue chart */}
        <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-elevated">
          <h3 className="font-display font-semibold">Monthly Revenue</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">Last 7 months</p>
          <div className="mt-4 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_SALES} barSize={28}>
                <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip formatter={(v: number) => [`₹${v.toLocaleString("en-IN")}`, "Revenue"]} contentStyle={{ borderRadius: 12, fontSize: 12, border: "1px solid oklch(0.929 0.013 255.508)" }} />
                <Bar dataKey="revenue" fill="oklch(0.52 0.18 10)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category pie */}
        <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-elevated">
          <h3 className="font-display font-semibold">Sales by Category</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">Revenue distribution</p>
          <div className="mt-2 flex items-center justify-center">
            <PieChart width={160} height={160}>
              <Pie data={CATEGORY_SALES} dataKey="revenue" cx="50%" cy="50%" innerRadius={45} outerRadius={72} paddingAngle={3}>
                {CATEGORY_SALES.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v: number) => [`₹${v.toLocaleString("en-IN")}`, "Revenue"]} contentStyle={{ borderRadius: 12, fontSize: 12 }} />
            </PieChart>
          </div>
          <div className="mt-2 space-y-1.5">
            {CATEGORY_SALES.slice(0, 4).map((c, i) => (
              <div key={c.category} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: PIE_COLORS[i] }} />
                  <span className="text-muted-foreground">{c.category}</span>
                </div>
                <span className="font-semibold">₹{c.revenue.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orders trend */}
      <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-elevated">
        <h3 className="font-display font-semibold">Orders Trend</h3>
        <div className="mt-4 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MONTHLY_SALES}>
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip formatter={(v: number) => [v, "Orders"]} contentStyle={{ borderRadius: 12, fontSize: 12, border: "1px solid oklch(0.929 0.013 255.508)" }} />
              <Line type="monotone" dataKey="orders" stroke="oklch(0.52 0.18 10)" strokeWidth={2.5} dot={{ fill: "oklch(0.52 0.18 10)", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent orders */}
      <div className="rounded-2xl border border-border/60 bg-white shadow-elevated">
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <h3 className="font-display font-semibold">Recent Orders</h3>
          <Link to="/admin/orders" className="text-xs font-semibold text-brand hover:underline">View all</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-muted/30">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Order</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Customer</th>
                <th className="hidden px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground md:table-cell">Product</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Amount</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-border/30 hover:bg-muted/20">
                  <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">{order.id}</td>
                  <td className="px-5 py-3.5 font-medium">{order.customer}</td>
                  <td className="hidden px-5 py-3.5 text-muted-foreground md:table-cell">{order.product}</td>
                  <td className="px-5 py-3.5 font-semibold text-brand">{order.amount}</td>
                  <td className="px-5 py-3.5">
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${STATUS_COLOR[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ icon: Icon, label, value, sub, color }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; sub: string; color: string }) {
  const colors: Record<string, string> = {
    brand: "bg-brand/10 text-brand",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  };
  return (
    <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-elevated">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="mt-2 font-display text-2xl font-bold text-foreground">{value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
        </div>
        <div className={`grid h-11 w-11 place-items-center rounded-xl ${colors[color]}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
