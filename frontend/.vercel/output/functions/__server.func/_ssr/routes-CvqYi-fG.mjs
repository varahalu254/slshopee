import { t as showroom_default } from "./showroom-CPODBCsp.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as FaTruck, b as FaWandSparkles, f as FaShieldHalved, h as FaTag, i as FaCreditCard, m as FaStore, n as FaCircleCheck, y as FaUsers } from "../_libs/react-icons.mjs";
import { a as PRODUCTS, c as waLink, n as BRANDS, r as CATEGORIES, s as TESTIMONIALS, t as BRANCHES } from "./site-data-CLA0JJbR.mjs";
import { a as ShoppingCart, d as MapPin, i as Star, l as MessageCircle, s as Phone, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as WhatsAppFab } from "./whatsapp-fab-Ch0dbJpQ.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CvqYi-fG.js
var import_jsx_runtime = require_jsx_runtime();
var hero_tv_default = "/assets/hero-tv-xw9N6-FE.jpg";
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandsMarquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Categories, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProducts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OffersBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchesPreview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-8 bg-hero-gradient",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 overflow-hidden",
			children: [...Array(14)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "absolute h-1.5 w-1.5 rounded-full bg-brand/40",
				style: {
					left: `${i * 37 % 100}%`,
					top: `${i * 53 % 100}%`
				},
				animate: {
					y: [
						0,
						-30,
						0
					],
					opacity: [
						.3,
						.8,
						.3
					]
				},
				transition: {
					duration: 4 + i % 5,
					repeat: Infinity,
					delay: i * .2
				}
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 md:grid-cols-2 md:py-12 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				animate: "show",
				variants: fadeUp,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/60 px-3 py-1 text-xs font-semibold text-brand backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWandSparkles, { className: "h-3.5 w-3.5" }), " 5 branches · Since years"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 font-display text-5xl font-black uppercase leading-none tracking-[0.18em] text-brand sm:text-6xl md:text-7xl lg:text-8xl",
						children: "SL SHOPEE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl",
						children: [
							"Your Trusted ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand",
								children: "Electronics"
							}),
							" & Home Furniture Destination"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-base text-muted-foreground sm:text-lg",
						children: "TVs · Mobiles · Furniture · Home Appliances · Kitchen Essentials — all from leading brands, under one roof."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							className: "inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand-glow transition-transform hover:scale-105",
							children: ["Explore Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/branches",
							className: "inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Find Nearest Branch"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: "5",
								label: "Branches"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: "50+",
								label: "Trusted brands"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: "10k+",
								label: "Happy customers"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .8,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 rounded-[3rem] bg-brand/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "relative animate-float-slow",
						whileHover: {
							rotateY: 8,
							rotateX: -4
						},
						style: { transformStyle: "preserve-3d" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_tv_default,
							alt: "Modern smart TV with red gradient glow",
							width: 1280,
							height: 1280,
							className: "relative w-full rounded-2xl shadow-brand-glow"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
						className: "left-2 top-6",
						delay: .4,
						icon: FaWandSparkles,
						children: "New arrivals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
						className: "right-4 top-1/3",
						delay: .8,
						icon: FaCreditCard,
						children: "EMI available"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
						className: "bottom-6 left-1/4",
						delay: 1.2,
						icon: FaTag,
						children: "Best prices"
					})
				]
			})]
		})]
	});
}
function Stat({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-display text-2xl font-bold text-foreground",
		children: n
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs uppercase tracking-wider",
		children: label
	})] });
}
function FloatingChip({ children, className, delay = 0, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay,
			duration: .6
		},
		className: `absolute inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-elevated backdrop-blur ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-brand" }), children]
	});
}
function BrandsMarquee() {
	const doubled = [...BRANDS, ...BRANDS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border/60 bg-white py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
				children: "Trusted brands we stock"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex animate-marquee gap-14 pr-14",
					children: doubled.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "whitespace-nowrap font-display text-2xl font-bold text-foreground/40 transition-colors hover:text-brand",
						children: b
					}, i))
				})
			})]
		})
	});
}
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "Shop by category",
			title: "Everything for your home & pocket"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
			children: CATEGORIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-50px"
				},
				transition: {
					delay: i * .05,
					duration: .4
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products",
					className: "group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border/60 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand-glow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/5 transition-all group-hover:bg-brand/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-auto flex items-center gap-1 text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100",
							children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})
					]
				})
			}, c.name))
		})]
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[oklch(0.98_0.005_260)] py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Why choose us",
				title: "A better way to shop for your home"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: FaCircleCheck,
						title: "Genuine Products",
						desc: "100% brand-authorised inventory only."
					},
					{
						icon: FaCreditCard,
						title: "Easy EMI",
						desc: "No-cost EMI on select bank cards."
					},
					{
						icon: FaShieldHalved,
						title: "Trusted Brands",
						desc: "Samsung, LG, Sony, IFB, Whirlpool & more."
					},
					{
						icon: FaStore,
						title: "5 Branches",
						desc: "Across Kakinada, Pithapuram & nearby."
					},
					{
						icon: FaTruck,
						title: "Home Delivery",
						desc: "Fast local delivery & installation."
					},
					{
						icon: FaUsers,
						title: "Expert Support",
						desc: "Friendly staff to help you decide."
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
					transition: {
						delay: i * .08,
						duration: .5
					},
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
							children: it.desc
						})
					]
				}, it.title))
			})]
		})
	});
}
function FeaturedProducts() {
	const featured = PRODUCTS.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Featured",
				title: "Bestsellers this month"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/products",
				className: "hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand hover:underline sm:inline-flex",
				children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: featured.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					delay: i * .05,
					duration: .4
				},
				whileHover: { y: -6 },
				className: "group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-48 overflow-hidden bg-[oklch(0.98_0.01_27)] p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: p.name,
						width: 1280,
						height: 1280,
						loading: "lazy",
						className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-4 top-4 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-foreground",
						children: p.brand
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand font-display text-lg font-bold",
								children: p.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: p.category
							})]
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
	});
}
function OffersBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: { duration: .6 },
			className: "relative overflow-hidden rounded-3xl bg-brand-gradient p-10 text-white shadow-brand-glow sm:p-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid items-center gap-8 md:grid-cols-[1.6fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-bold uppercase tracking-[0.25em] text-white/80",
							children: "Festival Sale · Limited Time"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl",
							children: [
								"Special discounts &",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" no-cost EMI offers"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-white/85",
							children: "Save big on TVs, ACs, washing machines and more. Visit your nearest SL SHOPEE branch today."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink("Hi, share today's festival offers."),
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition-transform hover:scale-105",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp for offers"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/branches",
								className: "inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Visit a branch"]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 text-center",
						children: [
							{
								n: "10%",
								l: "Off on TVs"
							},
							{
								n: "0%",
								l: "EMI plans"
							},
							{
								n: "5Yr",
								l: "Warranty"
							},
							{
								n: "24h",
								l: "Delivery"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white/10 p-4 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-bold",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs uppercase tracking-wider text-white/80",
								children: s.l
							})]
						}, s.l))
					})]
				})
			]
		})
	});
}
function BranchesPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "Visit us",
			title: "5 branches, one trusted name"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
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
				transition: {
					delay: i * .06,
					duration: .4
				},
				className: "group rounded-2xl border border-border/60 bg-white p-6 shadow-elevated transition-all hover:-translate-y-1 hover:border-brand/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: b.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: b.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name + " SL SHOPEE")}`,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:bg-foreground/85",
							children: "Directions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${b.phone.replace(/\s/g, "")}`,
							className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:border-brand hover:text-brand",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " Call"]
						})]
					})
				]
			}, b.slug))
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[oklch(0.98_0.005_260)] py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Loved by families",
					title: "What our customers say"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								className: "flex gap-0.5 text-brand",
								children: [...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm leading-relaxed text-foreground/80",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white",
									children: t.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})] })]
							})
						]
					}, t.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 overflow-hidden rounded-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: showroom_default,
						alt: "SL SHOPEE showroom interior",
						width: 1600,
						height: 1e3,
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				})
			]
		})
	});
}
function SectionHead({ eyebrow, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl",
			children: title
		})]
	});
}
//#endregion
export { Index as component };
