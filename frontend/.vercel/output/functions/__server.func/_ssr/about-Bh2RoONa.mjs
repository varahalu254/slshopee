import { o as __toESM } from "../_runtime.mjs";
import { t as showroom_default } from "./showroom-CPODBCsp.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Eye, m as Heart, r as Target } from "../_libs/lucide-react.mjs";
import { t as WhatsAppFab } from "./whatsapp-fab-Ch0dbJpQ.mjs";
import { t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Bh2RoONa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20 pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand",
						children: "Our story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl",
						children: "A trusted neighbourhood name for electronics & home furniture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-lg text-muted-foreground",
						children: "SL SHOPEE was built on one promise — bring genuine, top-brand products to families across the Kakinada region, at honest prices, with warm and knowledgeable service. From a single shop, we've grown to five branches serving thousands of happy households."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 overflow-hidden rounded-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: showroom_default,
							alt: "SL SHOPEE showroom",
							width: 1600,
							height: 1e3,
							className: "w-full object-cover"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						{
							icon: Target,
							title: "Our Mission",
							text: "Make premium electronics and furniture accessible to every family with trust and transparency."
						},
						{
							icon: Eye,
							title: "Our Vision",
							text: "Be the most loved home essentials destination across coastal Andhra Pradesh."
						},
						{
							icon: Heart,
							title: "Customer First",
							text: "Honest advice, fair prices and dependable after-sales care — always."
						}
					].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .08 },
						className: "rounded-2xl border border-border/60 bg-white p-6 shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-semibold",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: it.text
							})
						]
					}, it.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl bg-brand-gradient p-10 text-white shadow-brand-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 12,
								suffix: "+",
								label: "Years serving families"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 1e4,
								suffix: "+",
								label: "Happy customers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 500,
								suffix: "+",
								label: "Products in catalog"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 5,
								label: "Branches"
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
function Counter({ to, suffix = "", label }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		const dur = 1400;
		let raf = 0;
		const step = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-display text-4xl font-bold sm:text-5xl",
			children: [n.toLocaleString(), suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-xs uppercase tracking-[0.2em] text-white/80",
			children: label
		})]
	});
}
//#endregion
export { About as component };
