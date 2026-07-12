import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as PRODUCTS, r as CATEGORIES } from "./site-data-CLA0JJbR.mjs";
import { a as ShoppingCart, h as Funnel } from "../_libs/lucide-react.mjs";
import { t as WhatsAppFab } from "./whatsapp-fab-Ch0dbJpQ.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-6HhG_lkz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const [active, setActive] = (0, import_react.useState)("All");
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const cats = ["All", ...CATEGORIES.map((c) => c.name)];
	const filtered = (0, import_react.useMemo)(() => active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand",
					children: "Our catalog"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl",
					children: "All Products"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted-foreground",
					children: "Explore our full range from leading brands. Enquire on WhatsApp for latest prices, offers and stock at your nearest branch."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setShowFilters((current) => !current),
					"aria-expanded": showFilters,
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 text-brand" }), showFilters ? "Hide filters" : "Show filters"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-8 grid gap-8 ${showFilters ? "lg:grid-cols-[220px_1fr]" : "lg:grid-cols-1"}`,
				children: [showFilters ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "lg:sticky lg:top-24 lg:self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm font-semibold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 text-brand" }), " Categories"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2 lg:flex-col",
						children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive(c),
							className: `rounded-full px-4 py-2 text-left text-sm transition-colors ${active === c ? "bg-brand text-brand-foreground shadow-brand-glow" : "bg-white text-foreground/70 hover:bg-brand/10 hover:text-brand"}`,
							children: c
						}, c))
					})]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
					children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						layout: true,
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: i * .03 },
						whileHover: { y: -6 },
						className: "overflow-hidden rounded-2xl border border-border/60 bg-white shadow-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative h-44 overflow-hidden bg-[oklch(0.98_0.01_27)] p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								width: 1280,
								height: 1280,
								loading: "lazy",
								className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-foreground",
								children: p.brand
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: p.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display font-semibold",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-brand font-display text-lg font-bold",
									children: p.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-[1.02]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), " Order Now"]
								})
							]
						})]
					}, p.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
//#endregion
export { ProductsPage as component };
