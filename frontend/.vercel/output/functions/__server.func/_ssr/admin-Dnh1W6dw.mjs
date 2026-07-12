import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Package, D as Menu, E as MessageCircle, F as LayoutDashboard, J as Bell, K as ChevronRight, R as Image, f as Tag, g as ShoppingCart, j as LogOut, n as X, p as Store, q as ChartColumn, r as Users } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Dnh1W6dw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV_ITEMS = [
	{
		to: "/admin",
		label: "Dashboard",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/admin/products",
		label: "Products",
		icon: Package
	},
	{
		to: "/admin/categories",
		label: "Categories",
		icon: Tag
	},
	{
		to: "/admin/orders",
		label: "Orders",
		icon: ShoppingCart
	},
	{
		to: "/admin/customers",
		label: "Customers",
		icon: Users
	},
	{
		to: "/admin/gallery",
		label: "Gallery",
		icon: Image
	},
	{
		to: "/admin/analytics",
		label: "Analytics",
		icon: ChartColumn
	},
	{
		to: "/admin/campaigns",
		label: "WhatsApp Campaigns",
		icon: MessageCircle
	},
	{
		to: "/admin/notifications",
		label: "Notifications",
		icon: Bell
	}
];
function AdminLayout() {
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(false);
	const path = useRouterState().location.pathname;
	const isActive = (to, exact) => exact ? path === to : path === to || path.startsWith(to + "/");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-[oklch(0.97_0.005_260)]",
		children: [
			sidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-20 bg-black/40 md:hidden",
				onClick: () => setSidebarOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: cn("fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-white shadow-elevated transition-transform duration-300 md:translate-x-0 md:static md:z-auto", sidebarOpen ? "translate-x-0" : "-translate-x-full"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-16 items-center gap-3 border-b border-border/60 px-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-gradient font-display text-sm font-bold text-white shadow-brand-glow",
								children: "SL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-sm font-bold leading-tight",
								children: "SL SHOPEE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] text-muted-foreground uppercase tracking-widest",
								children: "Admin Panel"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "ml-auto grid h-8 w-8 place-items-center rounded-md hover:bg-muted md:hidden",
								onClick: () => setSidebarOpen(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 overflow-y-auto px-3 py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-0.5",
							children: NAV_ITEMS.map((item) => {
								const active = isActive(item.to, item.exact);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									onClick: () => setSidebarOpen(false),
									className: cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all", active ? "bg-brand text-white shadow-brand-glow" : "text-foreground/70 hover:bg-muted hover:text-foreground"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4 shrink-0" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex-1",
											children: item.label
										}),
										active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 opacity-70" })
									]
								}, item.to);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border/60 p-3 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/70 hover:bg-muted hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-4 w-4" }), " View Store"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Logout"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-16 items-center gap-4 border-b border-border/60 bg-white px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-muted md:hidden",
							onClick: () => setSidebarOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-base font-semibold text-foreground",
								children: NAV_ITEMS.find((n) => isActive(n.to, n.exact))?.label ?? "Admin"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-brand animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-brand",
									children: "Admin"
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 overflow-auto p-4 sm:p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			})
		]
	});
}
//#endregion
export { AdminLayout as component };
