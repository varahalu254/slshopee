import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as SITE, t as BRANCHES } from "./site-data-CLA0JJbR.mjs";
import { c as Navigation, d as MapPin, s as Phone, v as Clock } from "../_libs/lucide-react.mjs";
import { t as WhatsAppFab } from "./whatsapp-fab-Ch0dbJpQ.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/branches-DVid7hrv.js
var import_jsx_runtime = require_jsx_runtime();
var branch_store_default = "/assets/branch-store-Cy-LVQHq.jpg";
function BranchesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20 pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand",
					children: "Visit us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl",
					children: "5 branches across the Kakinada region"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted-foreground",
					children: "Walk in, meet our team, and see products in person before you buy."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: BRANCHES.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .06 },
						className: "overflow-hidden rounded-3xl border border-border/60 bg-white shadow-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-52 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: branch_store_default,
									alt: `${b.name} branch`,
									width: 1200,
									height: 800,
									loading: "lazy",
									className: "h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), " Branch"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl font-bold text-white",
										children: b.name
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: b.address
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand" }),
											" ",
											b.phone
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-brand" }),
											" ",
											SITE.hours
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name + " SL SHOPEE")}`,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), " Directions"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${b.phone.replace(/\s/g, "")}`,
										className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:border-brand hover:text-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call"]
									})]
								})
							]
						})]
					}, b.slug))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})]
	});
}
//#endregion
export { BranchesPage as component };
