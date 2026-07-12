import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as waLink, o as SITE } from "./site-data-CLA0JJbR.mjs";
import { d as MapPin, f as Mail, l as MessageCircle, o as Send, s as Phone, v as Clock } from "../_libs/lucide-react.mjs";
import { t as WhatsAppFab } from "./whatsapp-fab-Ch0dbJpQ.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dq9TwfC4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20 pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl",
					children: "We're here to help"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted-foreground",
					children: "Message us on WhatsApp for the fastest response, or drop us a note below."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: Phone,
								title: "Phone",
								text: SITE.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: Mail,
								title: "Email",
								text: SITE.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: MessageCircle,
								title: "WhatsApp",
								text: "Chat with us instantly",
								href: waLink(),
								accent: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: Clock,
								title: "Working hours",
								text: SITE.hours
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: MapPin,
								title: "Head office",
								text: "Achampeta "
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "rounded-3xl border border-border/60 bg-white p-6 shadow-elevated sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Your name",
									name: "name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									name: "phone"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									name: "email",
									type: "email"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 5,
									className: "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand",
									placeholder: "Which product are you interested in?"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand-glow transition-transform hover:scale-105",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send message"]
							}),
							sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-whatsapp",
								children: "Thanks! We'll get back to you shortly."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 overflow-hidden rounded-3xl border border-border/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "SL SHOPEE branch map",
						src: "https://www.google.com/maps?q=Kakinada&output=embed",
						className: "h-[420px] w-full",
						loading: "lazy"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})]
	});
}
function Field({ label, name, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		className: "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
	})] });
}
function InfoRow({ icon: Icon, title, text, href, accent }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `grid h-11 w-11 shrink-0 place-items-center rounded-xl ${accent ? "bg-whatsapp text-white" : "bg-brand/10 text-brand"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 font-semibold text-foreground",
		children: text
	})] })] });
	const cls = `flex items-start gap-4 rounded-2xl border p-5 shadow-elevated transition-colors ${accent ? "border-whatsapp/40 bg-whatsapp/5" : "border-border/60 bg-white"} ${href ? "hover:border-brand/40" : ""}`;
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: cls,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cls,
		children: inner
	});
}
//#endregion
export { ContactPage as component };
