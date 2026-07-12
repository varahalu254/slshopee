import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Mail, B as Grid3x3, C as Package, D as Menu, E as MessageCircle, G as Clock, H as Facebook, I as Instagram, J as Bell, L as IndianRupee, M as Lock, N as LoaderCircle, O as Megaphone, P as List, R as Image, S as Pencil, T as Minus, U as Eye, V as Funnel, W as EyeOff, X as ArrowUpRight, Y as BellRing, Z as ArrowRight, _ as ShieldCheck, a as Upload, b as Plus, c as TrendingUp, d as Target, f as Tag, g as ShoppingCart, h as StarOff, i as User, k as MapPin, l as TrendingDown, m as Star, n as X, o as Truck, p as Store, r as Users, s as TriangleAlert, t as Youtube, u as Trash2, v as Send, w as Navigation, x as Phone, y as Search, z as Heart } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { _ as FaTruck, a as FaFan, b as FaWandSparkles, c as FaKitchenSet, d as FaRotate, f as FaShieldHalved, g as FaTemperatureLow, h as FaTag, i as FaCreditCard, l as FaMobileScreenButton, m as FaStore, n as FaCircleCheck, o as FaFireBurner, p as FaSnowflake, r as FaCouch, s as FaGlassWaterDroplet, t as FaBowlRice, u as FaMugHot, v as FaTv, y as FaUsers } from "../_libs/react-icons.mjs";
import { t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as Cell, a as LineChart, c as Area, d as Bar, f as Radar, g as PolarGrid, h as PolarRadiusAxis, i as BarChart, l as Line, m as PolarAngleAxis, n as RadarChart, o as YAxis, p as Pie, r as PieChart, s as XAxis, t as AreaChart, u as CartesianGrid, v as ResponsiveContainer, y as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-VPXZ4SHi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BRDTXXDZ.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var _4K_Ultra_HD_Smart_TV_default = "/assets/4K%20Ultra%20HD%20Smart%20TV-RK7J6Ir-.jpg";
var OLED_Bravia_TV_default = "/assets/OLED%20Bravia%20TV-CvtQ6C0K.jpg";
var Smartphone_Pro_5G_default = "/assets/Smartphone%20Pro%205G-Br8_BqFu.jpg";
var Realme_Note_60_default = "/assets/Realme%20Note%2060-_maBCqnt.jpg";
var Front_Load_Washing_Machine_default = "/assets/Front%20Load%20Washing%20Machine-B36WfmFn.jpg";
var Semi_Auto_Washer_default = "/assets/Semi%20Auto%20Washer-DG0UucDg.jpg";
var _1_5_Ton_Split_AC_5_Star_default = "/assets/1.5%20Ton%20Split%20AC%205-Star-BQLA8YKz.jpg";
var Inverter_Split_AC_default = "/assets/Inverter%20Split%20AC-Dk6ZkGjn.jpg";
var L_Shape_Fabric_Sofa_default = "/assets/L-Shape%20Fabric%20Sofa-BZKhoCMI.jpg";
var Recliner_Chair_default = "/assets/Recliner%20Chair-DxfVxaj_.jpg";
var RO_UV_Water_Purifier_default = "/assets/RO_UV%20Water%20Purifier-CsEaKV7w.jpg";
var Convection_Microwave_default = "/assets/Convection%20Microwave-mWFAB5jU.jpg";
var SITE = {
	name: "SL SHOPEE",
	tagline: "Electronics & Home Furniture Showroom",
	phone: "+91 90000 00000",
	whatsapp: "919000000000",
	email: "hello@slshopee.in",
	hours: "Mon – Sun · 9:30 AM – 9:00 PM"
};
var BRANCHES = [
	{
		slug: "achampeta",
		name: "Achampeta (Kakinada)",
		address: "Main Road, Achampeta, Kakinada, Andhra Pradesh",
		phone: "+91 90000 00001"
	},
	{
		slug: "pithapuram",
		name: "Pithapuram",
		address: "Bazaar Street, Pithapuram, Andhra Pradesh",
		phone: "+91 90000 00002"
	},
	{
		slug: "kathipudi",
		name: "Kathipudi",
		address: "NH-16, Kathipudi, Andhra Pradesh",
		phone: "+91 90000 00003"
	},
	{
		slug: "gollaprolu",
		name: "Gollaprolu",
		address: "Main Road, Gollaprolu, Andhra Pradesh",
		phone: "+91 90000 00004"
	},
	{
		slug: "peddapuram",
		name: "Peddapuram",
		address: "Market Road, Peddapuram, Andhra Pradesh",
		phone: "+91 90000 00005"
	}
];
var CATEGORIES = [
	{
		icon: FaTv,
		name: "Televisions"
	},
	{
		icon: FaMobileScreenButton,
		name: "Smartphones"
	},
	{
		icon: FaCouch,
		name: "Furniture"
	},
	{
		icon: FaTemperatureLow,
		name: "Air Conditioners"
	},
	{
		icon: FaRotate,
		name: "Washing Machines"
	},
	{
		icon: FaSnowflake,
		name: "Air Coolers"
	},
	{
		icon: FaGlassWaterDroplet,
		name: "Water Purifiers"
	},
	{
		icon: FaKitchenSet,
		name: "Kitchen Appliances"
	},
	{
		icon: FaFireBurner,
		name: "Microwave Ovens"
	},
	{
		icon: FaBowlRice,
		name: "Rice Cookers"
	},
	{
		icon: FaFan,
		name: "Fans"
	},
	{
		icon: FaMugHot,
		name: "Kettles"
	}
];
var BRANDS = [
	"Samsung",
	"LG",
	"Sony",
	"Whirlpool",
	"IFB",
	"Haier",
	"Vivo",
	"Oppo",
	"Realme",
	"OnePlus",
	"Panasonic",
	"Philips"
];
var PRODUCTS = [
	{
		name: "4K Ultra HD Smart TV",
		brand: "Samsung",
		price: "₹49,990",
		category: "Televisions",
		image: _4K_Ultra_HD_Smart_TV_default
	},
	{
		name: "OLED Bravia TV",
		brand: "Sony",
		price: "₹1,29,990",
		category: "Televisions",
		image: OLED_Bravia_TV_default
	},
	{
		name: "Smartphone Pro 5G",
		brand: "Vivo",
		price: "₹32,999",
		category: "Smartphones",
		image: Smartphone_Pro_5G_default
	},
	{
		name: "Realme Note 60",
		brand: "Realme",
		price: "₹12,499",
		category: "Smartphones",
		image: Realme_Note_60_default
	},
	{
		name: "Front Load Washing Machine",
		brand: "IFB",
		price: "₹34,490",
		category: "Washing Machines",
		image: Front_Load_Washing_Machine_default
	},
	{
		name: "Semi Auto Washer",
		brand: "Whirlpool",
		price: "₹14,990",
		category: "Washing Machines",
		image: Semi_Auto_Washer_default
	},
	{
		name: "1.5 Ton Split AC 5-Star",
		brand: "LG",
		price: "₹41,990",
		category: "Air Conditioners",
		image: _1_5_Ton_Split_AC_5_Star_default
	},
	{
		name: "Inverter Split AC",
		brand: "Haier",
		price: "₹36,490",
		category: "Air Conditioners",
		image: Inverter_Split_AC_default
	},
	{
		name: "L-Shape Fabric Sofa",
		brand: "SL Shopee",
		price: "₹28,999",
		category: "Furniture",
		image: L_Shape_Fabric_Sofa_default
	},
	{
		name: "Recliner Chair",
		brand: "SL Shopee",
		price: "₹18,499",
		category: "Furniture",
		image: Recliner_Chair_default
	},
	{
		name: "RO+UV Water Purifier",
		brand: "Kent",
		price: "₹13,999",
		category: "Water Purifiers",
		image: RO_UV_Water_Purifier_default
	},
	{
		name: "Convection Microwave",
		brand: "Panasonic",
		price: "₹10,990",
		category: "Kitchen Appliances",
		image: Convection_Microwave_default
	}
];
var TESTIMONIALS = [
	{
		name: "Ravi Kumar",
		role: "Pithapuram",
		text: "Bought a Sony TV at the best price in town. Staff explained every feature clearly."
	},
	{
		name: "Lakshmi Devi",
		role: "Kakinada",
		text: "Great EMI options and quick home delivery. Very happy with my new washing machine."
	},
	{
		name: "Suresh Babu",
		role: "Peddapuram",
		text: "Trusted brand names and honest pricing — SL SHOPEE is our family go-to store."
	},
	{
		name: "Anitha S.",
		role: "Gollaprolu",
		text: "Excellent after-sales service. They installed our AC on the same day!"
	}
];
function waLink(message = "Hi SL SHOPEE, I'd like to enquire about a product.") {
	return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var logo_default = "/assets/logo-D5tuZoYL.png";
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [dropdownOpen, setDropdownOpen] = (0, import_react.useState)(false);
	const [user, setUser] = (0, import_react.useState)(null);
	const [cartCount, setCartCount] = (0, import_react.useState)(0);
	const [wishlistCount, setWishlistCount] = (0, import_react.useState)(0);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const updateCounts = () => {
			setCartCount(JSON.parse(localStorage.getItem("cart") || "[]").length);
			setWishlistCount(JSON.parse(localStorage.getItem("wishlist") || "[]").length);
		};
		updateCounts();
		window.addEventListener("cart-updated", updateCounts);
		window.addEventListener("wishlist-updated", updateCounts);
		return () => {
			window.removeEventListener("cart-updated", updateCounts);
			window.removeEventListener("wishlist-updated", updateCounts);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const checkUser = () => {
			const saved = localStorage.getItem("user");
			setUser(saved ? JSON.parse(saved) : null);
		};
		checkUser();
		window.addEventListener("user-changed", checkUser);
		return () => window.removeEventListener("user-changed", checkUser);
	}, []);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-background/90 backdrop-blur-md shadow-elevated border-b border-border/60" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_default,
					alt: "SL SHOPEE Logo",
					className: "h-9 w-auto object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-bold tracking-tight uppercase",
					children: SITE.name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm font-medium text-foreground/80 transition-colors hover:text-brand",
						activeProps: { className: "text-brand" },
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/wishlist",
							className: "relative flex items-center justify-center h-9 w-9 shrink-0 rounded-full bg-white text-muted-foreground border border-border/60 hover:text-brand hover:border-brand/40 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }), wishlistCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full bg-brand flex items-center justify-center text-[10px] font-bold text-white px-1 shadow-sm border border-white",
								children: wishlistCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cart",
							className: "relative flex items-center justify-center h-9 w-9 shrink-0 rounded-full bg-white text-muted-foreground border border-border/60 hover:text-brand hover:border-brand/40 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full bg-brand flex items-center justify-center text-[10px] font-bold text-white px-1 shadow-sm border border-white",
								children: cartCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDropdownOpen(!dropdownOpen),
								className: "flex items-center justify-center h-9 w-9 shrink-0 rounded-full bg-brand-gradient text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-105",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
							}), dropdownOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-0 top-12 w-40 overflow-hidden rounded-xl border border-border bg-white shadow-elevated text-sm z-50",
								children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									user.role === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/admin",
										onClick: () => setDropdownOpen(false),
										className: "block px-4 py-2.5 font-medium hover:bg-muted transition-colors text-brand border-b border-border",
										children: "Admin Config"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/profile",
										onClick: () => setDropdownOpen(false),
										className: "block px-4 py-2.5 font-medium hover:bg-muted transition-colors text-foreground",
										children: "My Profile"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											localStorage.removeItem("user");
											window.dispatchEvent(new Event("user-changed"));
											setDropdownOpen(false);
											navigate({ to: "/Login" });
										},
										className: "block w-full text-left px-4 py-2.5 font-medium hover:bg-muted transition-colors border-t border-border text-foreground",
										children: "Log out"
									})
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/Login",
									onClick: () => setDropdownOpen(false),
									className: "block px-4 py-2.5 font-medium hover:bg-muted transition-colors text-foreground",
									children: "Sign In"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/Signup",
									onClick: () => setDropdownOpen(false),
									className: "block px-4 py-2.5 font-medium hover:bg-muted transition-colors border-t border-border text-foreground",
									children: "Sign Up"
								})] })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-10 w-10 place-items-center rounded-md md:hidden ml-2",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl flex-col px-4 py-3",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "py-3 text-sm font-medium text-foreground/80",
						activeProps: { className: "text-brand" },
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/wishlist",
						onClick: () => setOpen(false),
						className: "flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-muted transition-colors border-t border-border mt-2",
						children: ["Wishlist", wishlistCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-brand text-white font-bold text-[10px] rounded-full px-2 py-0.5",
							children: wishlistCount
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cart",
						onClick: () => setOpen(false),
						className: "flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-muted transition-colors border-t border-border",
						children: ["Shopping Cart", cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-brand text-white font-bold text-[10px] rounded-full px-2 py-0.5",
							children: cartCount
						})]
					})
				]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 bg-[oklch(0.18_0.02_260)] text-white/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient font-display font-bold text-white",
							children: "SL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-bold text-white",
							children: SITE.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed",
						children: "Your trusted destination for electronics, home furniture and kitchen essentials across 5 branches."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-3",
						children: [
							Facebook,
							Instagram,
							Youtube
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-sm font-semibold text-white",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "hover:text-brand",
						children: n.label
					}) }, n.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-sm font-semibold text-white",
					children: "Branches"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: BRANCHES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.name })]
					}, b.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-semibold text-white",
						children: "Get in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand" }),
									" ",
									SITE.phone
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-brand" }),
									" ",
									SITE.email
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink(),
								className: "mt-2 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-elevated hover:brightness-110",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Chat on WhatsApp"]
							}) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-white/50",
						children: SITE.hours
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					SITE.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy-policy",
							className: "hover:text-brand transition-colors",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/refund-policy",
							className: "hover:text-brand transition-colors",
							children: "Refund Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms-conditions",
							className: "hover:text-brand transition-colors",
							children: "Terms & Conditions"
						})
					]
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$30 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SL SHOPEE — Electronics & Home Furniture Showroom" },
			{
				name: "description",
				content: "SL SHOPEE: trusted multi-branch showroom for TVs, mobiles, furniture, ACs, washing machines and kitchen appliances across Kakinada region."
			},
			{
				name: "author",
				content: "SL SHOPEE"
			},
			{
				property: "og:title",
				content: "SL SHOPEE — Electronics & Home Furniture"
			},
			{
				property: "og:description",
				content: "TVs, mobiles, furniture, appliances and more from trusted brands. 5 branches across the Kakinada region."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$30.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col bg-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var Route$29 = createFileRoute("/wishlist")({ component: WishlistPage });
function WishlistPage() {
	useNavigate();
	const [wishlist, setWishlist] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const loadWishlist = () => {
			const saved = localStorage.getItem("wishlist");
			if (saved) setWishlist(JSON.parse(saved));
		};
		loadWishlist();
		window.addEventListener("wishlist-updated", loadWishlist);
		return () => window.removeEventListener("wishlist-updated", loadWishlist);
	}, []);
	const removeItem = (e, index) => {
		e.preventDefault();
		e.stopPropagation();
		const newWishlist = wishlist.filter((_, i) => i !== index);
		setWishlist(newWishlist);
		localStorage.setItem("wishlist", JSON.stringify(newWishlist));
		window.dispatchEvent(new Event("wishlist-updated"));
	};
	const moveToCart = (e, item, index) => {
		e.preventDefault();
		e.stopPropagation();
		const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
		existingCart.push({
			...item,
			qty: 1
		});
		localStorage.setItem("cart", JSON.stringify(existingCart));
		window.dispatchEvent(new Event("cart-updated"));
		removeItem(e, index);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-28 pb-20 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-bold tracking-tight text-foreground",
				children: "My Wishlist"
			}), wishlist.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-center rounded-3xl border border-border/60 bg-white p-12 text-center shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-20 w-20 place-items-center rounded-full bg-brand/10 text-brand mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-10 w-10" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-foreground",
						children: "Your wishlist is empty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground max-w-sm mx-auto",
						children: "Save your favorite premium electronics and furniture for later by clicking the heart icon on any product."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-bold text-white shadow-brand-glow transition-transform hover:scale-[1.02]",
						children: ["Explore Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: wishlist.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { delay: i * .05 },
					className: "group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-elevated",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: `/products/${p.name.toLowerCase().replace(/ /g, "-")}`,
						className: "group relative block h-48 overflow-hidden bg-[oklch(0.98_0.01_27)] p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								loading: "lazy",
								className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-4 top-4 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-foreground",
								children: p.brand
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: (e) => removeItem(e, i),
								className: "absolute right-4 top-4 rounded-full bg-white/80 p-2 text-destructive shadow-sm hover:text-white hover:bg-destructive transition-all z-10 block",
								title: "Remove from Wishlist",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: p.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: `/products/${p.name.toLowerCase().replace(/ /g, "-")}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display font-semibold hover:text-brand transition-colors text-ellipsis whitespace-nowrap overflow-hidden",
									children: p.name
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-brand font-display text-lg font-bold",
								children: p.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: (e) => moveToCart(e, p, i),
									type: "button",
									className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand hover:bg-brand/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), " Add to Cart"]
								})
							})
						]
					})]
				}, p.name))
			})]
		})
	});
}
var Route$28 = createFileRoute("/terms-conditions")({ component: TermsConditionsPage });
function TermsConditionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-20 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/60 bg-white p-8 sm:p-12 shadow-elevated prose prose-brand max-w-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl font-bold tracking-tight text-foreground mb-8",
						children: "Terms & Conditions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mb-6",
						children: ["Last updated: ", (/* @__PURE__ */ new Date()).toLocaleDateString()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground mb-4",
							children: "1. Agreement to Terms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed mb-4",
							children: "By accessing the SL SHOPEE website, making purchases via our web application, or shopping directly at any of our physical warehouse branches, you agree to be bound by these foundational Terms and Conditions."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground mb-4",
							children: "2. Pricing and Availability"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed mb-4",
							children: "While we aggressively strive for accuracy, inventory and stock levels fluctuate constantly across our physical branches. SL SHOPEE reserves the right to cancel orders if an item suddenly becomes unavailable or if pricing errors occur. We offer \"No-cost EMI\" options only through explicitly approved banking partners; processing fees strictly depend on the provider."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground mb-4",
							children: "3. User Accounts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed mb-4",
							children: "When you create an account with us, your profile is registered within our database to track orders securely. You are responsible for safely maintaining the confidentiality of your account credentials."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground mb-4",
							children: "4. Warranties"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed mb-4",
							children: "All electronics and appliances sold by SL SHOPEE come exclusively with the original manufacturer's warranties. SL SHOPEE specifically disclaims any separate extended store-warranties unless formally purchased and receipted as a unique service plan during checkout."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12 pt-8 border-t border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-foreground mb-4",
							children: "Legal Jurisdiction"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed",
							children: "These terms are governed explicitly under the legal jurisdiction of Andhra Pradesh courts. Disputes shall first resolve through our local customer mediation staff in Kakinada district."
						})]
					})
				]
			})
		})
	});
}
var BASE_URL = "";
var Route$27 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			"/",
			"/products",
			"/branches",
			"/about",
			"/contact"
		].map((p) => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var Route$26 = createFileRoute("/reset-password")({ component: PageComponent$4 });
function PageComponent$4() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-10 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/60 bg-white p-8 shadow-elevated",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-bold tracking-tight text-foreground",
						children: "Reset Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Create a new password."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/30 py-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "Content coming soon..."
						})
					})
				]
			})
		})
	});
}
var Route$25 = createFileRoute("/refund-policy")({ component: RefundPolicyPage });
function RefundPolicyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-20 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/60 bg-white p-8 sm:p-12 shadow-elevated prose prose-brand max-w-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl font-bold tracking-tight text-foreground mb-8",
						children: "Refund & Return Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mb-6",
						children: ["Last updated: ", (/* @__PURE__ */ new Date()).toLocaleDateString()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground mb-4",
							children: "1. Return Window"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed mb-4",
							children: "SL SHOPEE ensures that all customers receive 100% brand-authorised inventory. Returns are accepted within 7 days of delivery only in cases of manufacturing defects or dead-on-arrival (DOA) scenarios for electronics and large appliances."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground mb-4",
							children: "2. Conditions for Return"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "list-disc pl-6 text-foreground/80 space-y-2 mb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The item must remain in its original box, securely packed with manuals and all included accessories intact." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A technician from the authorized brand's service center must verify the defect." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Furniture is subject to return only if physical transit damage is reported within 24 hours of delivery." })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground mb-4",
							children: "3. Refunds Process"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed mb-4",
							children: "Once a defective return is approved, we will process your refund to the original payment method utilized during checkout or EMI loan provider. Refunds typically reflect within 5-7 business days depending on your banking institution. Alternatively, customers can elect to receive an immediate 1-to-1 replacement from our branch inventory!"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12 pt-8 border-t border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-foreground mb-4",
							children: "Need Help?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed",
							children: "If you have any issues with your delivery, contact our branch staff via WhatsApp immediately to initiate a report."
						})]
					})
				]
			})
		})
	});
}
var Route$24 = createFileRoute("/profile")({ component: PageComponent$3 });
function PageComponent$3() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [activeTab, setActiveTab] = (0, import_react.useState)("profile");
	const [address, setAddress] = (0, import_react.useState)({
		street: "",
		city: "",
		pincode: "",
		phone: ""
	});
	const [addressSaved, setAddressSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const savedUser = localStorage.getItem("user");
		if (savedUser) setUser(JSON.parse(savedUser));
		const savedAddress = localStorage.getItem("userAddress");
		if (savedAddress) setAddress(JSON.parse(savedAddress));
	}, []);
	const TABS = [
		{
			id: "profile",
			label: "My Details",
			icon: User
		},
		{
			id: "address",
			label: "Delivery Address",
			icon: MapPin
		},
		{
			id: "orders",
			label: "My Orders",
			icon: Package
		},
		{
			id: "wishlist",
			label: "Wishlist",
			icon: Heart,
			path: "/wishlist"
		},
		{
			id: "cart",
			label: "Cart",
			icon: ShoppingCart,
			path: "/cart"
		}
	];
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-32 pb-10 min-h-screen bg-[oklch(0.98_0.005_260)] flex flex-col items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-semibold mb-4",
			children: "Please log in to view your profile."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/Login",
			className: "rounded-full bg-brand-gradient px-6 py-2.5 text-white font-medium",
			children: "Sign In"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-10 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-[240px_1fr] gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: TABS.map((tab) => tab.path ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: tab.path,
					className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm bg-white text-muted-foreground hover:text-foreground border border-border/60 hover:border-brand/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tab.icon, { className: "w-4 h-4" }),
						" ",
						tab.label
					]
				}, tab.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActiveTab(tab.id),
					className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${activeTab === tab.id ? "bg-brand text-brand-foreground shadow-brand-glow" : "bg-white text-muted-foreground hover:text-foreground border border-border/60 hover:border-brand/30"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tab.icon, { className: "w-4 h-4" }),
						" ",
						tab.label
					]
				}, tab.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/60 bg-white p-8 shadow-elevated",
				children: [
					activeTab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-3xl font-bold tracking-tight text-foreground",
							children: ["Welcome, ", user.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "Manage your personal details and preferences."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 space-y-4 max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1 block",
									children: "Full Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand",
									defaultValue: user.name
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1 block",
									children: "Email Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand",
									defaultValue: user.email || "user@example.com"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => {
										e.preventDefault();
										alert("Profile updated successfully!");
									},
									className: "rounded-xl bg-brand-gradient px-6 py-3 text-white font-medium text-sm w-full mt-4",
									children: "Save Changes"
								})
							]
						})
					] }),
					activeTab === "address" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold",
							children: "Delivery Address"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "Manage your shipping address for smooth deliveries."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 space-y-4 max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative border border-border rounded-xl focus-within:border-brand transition-colors bg-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "street",
										value: address.street,
										onChange: (e) => setAddress({
											...address,
											street: e.target.value
										}),
										className: "peer w-full bg-transparent px-4 py-3 pt-5 outline-none placeholder-transparent",
										placeholder: "Street Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "street",
										className: "absolute left-4 top-2 cursor-text text-[10px] uppercase font-bold text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-foreground/50 peer-focus:top-2 peer-focus:text-[10px] peer-focus:-translate-y-0.5 peer-focus:font-bold peer-focus:text-brand",
										children: "Street Address"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative border border-border rounded-xl focus-within:border-brand transition-colors bg-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "city",
											value: address.city,
											onChange: (e) => setAddress({
												...address,
												city: e.target.value
											}),
											className: "peer w-full bg-transparent px-4 py-3 pt-5 outline-none placeholder-transparent",
											placeholder: "City"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "city",
											className: "absolute left-4 top-2 cursor-text text-[10px] uppercase font-bold text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-foreground/50 peer-focus:top-2 peer-focus:text-[10px] peer-focus:-translate-y-0.5 peer-focus:font-bold peer-focus:text-brand",
											children: "City"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative border border-border rounded-xl focus-within:border-brand transition-colors bg-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "pincode",
											value: address.pincode,
											onChange: (e) => setAddress({
												...address,
												pincode: e.target.value
											}),
											className: "peer w-full bg-transparent px-4 py-3 pt-5 outline-none placeholder-transparent",
											placeholder: "Pincode"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "pincode",
											className: "absolute left-4 top-2 cursor-text text-[10px] uppercase font-bold text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-foreground/50 peer-focus:top-2 peer-focus:text-[10px] peer-focus:-translate-y-0.5 peer-focus:font-bold peer-focus:text-brand",
											children: "Pincode"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative border border-border rounded-xl focus-within:border-brand transition-colors bg-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "phone",
										value: address.phone,
										onChange: (e) => setAddress({
											...address,
											phone: e.target.value
										}),
										className: "peer w-full bg-transparent px-4 py-3 pt-5 outline-none placeholder-transparent",
										placeholder: "Phone Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "phone",
										className: "absolute left-4 top-2 cursor-text text-[10px] uppercase font-bold text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-foreground/50 peer-focus:top-2 peer-focus:text-[10px] peer-focus:-translate-y-0.5 peer-focus:font-bold peer-focus:text-brand",
										children: "Phone Number"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => {
										e.preventDefault();
										localStorage.setItem("userAddress", JSON.stringify(address));
										setAddressSaved(true);
										setTimeout(() => setAddressSaved(false), 2500);
									},
									className: "rounded-xl bg-brand-gradient px-6 py-3 text-white font-medium text-sm w-full mt-4 transition-transform hover:scale-[1.02]",
									children: addressSaved ? "Address Saved Successfully!" : "Save Address"
								})
							]
						})
					] }),
					activeTab === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "My Orders"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/30 py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-10 w-10 text-muted-foreground/30 mb-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "You have no recent orders."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								className: "mt-4 text-brand text-sm font-semibold hover:underline",
								children: "Start Shopping"
							})
						]
					})] })
				]
			})]
		})
	});
}
var $$splitComponentImporter$1 = () => import("./products-UWadn7p2.mjs");
var Route$23 = createFileRoute("/products")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var Route$22 = createFileRoute("/privacy-policy")({ component: PrivacyPolicyPage });
function PrivacyPolicyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-20 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/60 bg-white p-8 sm:p-12 shadow-elevated prose prose-brand max-w-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl font-bold tracking-tight text-foreground mb-8",
						children: "Privacy Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mb-6",
						children: ["Last updated: ", (/* @__PURE__ */ new Date()).toLocaleDateString()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground mb-4",
							children: "1. Information We Collect"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed mb-4",
							children: "At SL SHOPEE, we collect information to provide you with the best shopping experience across our 5 branches and online platform. This includes basic information like your name, phone number, email, and shipping address when you register for an account or place an order."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold text-foreground mb-4",
								children: "2. How We Use Your Information"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground/80 leading-relaxed mb-4",
								children: "The data we gather is strictly utilized for:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc pl-6 text-foreground/80 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fulfilling and managing your electronics and furniture orders." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Delivering home installation services accurately." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Communicating important updates, offers, and warranty tracking." })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground mb-4",
							children: "3. Data Protection and Security"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed mb-4",
							children: "Your trust is our priority. We implement robust, industry-standard security measures to safeguard your personal data. We never sell your phone numbers or personal details to third-party marketing companies. Your data is stored securely in our MongoDB database under encrypted user architectures."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12 pt-8 border-t border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-foreground mb-4",
							children: "Contacting Us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed",
							children: "If you have any questions regarding this Privacy Policy, please reach out to us at our main branch or email us directly at privacy@slshopee.in."
						})]
					})
				]
			})
		})
	});
}
var Route$21 = createFileRoute("/payment")({ component: PageComponent$2 });
function PageComponent$2() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-10 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/60 bg-white p-8 shadow-elevated",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-bold tracking-tight text-foreground",
						children: "Payment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Enter payment details."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/30 py-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "Content coming soon..."
						})
					})
				]
			})
		})
	});
}
/**
* API client for SL SHOPEE backend
* Base URL defaults to http://localhost:5000/api in dev
*/
var API_BASE = "http://localhost:5000/api";
async function request(path, options) {
	const res = await fetch(`${API_BASE}${path}`, {
		...options,
		headers: {
			...options?.body instanceof FormData ? {} : { "Content-Type": "application/json" },
			...options?.headers
		}
	});
	if (!res.ok) {
		const err = await res.json().catch(() => ({ error: res.statusText }));
		throw new Error(err.error || "Request failed");
	}
	return res.json();
}
var productsApi = {
	getAll: () => request("/products"),
	getById: (id) => request(`/products/${id}`),
	create: (formData) => request("/products", {
		method: "POST",
		body: formData
	}),
	update: (id, formData) => request(`/products/${id}`, {
		method: "PUT",
		body: formData
	}),
	delete: (id) => request(`/products/${id}`, { method: "DELETE" })
};
var categoriesApi = {
	getAll: () => request("/categories"),
	create: (data) => request("/categories", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	update: (id, data) => request(`/categories/${id}`, {
		method: "PUT",
		body: JSON.stringify(data)
	}),
	delete: (id) => request(`/categories/${id}`, { method: "DELETE" })
};
var ordersApi = {
	getAll: () => request("/orders"),
	getById: (id) => request(`/orders/${id}`),
	create: (data) => request("/orders", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	update: (id, data) => request(`/orders/${id}`, {
		method: "PUT",
		body: JSON.stringify(data)
	}),
	updateStatus: (id, status) => request(`/orders/${id}/status`, {
		method: "PATCH",
		body: JSON.stringify({ status })
	}),
	delete: (id) => request(`/orders/${id}`, { method: "DELETE" })
};
var customersApi = {
	getAll: () => request("/customers"),
	getById: (id) => request(`/customers/${id}`),
	create: (data) => request("/customers", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	update: (id, data) => request(`/customers/${id}`, {
		method: "PUT",
		body: JSON.stringify(data)
	}),
	delete: (id) => request(`/customers/${id}`, { method: "DELETE" })
};
var galleryApi = {
	getAll: () => request("/gallery"),
	create: (formData) => request("/gallery", {
		method: "POST",
		body: formData
	}),
	update: (id, formData) => request(`/gallery/${id}`, {
		method: "PUT",
		body: formData
	}),
	toggleFeatured: (id) => request(`/gallery/${id}/featured`, { method: "PATCH" }),
	delete: (id) => request(`/gallery/${id}`, { method: "DELETE" })
};
var campaignsApi = {
	getAll: () => request("/campaigns"),
	create: (data) => request("/campaigns", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	update: (id, data) => request(`/campaigns/${id}`, {
		method: "PUT",
		body: JSON.stringify(data)
	}),
	send: (id) => request(`/campaigns/${id}/send`, { method: "PATCH" }),
	delete: (id) => request(`/campaigns/${id}`, { method: "DELETE" })
};
var notificationsApi = {
	getAll: () => request("/notifications"),
	create: (data) => request("/notifications", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	update: (id, data) => request(`/notifications/${id}`, {
		method: "PUT",
		body: JSON.stringify(data)
	}),
	send: (id) => request(`/notifications/${id}/send`, { method: "PATCH" }),
	delete: (id) => request(`/notifications/${id}`, { method: "DELETE" })
};
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink(),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elevated transition-transform hover:scale-110",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-whatsapp/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "relative h-6 w-6" })]
	});
}
var Route$20 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery — SL SHOPEE" }, {
		name: "description",
		content: "Explore the SL SHOPEE gallery to see our products and stores."
	}] }),
	component: GalleryPage
});
function GalleryPage() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [filterCat, setFilterCat] = (0, import_react.useState)("All");
	(0, import_react.useEffect)(() => {
		fetchGallery();
	}, []);
	const fetchGallery = async () => {
		try {
			setLoading(true);
			const data = await galleryApi.getAll();
			setItems(data);
		} catch (err) {
			console.error("Failed to fetch gallery:", err);
		} finally {
			setLoading(false);
		}
	};
	const categories = ["All", ...Array.from(new Set(items.map((i) => i.category || "Uncategorized").filter(Boolean)))];
	const filtered = items.filter((item) => {
		return filterCat === "All" || item.category === filterCat;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-10 pt-32 min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand",
					children: "Our Showrooms & Products"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl",
					children: "Gallery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted-foreground",
					children: "Take a look inside our branches and see our wide range of products."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-2",
					children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilterCat(cat),
						className: `rounded-full px-4 py-2 text-sm font-semibold transition-all ${filterCat === cat ? "bg-foreground text-background" : "bg-white border border-border text-foreground hover:border-brand hover:text-brand shadow-sm"}`,
						children: cat
					}, cat))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center py-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-brand" })
					}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center py-32 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "mb-4 h-12 w-12 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg",
							children: "No generic items found."
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
						children: filtered.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: i * .05,
								duration: .4
							},
							className: "group relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.url,
								alt: item.title,
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 pt-16 flex flex-col justify-end translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-wider text-brand font-bold",
									children: item.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-semibold text-white text-lg mt-1",
									children: item.title
								})]
							})]
						}, item._id))
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})]
	});
}
var Route$19 = createFileRoute("/forgot-password")({ component: PageComponent$1 });
function PageComponent$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-10 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/60 bg-white p-8 shadow-elevated",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-bold tracking-tight text-foreground",
						children: "Forgot Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Retrieve your account access."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/30 py-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "Content coming soon..."
						})
					})
				]
			})
		})
	});
}
var Route$18 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — SL SHOPEE" },
		{
			name: "description",
			content: "Talk to SL SHOPEE — phone, WhatsApp, email and branch directions."
		},
		{
			property: "og:title",
			content: "Contact SL SHOPEE"
		},
		{
			property: "og:description",
			content: "Reach us for enquiries, offers and after-sales support."
		}
	] }),
	component: ContactPage
});
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-10 pt-32",
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
								text: "Achampeta"
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
var Route$17 = createFileRoute("/checkout")({ component: PageComponent });
function PageComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-10 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/60 bg-white p-8 shadow-elevated",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-bold tracking-tight text-foreground",
						children: "Checkout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Complete your purchase securely."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand",
								placeholder: "Full Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand",
								placeholder: "Shipping Address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-full rounded-xl bg-brand font-semibold text-white py-3",
								children: "Continue to Payment"
							})
						]
					})
				]
			})
		})
	});
}
var Route$16 = createFileRoute("/cart")({ component: CartPage });
function CartPage() {
	const navigate = useNavigate();
	const [cart, setCart] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const loadCart = () => {
			const saved = localStorage.getItem("cart");
			if (saved) setCart(JSON.parse(saved));
		};
		loadCart();
		window.addEventListener("cart-updated", loadCart);
		return () => window.removeEventListener("cart-updated", loadCart);
	}, []);
	const updateQty = (index, delta) => {
		const newCart = [...cart];
		newCart[index].qty = Math.max(1, newCart[index].qty + delta);
		setCart(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
		window.dispatchEvent(new Event("cart-updated"));
	};
	const removeItem = (index) => {
		const newCart = cart.filter((_, i) => i !== index);
		setCart(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
		window.dispatchEvent(new Event("cart-updated"));
	};
	const calculateTotal = () => {
		return cart.reduce((total, item) => {
			return total + parseInt(item.price.replace(/[^\d]/g, ""), 10) * (item.qty || 1);
		}, 0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-28 pb-20 min-h-screen bg-[oklch(0.98_0.005_260)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-bold tracking-tight text-foreground",
				children: "Shopping Cart"
			}), cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-center rounded-3xl border border-border/60 bg-white p-12 text-center shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-20 w-20 place-items-center rounded-full bg-brand/10 text-brand mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-10 w-10" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-foreground",
						children: "Your cart is empty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground max-w-sm mx-auto",
						children: "Looks like you haven't added any premium electronics or furniture to your cart yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-bold text-white shadow-brand-glow transition-transform hover:scale-[1.02]",
						children: ["Start Shopping ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-3xl border border-border/60 bg-white p-2 sm:p-6 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y divide-border/60",
							children: cart.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex py-6 px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-border/60 bg-[oklch(0.98_0.01_27)] p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: item.name,
										className: "h-full w-full object-contain mix-blend-multiply"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ml-4 flex flex-1 flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-base font-bold text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: `/products/${item.name.toLowerCase().replace(/ /g, "-")}`,
											className: "hover:text-brand",
											children: item.name
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "ml-4 text-brand",
											children: item.price
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: [
											item.brand,
											" | ",
											item.category
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-1 items-end justify-between text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center border border-border/80 rounded-full bg-muted/30",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => updateQty(index, -1),
													className: "px-3 py-1 font-bold hover:text-brand",
													children: "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-2 font-semibold",
													children: item.qty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => updateQty(index, 1),
													className: "px-3 py-1 font-bold hover:text-brand",
													children: "+"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => removeItem(index),
												className: "font-medium text-destructive hover:text-destructive/80 inline-flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Remove"]
											})
										})]
									})]
								})]
							}, index))
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border/60 bg-white p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold text-foreground",
								children: "Order Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-semibold text-foreground",
											children: ["₹", calculateTotal().toLocaleString("en-IN")]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-brand",
											children: "Free"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tax" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Calculated at checkout" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between border-t border-border/60 pt-4 mt-4 font-bold text-lg text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["₹", calculateTotal().toLocaleString("en-IN")] })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => navigate({ to: "/checkout" }),
								className: "mt-8 w-full rounded-full bg-brand-gradient py-4 text-[15px] font-bold text-white shadow-brand-glow transition-transform hover:scale-[1.02]",
								children: "Checkout securely"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border/60 bg-[#F4F5F7] p-6 text-sm text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-muted-foreground",
							children: "Need help?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/${SITE.whatsapp}`,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-2 text-brand font-bold block hover:underline",
							children: "Chat with us on WhatsApp"
						})]
					})]
				})]
			})]
		})
	});
}
var $$splitComponentImporter = () => import("./admin-Dnh1W6dw.mjs");
var Route$15 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var showroom_default = "/assets/showroom-kWcVDRvx.jpg";
var Route$14 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — SL SHOPEE" },
		{
			name: "description",
			content: "The story, mission and vision of SL SHOPEE — a trusted multi-branch electronics and furniture showroom."
		},
		{
			property: "og:title",
			content: "About SL SHOPEE"
		},
		{
			property: "og:description",
			content: "Trusted electronics & home furniture showroom across 5 branches."
		}
	] }),
	component: AboutPage
});
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-10 pt-32",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand",
						children: "Visit us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl",
						children: "5 branches across the Kakinada region"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted-foreground",
						children: "Walk in, meet our team, and see products in person before you buy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2",
						children: BRANCHES.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), " Branch"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl font-bold text-foreground",
											children: b.name
										})]
									}),
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
							})
						}, b.slug))
					})
				]
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
var Route$13 = createFileRoute("/Signup")({ component: SignupPage });
function SignupPage() {
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [showConfirm, setShowConfirm] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const handleSignup = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}
		setLoading(true);
		try {
			await customersApi.create({
				name,
				phone,
				email,
				city: "Kakinada",
				branch: "Kakinada Main",
				totalOrders: 0,
				totalSpend: "0",
				lastOrder: "",
				status: "active"
			});
			localStorage.setItem("user", JSON.stringify({
				name,
				email
			}));
			window.dispatchEvent(new Event("user-changed"));
			navigate({ to: "/profile" });
		} catch (err) {
			console.error(err);
			alert("Error creating account. Please try again.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen items-center justify-center bg-[oklch(0.98_0.005_260)] px-4 py-8 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 z-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 top-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-border/60 bg-white shadow-elevated",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-brand-gradient p-8 text-center text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-block bg-white p-2 rounded-xl shadow-brand-glow transition-transform hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "SL SHOPEE",
							className: "h-10 w-auto object-contain block"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-2xl font-bold",
						children: "Create Account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/80",
						children: "Join SL SHOPEE for a better shopping experience."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit: handleSignup,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Full Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: name,
								onChange: (e) => setName(e.target.value),
								required: true,
								placeholder: "Ravi Kumar",
								className: "w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Phone Number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1.5 flex overflow-hidden rounded-xl border border-border bg-white focus-within:border-brand focus-within:ring-1 focus-within:ring-brand",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex -mr-px items-center pl-3 pr-2 border-r border-border bg-muted/20 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mr-1.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "+91"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								required: true,
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								placeholder: "98765 43210",
								className: "w-full bg-transparent pl-3 pr-4 py-3 text-sm outline-none"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Email Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "name@example.com",
								className: "w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: showPassword ? "text" : "password",
									required: true,
									value: password,
									onChange: (e) => setPassword(e.target.value),
									placeholder: "••••••••",
									className: "w-full rounded-xl border border-border bg-white pl-10 pr-10 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowPassword(!showPassword),
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-brand",
									children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Confirm Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: showConfirm ? "text" : "password",
									required: true,
									value: confirmPassword,
									onChange: (e) => setConfirmPassword(e.target.value),
									placeholder: "••••••••",
									className: "w-full rounded-xl border border-border bg-white pl-10 pr-10 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowConfirm(!showConfirm),
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-brand",
									children: showConfirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: loading,
							className: "mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100",
							children: [
								loading ? "Creating account..." : "Sign Up",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: [
						"Already have an account?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/Login",
							className: "font-semibold text-brand hover:underline",
							children: "Log in"
						})
					]
				})]
			})]
		})]
	});
}
var Route$12 = createFileRoute("/Login")({ component: LoginPage });
function LoginPage() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const safeEmail = email.trim().toLowerCase();
			if (safeEmail === "admin@gmail.app" && password === "admin@123") {
				localStorage.setItem("user", JSON.stringify({
					name: "Admin",
					email: safeEmail,
					role: "admin"
				}));
				window.dispatchEvent(new Event("user-changed"));
				navigate({ to: "/admin" });
				return;
			}
			const existingUser = (await customersApi.getAll()).find((c) => c.email.toLowerCase() === email.toLowerCase());
			if (existingUser) localStorage.setItem("user", JSON.stringify({
				name: existingUser.name,
				email: existingUser.email,
				role: "user"
			}));
			else localStorage.setItem("user", JSON.stringify({
				name: email.split("@")[0],
				email,
				role: "user"
			}));
			window.dispatchEvent(new Event("user-changed"));
			navigate({ to: "/" });
		} catch (err) {
			console.error(err);
			alert("Error contacting server. Please try again.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen items-center justify-center bg-[oklch(0.98_0.005_260)] px-4 py-8 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 z-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-border/60 bg-white shadow-elevated",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-brand-gradient p-8 text-center text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-block bg-white p-2 rounded-xl shadow-brand-glow transition-transform hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "SL SHOPEE",
							className: "h-10 w-auto object-contain block"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-2xl font-bold",
						children: "Welcome Back"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/80",
						children: "Log in to manage your orders & profile."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit: handleLogin,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Email Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								required: true,
								placeholder: "name@example.com",
								className: "w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "text-xs font-medium text-brand hover:underline",
								children: "Forgot password?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true,
								placeholder: "••••••••",
								className: "w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: loading,
							className: "mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100",
							children: [
								loading ? "Signing in..." : "Sign In",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: [
						"Don't have an account?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/Signup",
							className: "font-semibold text-brand hover:underline",
							children: "Create one"
						})
					]
				})]
			})]
		})]
	});
}
var hero_tv_default = "/assets/hero-tv-BNyQ7KoH.png";
var Route$11 = createFileRoute("/")({ component: HomePage });
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
function HomePage() {
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
						className: "mt-4 font-display text-4xl font-black uppercase leading-none tracking-[0.05em] text-brand sm:text-5xl md:text-6xl lg:text-7xl",
						children: "SL SHOPEE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-2xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-3xl md:text-4xl",
						children: [
							"Your Trusted ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand",
								children: "Electronics"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
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
							to: "/about",
							className: "inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold text-foreground hover:border-brand hover:text-brand hover:bg-brand/5 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Find Nearest Branch"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: 5,
								suffix: "",
								label: "Branches"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: 50,
								suffix: "+",
								label: "Trusted brands"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: 1e4,
								suffix: "+",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 rounded-[3rem] bg-brand/20 blur-3xl mt-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "relative animate-float-slow mt-12",
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
function Stat({ n, suffix, label }) {
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let start = 0;
		const duration = 2e3;
		const interval = 20;
		const step = n / (duration / interval);
		const timer = setInterval(() => {
			start += step;
			if (start >= n) {
				setVal(n);
				clearInterval(timer);
			} else setVal(Math.floor(start));
		}, interval);
		return () => clearInterval(timer);
	}, [n]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-display text-2xl font-bold text-foreground",
		children: [val, suffix]
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
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
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
					search: { category: c.name },
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
		className: "bg-[oklch(0.98_0.005_260)] py-8",
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
	const navigate = useNavigate();
	const featured = PRODUCTS.slice(0, 6);
	const [cart, setCart] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const loadCart = () => setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
		loadCart();
		window.addEventListener("cart-updated", loadCart);
		return () => window.removeEventListener("cart-updated", loadCart);
	}, []);
	const handleAddToCart = (e, product) => {
		e.preventDefault();
		e.stopPropagation();
		const existing = JSON.parse(localStorage.getItem("cart") || "[]");
		if (!existing.find((p) => p.name === product.name)) {
			existing.push({
				...product,
				qty: 1
			});
			localStorage.setItem("cart", JSON.stringify(existing));
			window.dispatchEvent(new Event("cart-updated"));
		}
	};
	const handleAddToWishlist = (e, product) => {
		e.preventDefault();
		e.stopPropagation();
		const existing = JSON.parse(localStorage.getItem("wishlist") || "[]");
		if (!existing.find((p) => p.name === product.name)) {
			existing.push(product);
			localStorage.setItem("wishlist", JSON.stringify(existing));
			window.dispatchEvent(new Event("wishlist-updated"));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products/$id",
					params: { id: p.name.toLowerCase().replace(/ /g, "-") },
					className: "group relative block h-48 overflow-hidden bg-[oklch(0.98_0.01_27)] p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.name,
							width: 1280,
							height: 1280,
							loading: "lazy",
							className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-4 top-4 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-foreground",
							children: p.brand
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => handleAddToWishlist(e, p),
							className: "absolute right-4 top-4 rounded-full bg-white/80 p-2 text-muted-foreground shadow-sm hover:text-brand hover:scale-105 transition-all z-10 block",
							title: "Add to Wishlist",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$id",
							params: { id: p.name.toLowerCase().replace(/ /g, "-") },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold hover:text-brand transition-colors",
								children: p.name
							})
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => navigate({
									to: "/checkout",
									search: { product: p.name.toLowerCase().replace(/ /g, "-") }
								}),
								type: "button",
								className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-[1.02]",
								children: "Buy Now"
							}), cart.find((item) => item.name === p.name) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand bg-brand/5 px-4 py-2.5 text-sm font-semibold text-brand transition-colors cursor-default",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), " Added to Cart"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: (e) => handleAddToCart(e, p),
								type: "button",
								className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand hover:bg-brand/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), " Add to Cart"]
							})]
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
								to: "/about",
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
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
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
		className: "bg-[oklch(0.98_0.005_260)] py-8",
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
var Route$10 = createFileRoute("/products/")({
	validateSearch: (search) => {
		return { category: search.category || "All" };
	},
	head: () => ({ meta: [
		{ title: "Products — SL SHOPEE" },
		{
			name: "description",
			content: "Browse TVs, mobiles, furniture, ACs, washing machines and kitchen appliances at SL SHOPEE."
		},
		{
			property: "og:title",
			content: "Products — SL SHOPEE"
		},
		{
			property: "og:description",
			content: "Full catalog of electronics and home furniture from trusted brands."
		}
	] }),
	component: ProductsPage
});
function ProductsPage() {
	const { category } = Route$10.useSearch();
	const navigate = useNavigate();
	const [active, setActive] = (0, import_react.useState)(category);
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [cart, setCart] = (0, import_react.useState)([]);
	const [priceLimit, setPriceLimit] = (0, import_react.useState)(25e4);
	const [selectedBrands, setSelectedBrands] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (category) setActive(category);
	}, [category]);
	const cats = ["All", ...CATEGORIES.map((c) => c.name)];
	const brandsList = (0, import_react.useMemo)(() => Array.from(new Set(PRODUCTS.map((p) => p.brand))), []);
	const filtered = (0, import_react.useMemo)(() => {
		return PRODUCTS.filter((p) => {
			if (active !== "All" && p.category !== active) return false;
			if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
			if (parseInt(p.price.replace(/[^\d]/g, ""), 10) > priceLimit) return false;
			return true;
		});
	}, [
		active,
		selectedBrands,
		priceLimit
	]);
	(0, import_react.useEffect)(() => {
		const loadCart = () => setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
		loadCart();
		window.addEventListener("cart-updated", loadCart);
		return () => window.removeEventListener("cart-updated", loadCart);
	}, []);
	const handleAddToCart = (e, product) => {
		e.preventDefault();
		e.stopPropagation();
		const existing = JSON.parse(localStorage.getItem("cart") || "[]");
		if (!existing.find((p) => p.name === product.name)) {
			existing.push({
				...product,
				qty: 1
			});
			localStorage.setItem("cart", JSON.stringify(existing));
			window.dispatchEvent(new Event("cart-updated"));
		}
	};
	const handleAddToWishlist = (e, product) => {
		e.preventDefault();
		e.stopPropagation();
		const existing = JSON.parse(localStorage.getItem("wishlist") || "[]");
		if (!existing.find((p) => p.name === product.name)) {
			existing.push(product);
			localStorage.setItem("wishlist", JSON.stringify(existing));
			window.dispatchEvent(new Event("wishlist-updated"));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pb-10 pt-32 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setShowFilters((c) => !c),
					"aria-expanded": showFilters,
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 text-brand" }), showFilters ? "Hide filters" : "Show filters"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-8 grid gap-8 ${showFilters ? "lg:grid-cols-[220px_1fr]" : "lg:grid-cols-1"}`,
				children: [showFilters ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "lg:sticky lg:top-24 lg:self-start bg-white p-5 rounded-2xl border border-border/60 shadow-sm space-y-8 h-max",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wide",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 text-brand" }), " Categories"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-col gap-1.5",
							children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActive(c),
								className: `rounded-xl px-4 py-2 text-left text-sm transition-all ${active === c ? "bg-brand text-brand-foreground font-semibold" : "text-foreground/70 hover:bg-brand/5 hover:text-brand"}`,
								children: c
							}, c))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border/60 pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-sm font-bold text-foreground uppercase tracking-wide mb-4",
									children: ["Price", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-brand font-display font-bold",
										children: ["₹", priceLimit.toLocaleString("en-IN")]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "1000",
									max: "250000",
									step: "1000",
									value: priceLimit,
									onChange: (e) => setPriceLimit(Number(e.target.value)),
									className: "w-full accent-brand cursor-pointer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mt-2 text-xs text-muted-foreground font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹1,000" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹2,50,000+" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border/60 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wide mb-4",
								children: "Brands"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-2",
								children: brandsList.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-3 cursor-pointer group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(b) ? "bg-brand border-brand" : "border-border/80 group-hover:border-brand"}`,
											children: selectedBrands.includes(b) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3 h-3 text-white",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													strokeWidth: 3,
													d: "M5 13l4 4L19 7"
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											className: "hidden",
											checked: selectedBrands.includes(b),
											onChange: () => {
												setSelectedBrands((prev) => prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]);
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-sm ${selectedBrands.includes(b) ? "font-semibold text-foreground" : "text-foreground/70 group-hover:text-foreground"}`,
											children: b
										})
									]
								}, b))
							})]
						})
					]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
					children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-full py-20 flex flex-col items-center justify-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-24 w-24 rounded-full bg-muted/50 flex items-center justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-8 w-8 text-muted-foreground/50" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold",
								children: "No Products Found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: "We couldn't find anything in this category right now."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActive("All"),
								className: "mt-6 rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-105",
								children: "Clear Filter"
							})
						]
					}) : filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$id",
							params: { id: p.name.toLowerCase().replace(/ /g, "-") },
							className: "group relative h-44 block overflow-hidden bg-[oklch(0.98_0.01_27)] p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.name,
									width: 1280,
									height: 1280,
									loading: "lazy",
									className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-foreground",
									children: p.brand
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: (e) => handleAddToWishlist(e, p),
									className: "absolute right-3 top-3 rounded-full bg-white/80 p-2 text-muted-foreground shadow-sm hover:text-brand hover:scale-105 transition-all z-10 block",
									title: "Add to Wishlist",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: p.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products/$id",
									params: { id: p.name.toLowerCase().replace(/ /g, "-") },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display font-semibold hover:text-brand transition-colors",
										children: p.name
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-brand font-display text-lg font-bold",
									children: p.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => navigate({
											to: "/checkout",
											search: { product: p.name.toLowerCase().replace(/ /g, "-") }
										}),
										type: "button",
										className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-[1.02]",
										children: "Buy Now"
									}), cart.find((item) => item.name === p.name) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand bg-brand/5 px-4 py-2.5 text-sm font-semibold text-brand transition-colors cursor-default",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), " Added"]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: (e) => handleAddToCart(e, p),
										type: "button",
										className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand hover:bg-brand/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), " Add"]
									})]
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
var INITIAL_PRODUCTS = PRODUCTS.map((p, i) => ({
	id: `PRD-${String(i + 1).padStart(3, "0")}`,
	name: p.name,
	brand: p.brand,
	price: p.price,
	priceNum: Number(p.price.replace(/[₹,]/g, "")),
	category: p.category,
	image: p.image,
	stock: Math.floor(Math.random() * 40) + 5,
	status: i < 10 ? "active" : "inactive"
}));
CATEGORIES.map((c, i) => ({
	id: `CAT-${String(i + 1).padStart(3, "0")}`,
	name: c.name,
	slug: c.name.toLowerCase().replace(/\s+/g, "-"),
	productCount: PRODUCTS.filter((p) => p.category === c.name).length,
	status: "active"
}));
var INITIAL_ORDERS = [
	{
		id: "ORD-001",
		customer: "Ravi Kumar",
		phone: "+91 98765 43210",
		product: "4K Ultra HD Smart TV",
		category: "Televisions",
		branch: "Achampeta (Kakinada)",
		amount: "₹49,990",
		amountNum: 49990,
		status: "delivered",
		date: "2025-07-10",
		paymentMode: "emi"
	},
	{
		id: "ORD-002",
		customer: "Lakshmi Devi",
		phone: "+91 87654 32109",
		product: "Front Load Washing Machine",
		category: "Washing Machines",
		branch: "Pithapuram",
		amount: "₹34,490",
		amountNum: 34490,
		status: "delivered",
		date: "2025-07-09",
		paymentMode: "card"
	},
	{
		id: "ORD-003",
		customer: "Suresh Babu",
		phone: "+91 76543 21098",
		product: "1.5 Ton Split AC 5-Star",
		category: "Air Conditioners",
		branch: "Peddapuram",
		amount: "₹41,990",
		amountNum: 41990,
		status: "confirmed",
		date: "2025-07-09",
		paymentMode: "cash"
	},
	{
		id: "ORD-004",
		customer: "Anitha S.",
		phone: "+91 65432 10987",
		product: "OLED Bravia TV",
		category: "Televisions",
		branch: "Gollaprolu",
		amount: "₹1,29,990",
		amountNum: 129990,
		status: "pending",
		date: "2025-07-08",
		paymentMode: "emi"
	},
	{
		id: "ORD-005",
		customer: "Vijay Reddy",
		phone: "+91 54321 09876",
		product: "Smartphone Pro 5G",
		category: "Smartphones",
		branch: "Kathipudi",
		amount: "₹32,999",
		amountNum: 32999,
		status: "delivered",
		date: "2025-07-08",
		paymentMode: "upi"
	},
	{
		id: "ORD-006",
		customer: "Padma Rao",
		phone: "+91 43210 98765",
		product: "L-Shape Fabric Sofa",
		category: "Furniture",
		branch: "Achampeta (Kakinada)",
		amount: "₹28,999",
		amountNum: 28999,
		status: "cancelled",
		date: "2025-07-07",
		paymentMode: "card"
	},
	{
		id: "ORD-007",
		customer: "Krishna Murthy",
		phone: "+91 32109 87654",
		product: "Inverter Split AC",
		category: "Air Conditioners",
		branch: "Pithapuram",
		amount: "₹36,490",
		amountNum: 36490,
		status: "confirmed",
		date: "2025-07-07",
		paymentMode: "emi"
	},
	{
		id: "ORD-008",
		customer: "Sita Devi",
		phone: "+91 21098 76543",
		product: "RO+UV Water Purifier",
		category: "Water Purifiers",
		branch: "Peddapuram",
		amount: "₹13,999",
		amountNum: 13999,
		status: "delivered",
		date: "2025-07-06",
		paymentMode: "upi"
	},
	{
		id: "ORD-009",
		customer: "Ramesh K.",
		phone: "+91 10987 65432",
		product: "Realme Note 60",
		category: "Smartphones",
		branch: "Kathipudi",
		amount: "₹12,499",
		amountNum: 12499,
		status: "delivered",
		date: "2025-07-06",
		paymentMode: "cash"
	},
	{
		id: "ORD-010",
		customer: "Usha Rani",
		phone: "+91 09876 54321",
		product: "Convection Microwave",
		category: "Kitchen Appliances",
		branch: "Gollaprolu",
		amount: "₹10,990",
		amountNum: 10990,
		status: "pending",
		date: "2025-07-05",
		paymentMode: "upi"
	},
	{
		id: "ORD-011",
		customer: "Mohan Das",
		phone: "+91 98761 23456",
		product: "Recliner Chair",
		category: "Furniture",
		branch: "Achampeta (Kakinada)",
		amount: "₹18,499",
		amountNum: 18499,
		status: "delivered",
		date: "2025-07-04",
		paymentMode: "card"
	},
	{
		id: "ORD-012",
		customer: "Durga Prasad",
		phone: "+91 87651 23456",
		product: "Semi Auto Washer",
		category: "Washing Machines",
		branch: "Pithapuram",
		amount: "₹14,990",
		amountNum: 14990,
		status: "delivered",
		date: "2025-07-03",
		paymentMode: "cash"
	}
];
var INITIAL_CUSTOMERS = [
	{
		id: "CUS-001",
		name: "Ravi Kumar",
		phone: "+91 98765 43210",
		email: "ravi@example.com",
		city: "Kakinada",
		branch: "Achampeta (Kakinada)",
		totalOrders: 3,
		totalSpend: "₹1,32,979",
		lastOrder: "2025-07-10",
		status: "active"
	},
	{
		id: "CUS-002",
		name: "Lakshmi Devi",
		phone: "+91 87654 32109",
		email: "lakshmi@example.com",
		city: "Pithapuram",
		branch: "Pithapuram",
		totalOrders: 2,
		totalSpend: "₹49,480",
		lastOrder: "2025-07-09",
		status: "active"
	},
	{
		id: "CUS-003",
		name: "Suresh Babu",
		phone: "+91 76543 21098",
		email: "suresh@example.com",
		city: "Peddapuram",
		branch: "Peddapuram",
		totalOrders: 4,
		totalSpend: "₹1,87,469",
		lastOrder: "2025-07-09",
		status: "active"
	},
	{
		id: "CUS-004",
		name: "Anitha S.",
		phone: "+91 65432 10987",
		email: "anitha@example.com",
		city: "Gollaprolu",
		branch: "Gollaprolu",
		totalOrders: 1,
		totalSpend: "₹1,29,990",
		lastOrder: "2025-07-08",
		status: "active"
	},
	{
		id: "CUS-005",
		name: "Vijay Reddy",
		phone: "+91 54321 09876",
		email: "vijay@example.com",
		city: "Kathipudi",
		branch: "Kathipudi",
		totalOrders: 2,
		totalSpend: "₹45,498",
		lastOrder: "2025-07-08",
		status: "active"
	},
	{
		id: "CUS-006",
		name: "Padma Rao",
		phone: "+91 43210 98765",
		email: "padma@example.com",
		city: "Kakinada",
		branch: "Achampeta (Kakinada)",
		totalOrders: 1,
		totalSpend: "₹28,999",
		lastOrder: "2025-07-07",
		status: "inactive"
	},
	{
		id: "CUS-007",
		name: "Krishna Murthy",
		phone: "+91 32109 87654",
		email: "krishna@example.com",
		city: "Pithapuram",
		branch: "Pithapuram",
		totalOrders: 3,
		totalSpend: "₹93,969",
		lastOrder: "2025-07-07",
		status: "active"
	},
	{
		id: "CUS-008",
		name: "Sita Devi",
		phone: "+91 21098 76543",
		email: "sita@example.com",
		city: "Peddapuram",
		branch: "Peddapuram",
		totalOrders: 2,
		totalSpend: "₹27,998",
		lastOrder: "2025-07-06",
		status: "active"
	}
];
var MONTHLY_SALES = [
	{
		month: "Jan",
		revenue: 185e3,
		orders: 14
	},
	{
		month: "Feb",
		revenue: 21e4,
		orders: 18
	},
	{
		month: "Mar",
		revenue: 256e3,
		orders: 21
	},
	{
		month: "Apr",
		revenue: 198e3,
		orders: 16
	},
	{
		month: "May",
		revenue: 312e3,
		orders: 25
	},
	{
		month: "Jun",
		revenue: 289e3,
		orders: 23
	},
	{
		month: "Jul",
		revenue: 395e3,
		orders: 30
	}
];
var CATEGORY_SALES = [
	{
		category: "Televisions",
		revenue: 31e4,
		units: 8
	},
	{
		category: "Air Conditioners",
		revenue: 236e3,
		units: 6
	},
	{
		category: "Washing Machines",
		revenue: 148e3,
		units: 8
	},
	{
		category: "Smartphones",
		revenue: 93e3,
		units: 6
	},
	{
		category: "Furniture",
		revenue: 95e3,
		units: 5
	},
	{
		category: "Kitchen Appliances",
		revenue: 52e3,
		units: 6
	}
];
var BRANCH_SALES = BRANCHES.map((b, i) => ({
	branch: b.name.split(" ")[0],
	revenue: [
		198e3,
		156e3,
		134e3,
		112e3,
		95e3
	][i],
	orders: [
		24,
		18,
		16,
		14,
		12
	][i]
}));
var Route$9 = createFileRoute("/admin/")({ component: AdminDashboard });
var STATUS_COLOR = {
	delivered: "bg-green-100 text-green-700",
	confirmed: "bg-blue-100 text-blue-700",
	pending: "bg-yellow-100 text-yellow-700",
	cancelled: "bg-red-100 text-red-700"
};
var PIE_COLORS$1 = [
	"oklch(0.52 0.18 10)",
	"oklch(0.6 0.15 30)",
	"oklch(0.68 0.14 50)",
	"oklch(0.55 0.16 200)",
	"oklch(0.62 0.18 140)",
	"oklch(0.58 0.12 270)"
];
var totalRevenue$1 = INITIAL_ORDERS.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.amountNum, 0);
var pendingOrders = INITIAL_ORDERS.filter((o) => o.status === "pending").length;
var lowStock = INITIAL_PRODUCTS.filter((p) => p.stock < 8).length;
function AdminDashboard() {
	const recentOrders = INITIAL_ORDERS.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard$1, {
						icon: IndianRupee,
						label: "Total Revenue",
						value: `₹${totalRevenue$1.toLocaleString("en-IN")}`,
						sub: "This month",
						color: "brand"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard$1, {
						icon: ShoppingCart,
						label: "Total Orders",
						value: String(INITIAL_ORDERS.length),
						sub: `${pendingOrders} pending`,
						color: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard$1, {
						icon: Users,
						label: "Customers",
						value: String(INITIAL_CUSTOMERS.length),
						sub: "Registered",
						color: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard$1, {
						icon: Package,
						label: "Products",
						value: String(INITIAL_PRODUCTS.length),
						sub: `${lowStock} low stock`,
						color: "orange"
					})
				]
			}),
			(pendingOrders > 0 || lowStock > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [pendingOrders > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/orders",
					className: "flex items-center gap-2 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-2.5 text-sm font-medium text-yellow-800 hover:bg-yellow-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
						pendingOrders,
						" orders awaiting confirmation",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
					]
				}), lowStock > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/products",
					className: "flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-2.5 text-sm font-medium text-orange-800 hover:bg-orange-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4" }),
						lowStock,
						" products low on stock",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[1fr_380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Monthly Revenue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Last 7 months"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-52",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: MONTHLY_SALES,
									barSize: 28,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											tick: { fontSize: 11 },
											axisLine: false,
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { hide: true }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											formatter: (v) => [`₹${v.toLocaleString("en-IN")}`, "Revenue"],
											contentStyle: {
												borderRadius: 12,
												fontSize: 12,
												border: "1px solid oklch(0.929 0.013 255.508)"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "revenue",
											fill: "oklch(0.52 0.18 10)",
											radius: [
												6,
												6,
												0,
												0
											]
										})
									]
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Sales by Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Revenue distribution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
								width: 160,
								height: 160,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: CATEGORY_SALES,
									dataKey: "revenue",
									cx: "50%",
									cy: "50%",
									innerRadius: 45,
									outerRadius: 72,
									paddingAngle: 3,
									children: CATEGORY_SALES.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: PIE_COLORS$1[i % PIE_COLORS$1.length] }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									formatter: (v) => [`₹${v.toLocaleString("en-IN")}`, "Revenue"],
									contentStyle: {
										borderRadius: 12,
										fontSize: 12
									}
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-1.5",
							children: CATEGORY_SALES.slice(0, 4).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2 w-2 rounded-full",
										style: { background: PIE_COLORS$1[i] }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: c.category
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold",
									children: ["₹", c.revenue.toLocaleString("en-IN")]
								})]
							}, c.category))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display font-semibold",
					children: "Orders Trend"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: MONTHLY_SALES,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "month",
									tick: { fontSize: 11 },
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { hide: true }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									formatter: (v) => [v, "Orders"],
									contentStyle: {
										borderRadius: 12,
										fontSize: 12,
										border: "1px solid oklch(0.929 0.013 255.508)"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "orders",
									stroke: "oklch(0.52 0.18 10)",
									strokeWidth: 2.5,
									dot: {
										fill: "oklch(0.52 0.18 10)",
										r: 4
									}
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border/60 bg-white shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold",
						children: "Recent Orders"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/orders",
						className: "text-xs font-semibold text-brand hover:underline",
						children: "View all"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/40 bg-muted/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Order"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Customer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "hidden px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground md:table-cell",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Status"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: recentOrders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/30 hover:bg-muted/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-mono text-xs text-muted-foreground",
									children: order.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-medium",
									children: order.customer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "hidden px-5 py-3.5 text-muted-foreground md:table-cell",
									children: order.product
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-semibold text-brand",
									children: order.amount
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${STATUS_COLOR[order.status]}`,
										children: order.status
									})
								})
							]
						}, order.id)) })]
					})
				})]
			})
		]
	});
}
function KpiCard$1({ icon: Icon, label, value, sub, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl font-bold text-foreground",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: sub
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid h-11 w-11 place-items-center rounded-xl ${{
					brand: "bg-brand/10 text-brand",
					blue: "bg-blue-100 text-blue-600",
					green: "bg-green-100 text-green-600",
					orange: "bg-orange-100 text-orange-600"
				}[color]}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			})]
		})
	});
}
var Route$8 = createFileRoute("/products/$id")({ component: ProductDetail });
function ProductDetail() {
	const { id } = Route$8.useParams();
	const navigate = useNavigate();
	const [qty, setQty] = (0, import_react.useState)(1);
	const [cart, setCart] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const loadCart = () => setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
		loadCart();
		window.addEventListener("cart-updated", loadCart);
		return () => window.removeEventListener("cart-updated", loadCart);
	}, []);
	const product = PRODUCTS.find((p) => p.name.toLowerCase().replace(/ /g, "-") === id);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 min-h-screen text-center text-xl font-bold",
		children: "Product not found."
	});
	const isAdded = cart.some((item) => item.name === product.name);
	const similarProducts = PRODUCTS.filter((p) => p.category === product.category && p.name !== product.name).slice(0, 4);
	const handleAddToCart = () => {
		const existing = JSON.parse(localStorage.getItem("cart") || "[]");
		if (!existing.find((p) => p.name === product.name)) {
			existing.push({
				...product,
				qty
			});
			localStorage.setItem("cart", JSON.stringify(existing));
			window.dispatchEvent(new Event("cart-updated"));
		}
	};
	const handleAddToWishlist = () => {
		const existing = JSON.parse(localStorage.getItem("wishlist") || "[]");
		if (!existing.find((p) => p.name === product.name)) {
			existing.push(product);
			localStorage.setItem("wishlist", JSON.stringify(existing));
			window.dispatchEvent(new Event("wishlist-updated"));
		}
	};
	const handleBuyNow = () => {
		navigate({
			to: "/checkout",
			search: { product: id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-28 pb-20 min-h-screen bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex text-[11px] font-bold tracking-widest text-[#9FA3A9] uppercase mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-foreground",
							children: "HOME"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2",
							children: ">"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "hover:text-foreground",
							children: product.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2",
							children: ">"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: product.name
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-12 lg:gap-20 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/80 overflow-hidden relative shadow-sm h-[550px] flex items-center justify-center p-8 bg-[oklch(0.98_0.005_260)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-6 top-6 rounded-full bg-[#111827] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md z-10",
							children: "Best Seller"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							initial: {
								opacity: 0,
								scale: .95
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							src: product.image,
							alt: product.name,
							className: "max-h-full max-w-full object-contain mix-blend-multiply"
						}, product.name)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col h-full pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight lowercase",
								children: product.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand font-display text-3xl font-medium",
									children: product.price
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [[...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 text-border" }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[13px] font-semibold text-muted-foreground ml-1",
										children: "(No reviews yet)"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 text-foreground/70 leading-[1.8] text-[15px]",
								children: [
									"The perfect way to enhance your living space. Experience the best of ",
									product.category.toLowerCase(),
									" with the premium ",
									product.name,
									" by ",
									product.brand,
									". Engineered for exceptional performance and longevity."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-bold tracking-widest text-[#9FA3A9] uppercase",
									children: "Quantity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center w-[120px] justify-between rounded-full bg-[#F4F5F7] px-4 py-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty(Math.max(1, qty - 1)),
											className: "text-muted-foreground hover:text-foreground transition-colors p-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[15px] font-bold",
											children: qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty(qty + 1),
											className: "text-muted-foreground hover:text-foreground transition-colors p-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-4 w-full",
								children: [
									isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "flex-1 inline-flex max-w-[200px] h-[54px] items-center justify-center gap-2 rounded-xl bg-brand/10 border border-brand text-[15px] font-bold text-brand transition-colors cursor-default",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), " Added to Cart"]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleAddToCart,
										className: "flex-1 inline-flex max-w-[200px] h-[54px] items-center justify-center gap-2 rounded-xl bg-brand text-[15px] font-bold text-white shadow-brand-glow transition-transform hover:scale-[1.02]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), " Add to Cart"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleBuyNow,
										className: "flex-1 max-w-[160px] h-[54px] rounded-xl bg-[#F6D050] text-[15px] font-bold text-[#111827] shadow-md transition-transform hover:scale-[1.02] hover:bg-[#F0C530]",
										children: "Buy Now"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleAddToWishlist,
										className: "inline-flex h-[54px] w-[54px] items-center justify-center rounded-xl border border-border/80 bg-white hover:text-brand hover:border-brand/40 transition-colors shadow-sm shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex gap-8 border-t border-border/60 pt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#9FA3A9] uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-[#44B78B]" }), " Ships in 2-3 Days"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#9FA3A9] uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-brand" }), " Quality Guarantee"]
								})]
							})
						]
					})]
				}),
				similarProducts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold tracking-tight text-foreground mb-8",
						children: "Similar Products"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: similarProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								delay: i * .1,
								duration: .4
							},
							className: "group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm hover:shadow-elevated transition-shadow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: `/products/$id`,
								params: { id: p.name.toLowerCase().replace(/ /g, "-") },
								className: "group relative block h-40 overflow-hidden bg-[oklch(0.98_0.01_27)] p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.name,
									width: 1280,
									height: 1280,
									loading: "lazy",
									className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
										children: p.brand
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand font-display font-semibold",
										children: p.price
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: `/products/$id`,
									params: { id: p.name.toLowerCase().replace(/ /g, "-") },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-sm font-semibold hover:text-brand transition-colors line-clamp-1",
										children: p.name
									})
								})]
							})]
						}, p.name))
					})]
				})
			]
		})
	});
}
var Route$7 = createFileRoute("/admin/products")({ component: ProductsManagement });
var STATUS_STYLES$3 = {
	active: "bg-green-100 text-green-700",
	inactive: "bg-gray-100 text-gray-600",
	out_of_stock: "bg-red-100 text-red-700"
};
function ProductsManagement() {
	const [products, setProducts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterCat, setFilterCat] = (0, import_react.useState)("All");
	const [modal, setModal] = (0, import_react.useState)(null);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [brand, setBrand] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("");
	const [stock, setStock] = (0, import_react.useState)(0);
	const [status, setStatus] = (0, import_react.useState)("active");
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	const [previewSrc, setPreviewSrc] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		fetchProducts();
	}, []);
	const fetchProducts = async () => {
		try {
			setLoading(true);
			const data = await productsApi.getAll();
			setProducts(data);
		} catch (err) {
			console.error("Failed to fetch products:", err);
		} finally {
			setLoading(false);
		}
	};
	const filtered = products.filter((p) => {
		const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
		const matchCat = filterCat === "All" || p.category === filterCat;
		return matchSearch && matchCat;
	});
	const resetForm = () => {
		setName("");
		setBrand("");
		setPrice("");
		setCategory("");
		setStock(0);
		setStatus("active");
		setSelectedFile(null);
		setPreviewSrc(null);
	};
	const openAdd = () => {
		resetForm();
		setModal("add");
	};
	const openEdit = (p) => {
		setEditing(p);
		setName(p.name);
		setBrand(p.brand);
		setPrice(p.price);
		setCategory(p.category);
		setStock(p.stock);
		setStatus(p.status);
		setSelectedFile(null);
		setPreviewSrc(p.image || null);
		setModal("edit");
	};
	const closeModal = () => {
		setModal(null);
		setEditing(null);
		resetForm();
	};
	const handleFileSelect = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			setSelectedFile(file);
			const reader = new FileReader();
			reader.onload = () => setPreviewSrc(reader.result);
			reader.readAsDataURL(file);
		}
	};
	const save = async () => {
		try {
			setSaving(true);
			const formData = new FormData();
			formData.append("name", name);
			formData.append("brand", brand);
			formData.append("price", price);
			formData.append("priceNum", String(Number(price.replace(/[₹,]/g, "")) || 0));
			formData.append("category", category);
			formData.append("stock", String(stock));
			formData.append("status", status);
			if (selectedFile) formData.append("image", selectedFile);
			if (modal === "add") {
				const newProduct = await productsApi.create(formData);
				setProducts([newProduct, ...products]);
			} else if (modal === "edit" && editing) {
				const updated = await productsApi.update(editing._id, formData);
				setProducts(products.map((p) => p._id === editing._id ? updated : p));
			}
			closeModal();
		} catch (err) {
			console.error("Failed to save product:", err);
		} finally {
			setSaving(false);
		}
	};
	const del = async (id) => {
		try {
			await productsApi.delete(id);
			setProducts(products.filter((p) => p._id !== id));
			setDeleteId(null);
		} catch (err) {
			console.error("Failed to delete product:", err);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-brand" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [products.length, " products total"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAdd,
					className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Product"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						placeholder: "Search products...",
						className: "w-full rounded-xl border border-border bg-white pl-9 pr-4 py-2.5 text-sm outline-none focus:border-brand"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: filterCat,
					onChange: (e) => setFilterCat(e.target.value),
					className: "rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "All",
						children: "All Categories"
					}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: c.name,
						children: c.name
					}, c.name))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border/60 bg-white shadow-elevated overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "border-b border-border/40 bg-muted/30",
							children: [
								"Product",
								"Brand",
								"Category",
								"Price",
								"Stock",
								"Status",
								"Actions"
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap",
								children: h
							}, h))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							colSpan: 7,
							className: "px-4 py-12 text-center text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "mx-auto mb-2 h-8 w-8 opacity-30" }), "No products found"]
						}) }) : filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/30 hover:bg-muted/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.image,
											alt: p.name,
											className: "h-10 w-10 rounded-lg object-contain bg-muted/40"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-10 w-10 rounded-lg bg-muted/40 grid place-items-center text-muted-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium leading-tight",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-mono text-muted-foreground",
											children: p._id.slice(-8)
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted-foreground",
									children: p.brand
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted-foreground",
									children: p.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-semibold text-brand",
									children: p.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: p.stock < 8 ? "text-orange-600 font-semibold" : "text-foreground",
										children: p.stock
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${STATUS_STYLES$3[p.status]}`,
										children: p.status.replace("_", " ")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => openEdit(p),
											className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-brand",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setDeleteId(p._id),
											className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-red-50 hover:text-destructive",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
										})]
									})
								})
							]
						}, p._id)) })]
					})
				})
			}),
			modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-lg rounded-2xl bg-white shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold",
								children: modal === "add" ? "Add Product" : "Edit Product"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 p-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
										children: "Product Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: name,
										onChange: (e) => setName(e.target.value),
										className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Brand"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: brand,
									onChange: (e) => setBrand(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Price (e.g. ₹49,990)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: price,
									onChange: (e) => setPrice(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: category,
									onChange: (e) => setCategory(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select category"
									}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c.name,
										children: c.name
									}, c.name))]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Stock"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: String(stock),
									onChange: (e) => setStock(Number(e.target.value) || 0),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: status,
									onChange: (e) => setStatus(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "active",
											children: "Active"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "inactive",
											children: "Inactive"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "out_of_stock",
											children: "Out of Stock"
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
											children: "Product Image"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											ref: fileInputRef,
											type: "file",
											accept: "image/*",
											onChange: handleFileSelect,
											className: "hidden"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => fileInputRef.current?.click(),
											className: "mt-1.5 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border px-3 py-4 text-sm text-muted-foreground hover:border-brand hover:text-brand transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5" }), selectedFile ? selectedFile.name : "Click to upload image"]
										}),
										previewSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 rounded-xl overflow-hidden border border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: previewSrc,
												alt: "Preview",
												className: "h-24 w-full object-contain bg-muted/20"
											})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-2 border-t border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: save,
								disabled: !name || !brand || saving,
								className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow disabled:opacity-50",
								children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), saving ? "Saving..." : modal === "add" ? "Add Product" : "Save Changes"]
							})]
						})
					]
				})
			}),
			deleteId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Delete Product?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "This action cannot be undone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDeleteId(null),
								className: "flex-1 rounded-xl border border-border py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => del(deleteId),
								className: "flex-1 rounded-xl bg-destructive py-2 text-sm font-semibold text-white",
								children: "Delete"
							})]
						})
					]
				})
			})
		]
	});
}
var Route$6 = createFileRoute("/admin/orders")({ component: OrdersManagement });
var STATUS_STYLES$2 = {
	pending: "bg-yellow-100 text-yellow-700",
	confirmed: "bg-blue-100 text-blue-700",
	delivered: "bg-green-100 text-green-700",
	cancelled: "bg-red-100 text-red-700"
};
var PAYMENT_STYLES = {
	cash: "bg-emerald-50 text-emerald-700",
	emi: "bg-purple-50 text-purple-700",
	upi: "bg-indigo-50 text-indigo-700",
	card: "bg-sky-50 text-sky-700"
};
function OrdersManagement() {
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("All");
	const [filterBranch, setFilterBranch] = (0, import_react.useState)("All");
	const [viewOrder, setViewOrder] = (0, import_react.useState)(null);
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		fetchOrders();
	}, []);
	const fetchOrders = async () => {
		try {
			setLoading(true);
			const data = await ordersApi.getAll();
			setOrders(data);
		} catch (err) {
			console.error("Failed to fetch orders:", err);
		} finally {
			setLoading(false);
		}
	};
	const filtered = orders.filter((o) => {
		const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.product.toLowerCase().includes(search.toLowerCase()) || o._id.toLowerCase().includes(search.toLowerCase());
		const matchStatus = filterStatus === "All" || o.status === filterStatus;
		const matchBranch = filterBranch === "All" || o.branch === filterBranch;
		return matchSearch && matchStatus && matchBranch;
	});
	const updateStatus = async (id, status) => {
		try {
			const updated = await ordersApi.updateStatus(id, status);
			setOrders(orders.map((o) => o._id === id ? updated : o));
			if (viewOrder?._id === id) setViewOrder(updated);
		} catch (err) {
			console.error("Failed to update status:", err);
		}
	};
	const del = async (id) => {
		try {
			await ordersApi.delete(id);
			setOrders(orders.filter((o) => o._id !== id));
			setDeleteId(null);
		} catch (err) {
			console.error("Failed to delete order:", err);
		}
	};
	const totalRevenue = filtered.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.amountNum, 0);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-brand" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Orders"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						orders.length,
						" orders · Revenue: ₹",
						totalRevenue.toLocaleString("en-IN")
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						"pending",
						"confirmed",
						"delivered",
						"cancelled"
					].map((s) => {
						const count = orders.filter((o) => o.status === s).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setFilterStatus(filterStatus === s ? "All" : s),
							className: `rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-all ${filterStatus === s ? STATUS_STYLES$2[s] + " ring-2 ring-offset-1 ring-current" : STATUS_STYLES$2[s] + " opacity-70 hover:opacity-100"}`,
							children: [
								s,
								" (",
								count,
								")"
							]
						}, s);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						placeholder: "Search by order ID, customer, or product...",
						className: "w-full rounded-xl border border-border bg-white pl-9 pr-4 py-2.5 text-sm outline-none focus:border-brand"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: filterBranch,
					onChange: (e) => setFilterBranch(e.target.value),
					className: "rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "All",
						children: "All Branches"
					}), BRANCHES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: b.name,
						children: b.name
					}, b.slug))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border/60 bg-white shadow-elevated overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "border-b border-border/40 bg-muted/30",
							children: [
								"Order",
								"Customer",
								"Product",
								"Branch",
								"Amount",
								"Payment",
								"Status",
								"Date",
								"Actions"
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap",
								children: h
							}, h))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							colSpan: 9,
							className: "px-4 py-12 text-center text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "mx-auto mb-2 h-8 w-8 opacity-30" }), "No orders found"]
						}) }) : filtered.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/30 hover:bg-muted/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3.5 font-mono text-xs text-muted-foreground",
									children: o._id.slice(-8)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: o.customer
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-muted-foreground",
										children: o.phone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3.5 text-muted-foreground max-w-[160px] truncate",
									children: o.product
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3.5 text-muted-foreground text-xs",
									children: o.branch
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3.5 font-semibold text-brand",
									children: o.amount
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${PAYMENT_STYLES[o.paymentMode]}`,
										children: o.paymentMode
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: o.status,
										onChange: (e) => updateStatus(o._id, e.target.value),
										className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase border-none outline-none cursor-pointer ${STATUS_STYLES$2[o.status]}`,
										children: [
											"pending",
											"confirmed",
											"delivered",
											"cancelled"
										].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: s,
											children: s
										}, s))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3.5 text-xs text-muted-foreground whitespace-nowrap",
									children: o.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setViewOrder(o),
											className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-brand",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setDeleteId(o._id),
											className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-red-50 hover:text-destructive",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
										})]
									})
								})
							]
						}, o._id)) })]
					})
				})
			}),
			viewOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-2xl bg-white shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold",
								children: "Order Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setViewOrder(null),
								className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-sm text-muted-foreground",
										children: viewOrder._id.slice(-8)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-3 py-1 text-xs font-semibold uppercase ${STATUS_STYLES$2[viewOrder.status]}`,
										children: viewOrder.status
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow$1, {
											label: "Customer",
											value: viewOrder.customer
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow$1, {
											label: "Phone",
											value: viewOrder.phone
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow$1, {
											label: "Product",
											value: viewOrder.product
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow$1, {
											label: "Category",
											value: viewOrder.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow$1, {
											label: "Branch",
											value: viewOrder.branch
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow$1, {
											label: "Amount",
											value: viewOrder.amount,
											highlight: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow$1, {
											label: "Payment",
											value: viewOrder.paymentMode.toUpperCase()
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow$1, {
											label: "Date",
											value: viewOrder.date
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Update Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: viewOrder.status,
									onChange: (e) => updateStatus(viewOrder._id, e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									children: [
										"pending",
										"confirmed",
										"delivered",
										"cancelled"
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s,
										className: "capitalize",
										children: s.charAt(0).toUpperCase() + s.slice(1)
									}, s))
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end border-t border-border/60 px-5 py-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setViewOrder(null),
								className: "rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow",
								children: "Close"
							})
						})
					]
				})
			}),
			deleteId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Delete Order?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "This action cannot be undone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDeleteId(null),
								className: "flex-1 rounded-xl border border-border py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => del(deleteId),
								className: "flex-1 rounded-xl bg-destructive py-2 text-sm font-semibold text-white",
								children: "Delete"
							})]
						})
					]
				})
			})
		]
	});
}
function DetailRow$1({ label, value, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: highlight ? "font-semibold text-brand" : "font-medium",
			children: value
		})]
	});
}
var Route$5 = createFileRoute("/admin/notifications")({ component: NotificationsManagement });
var STATUS_STYLES$1 = {
	draft: "bg-gray-100 text-gray-600",
	sent: "bg-green-100 text-green-700"
};
var TYPE_STYLES = {
	promo: {
		bg: "bg-purple-100 text-purple-700",
		icon: Megaphone
	},
	order: {
		bg: "bg-blue-100 text-blue-700",
		icon: ShoppingCart
	},
	general: {
		bg: "bg-amber-100 text-amber-700",
		icon: BellRing
	}
};
function NotificationsManagement() {
	const [notifications, setNotifications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterType, setFilterType] = (0, import_react.useState)("All");
	const [modal, setModal] = (0, import_react.useState)(null);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("general");
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		fetchNotifications();
	}, []);
	const fetchNotifications = async () => {
		try {
			setLoading(true);
			const data = await notificationsApi.getAll();
			setNotifications(data);
		} catch (err) {
			console.error("Failed to fetch notifications:", err);
		} finally {
			setLoading(false);
		}
	};
	const filtered = notifications.filter((n) => {
		const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.body.toLowerCase().includes(search.toLowerCase());
		const matchType = filterType === "All" || n.type === filterType;
		return matchSearch && matchType;
	});
	const resetForm = () => {
		setTitle("");
		setBody("");
		setType("general");
	};
	const openAdd = () => {
		resetForm();
		setModal("add");
	};
	const openEdit = (n) => {
		setEditing(n);
		setTitle(n.title);
		setBody(n.body);
		setType(n.type);
		setModal("edit");
	};
	const closeModal = () => {
		setModal(null);
		setEditing(null);
		resetForm();
	};
	const save = async () => {
		try {
			setSaving(true);
			if (modal === "add") {
				const newNotif = await notificationsApi.create({
					title,
					body,
					type,
					status: "draft",
					recipients: 0
				});
				setNotifications([newNotif, ...notifications]);
			} else if (modal === "edit" && editing) {
				const updated = await notificationsApi.update(editing._id, {
					title,
					body,
					type
				});
				setNotifications(notifications.map((n) => n._id === editing._id ? updated : n));
			}
			closeModal();
		} catch (err) {
			console.error("Failed to save notification:", err);
		} finally {
			setSaving(false);
		}
	};
	const sendNotification = async (id) => {
		try {
			const updated = await notificationsApi.send(id);
			setNotifications(notifications.map((n) => n._id === id ? updated : n));
		} catch (err) {
			console.error("Failed to send notification:", err);
		}
	};
	const del = async (id) => {
		try {
			await notificationsApi.delete(id);
			setNotifications(notifications.filter((n) => n._id !== id));
			setDeleteId(null);
		} catch (err) {
			console.error("Failed to delete notification:", err);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-brand" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Notifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						notifications.length,
						" notifications · ",
						notifications.filter((n) => n.status === "sent").length,
						" sent"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAdd,
					className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New Notification"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						placeholder: "Search notifications...",
						className: "w-full rounded-xl border border-border bg-white pl-9 pr-4 py-2.5 text-sm outline-none focus:border-brand"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex rounded-xl border border-border overflow-hidden",
					children: [
						"All",
						"promo",
						"order",
						"general"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilterType(t),
						className: `px-3 py-2 text-xs font-medium capitalize transition-colors ${filterType === t ? "bg-brand text-white" : "bg-white text-muted-foreground hover:bg-muted"}`,
						children: t === "All" ? "All" : t
					}, t))
				})]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-16 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "mb-2 h-8 w-8 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No notifications found" })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: filtered.map((n) => {
					const typeConf = TYPE_STYLES[n.type] || TYPE_STYLES.general;
					const TypeIcon = typeConf.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid h-11 w-11 shrink-0 place-items-center rounded-xl ${typeConf.bg}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeIcon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-semibold text-sm",
										children: n.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground line-clamp-2",
										children: n.body
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex shrink-0 items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${STATUS_STYLES$1[n.status]}`,
											children: n.status
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 text-xs text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${typeConf.bg}`,
												children: n.type
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [n.recipients, " recipients"] }),
											n.sentAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Sent: ", n.sentAt] })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [
											n.status === "draft" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => sendNotification(n._id),
												className: "inline-flex items-center gap-1 rounded-lg bg-green-600 px-3 py-1.5 text-[10px] font-semibold text-white hover:bg-green-700",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3 w-3" }), " Send"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => openEdit(n),
												className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-brand",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setDeleteId(n._id),
												className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-red-50 hover:text-destructive",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
											})
										]
									})]
								})]
							})]
						})
					}, n._id);
				})
			}),
			modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-lg rounded-2xl bg-white shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold",
								children: modal === "add" ? "New Notification" : "Edit Notification"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: title,
									onChange: (e) => setTitle(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									placeholder: "e.g. Order Confirmed"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Body"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: body,
									onChange: (e) => setBody(e.target.value),
									rows: 3,
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand resize-none",
									placeholder: "Notification message..."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: type,
									onChange: (e) => setType(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "general",
											children: "General"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "promo",
											children: "Promotional"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "order",
											children: "Order Update"
										})
									]
								})] })
							]
						}),
						title && body && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-5 mb-4 rounded-xl border border-border/60 bg-muted/30 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-2",
								children: "Push Preview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 rounded-lg bg-white p-3 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-sm",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: body
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-2 border-t border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: save,
								disabled: !title || !body || saving,
								className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow disabled:opacity-50",
								children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), modal === "add" ? "Create" : "Save Changes"]
							})]
						})
					]
				})
			}),
			deleteId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Delete Notification?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "This action cannot be undone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDeleteId(null),
								className: "flex-1 rounded-xl border border-border py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => del(deleteId),
								className: "flex-1 rounded-xl bg-destructive py-2 text-sm font-semibold text-white",
								children: "Delete"
							})]
						})
					]
				})
			})
		]
	});
}
var Route$4 = createFileRoute("/admin/gallery")({ component: GalleryManagement });
var GALLERY_CATEGORIES = [
	"All",
	"Furniture",
	"Televisions",
	"Air Conditioners",
	"Branches",
	"Promotions",
	"Washing Machines"
];
function GalleryManagement() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterCat, setFilterCat] = (0, import_react.useState)("All");
	const [view, setView] = (0, import_react.useState)("grid");
	const [modal, setModal] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("");
	const [featured, setFeatured] = (0, import_react.useState)(false);
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	const [previewSrc, setPreviewSrc] = (0, import_react.useState)(null);
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const [previewUrl, setPreviewUrl] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		fetchGallery();
	}, []);
	const fetchGallery = async () => {
		try {
			setLoading(true);
			const data = await galleryApi.getAll();
			setItems(data);
		} catch (err) {
			console.error("Failed to fetch gallery:", err);
		} finally {
			setLoading(false);
		}
	};
	const filtered = items.filter((item) => {
		const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
		const matchCat = filterCat === "All" || item.category === filterCat;
		return matchSearch && matchCat;
	});
	const toggleFeatured = async (id) => {
		try {
			const updated = await galleryApi.toggleFeatured(id);
			setItems(items.map((i) => i._id === id ? updated : i));
		} catch (err) {
			console.error("Failed to toggle featured:", err);
		}
	};
	const handleFileSelect = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			setSelectedFile(file);
			const reader = new FileReader();
			reader.onload = () => setPreviewSrc(reader.result);
			reader.readAsDataURL(file);
		}
	};
	const add = async () => {
		if (!title || !selectedFile) return;
		try {
			setSaving(true);
			const formData = new FormData();
			formData.append("image", selectedFile);
			formData.append("title", title);
			formData.append("category", category);
			formData.append("featured", String(featured));
			const newItem = await galleryApi.create(formData);
			setItems([newItem, ...items]);
			closeModal();
		} catch (err) {
			console.error("Failed to add gallery item:", err);
		} finally {
			setSaving(false);
		}
	};
	const closeModal = () => {
		setModal(false);
		setTitle("");
		setCategory("");
		setFeatured(false);
		setSelectedFile(null);
		setPreviewSrc(null);
	};
	const del = async (id) => {
		try {
			await galleryApi.delete(id);
			setItems(items.filter((i) => i._id !== id));
			setDeleteId(null);
		} catch (err) {
			console.error("Failed to delete gallery item:", err);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-brand" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						items.length,
						" items · ",
						items.filter((i) => i.featured).length,
						" featured"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						closeModal();
						setModal(true);
					},
					className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Image"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 min-w-[200px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: search,
							onChange: (e) => setSearch(e.target.value),
							placeholder: "Search gallery...",
							className: "w-full rounded-xl border border-border bg-white pl-9 pr-4 py-2.5 text-sm outline-none focus:border-brand"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex rounded-xl border border-border overflow-hidden",
						children: GALLERY_CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilterCat(cat),
							className: `px-3 py-2 text-xs font-medium transition-colors ${filterCat === cat ? "bg-brand text-white" : "bg-white text-muted-foreground hover:bg-muted"}`,
							children: cat
						}, cat))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex rounded-xl border border-border overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setView("grid"),
							className: `grid h-[42px] w-[42px] place-items-center ${view === "grid" ? "bg-brand text-white" : "bg-white text-muted-foreground hover:bg-muted"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setView("list"),
							className: `grid h-[42px] w-[42px] place-items-center ${view === "list" ? "bg-brand text-white" : "bg-white text-muted-foreground hover:bg-muted"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" })
						})]
					})
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-16 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "mb-2 h-8 w-8 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No gallery items found" })]
			}) : view === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative rounded-2xl border border-border/60 bg-white shadow-elevated overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] cursor-pointer overflow-hidden",
						onClick: () => setPreviewUrl(item.url),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.url,
							alt: item.title,
							className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						}), item.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-2 left-2 rounded-full bg-yellow-400 px-2 py-0.5 text-[10px] font-bold text-yellow-900 shadow",
							children: "★ Featured"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold text-sm",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground uppercase tracking-wide",
									children: item.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: item.uploadedAt
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => toggleFeatured(item._id),
									className: `flex flex-1 items-center justify-center gap-1.5 rounded-lg border py-1.5 text-xs font-medium transition-colors ${item.featured ? "border-yellow-300 bg-yellow-50 text-yellow-700 hover:bg-yellow-100" : "border-border text-muted-foreground hover:border-yellow-300 hover:text-yellow-700"}`,
									children: [item.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarOff, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5" }), item.featured ? "Unfeature" : "Feature"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setDeleteId(item._id),
									className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-destructive hover:text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
								})]
							})
						]
					})]
				}, item._id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border/60 bg-white shadow-elevated overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "border-b border-border/40 bg-muted/30",
							children: [
								"Image",
								"Title",
								"Category",
								"Date",
								"Featured",
								"Actions"
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: h
							}, h))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/30 hover:bg-muted/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.url,
										alt: item.title,
										className: "h-10 w-14 rounded-lg object-cover cursor-pointer",
										onClick: () => setPreviewUrl(item.url)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-medium",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted-foreground text-xs",
									children: item.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted-foreground text-xs",
									children: item.uploadedAt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => toggleFeatured(item._id),
										className: `rounded-full px-2.5 py-1 text-[10px] font-semibold ${item.featured ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500"}`,
										children: item.featured ? "★ Featured" : "—"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setDeleteId(item._id),
										className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-red-50 hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
									})
								})
							]
						}, item._id)) })]
					})
				})
			}),
			modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-2xl bg-white shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold",
								children: "Add Gallery Item"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: title,
									onChange: (e) => setTitle(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									placeholder: "e.g. Showroom Interior"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
										children: "Upload Image"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileInputRef,
										type: "file",
										accept: "image/*",
										onChange: handleFileSelect,
										className: "hidden"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => fileInputRef.current?.click(),
										className: "mt-1.5 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border px-3 py-6 text-sm text-muted-foreground hover:border-brand hover:text-brand transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5" }), selectedFile ? selectedFile.name : "Click to select image"]
									})
								] }),
								previewSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-xl overflow-hidden border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: previewSrc,
										alt: "Preview",
										className: "h-32 w-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: category,
									onChange: (e) => setCategory(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select category"
									}), GALLERY_CATEGORIES.filter((c) => c !== "All").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c,
										children: c
									}, c))]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: featured,
										onChange: (e) => setFeatured(e.target.checked),
										className: "h-4 w-4 rounded border-border text-brand"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: "Mark as Featured"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-2 border-t border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: add,
								disabled: !title || !selectedFile || saving,
								className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow disabled:opacity-50",
								children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), saving ? "Uploading..." : "Add Item"]
							})]
						})
					]
				})
			}),
			previewUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4",
				onClick: () => setPreviewUrl(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-3xl max-h-[80vh]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute -top-10 right-0 text-white hover:text-white/80",
						onClick: () => setPreviewUrl(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: previewUrl,
						alt: "Preview",
						className: "max-h-[80vh] rounded-2xl object-contain"
					})]
				})
			}),
			deleteId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Delete Gallery Item?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "This action cannot be undone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDeleteId(null),
								className: "flex-1 rounded-xl border border-border py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => del(deleteId),
								className: "flex-1 rounded-xl bg-destructive py-2 text-sm font-semibold text-white",
								children: "Delete"
							})]
						})
					]
				})
			})
		]
	});
}
var Route$3 = createFileRoute("/admin/customers")({ component: CustomersManagement });
function CustomersManagement() {
	const [customers, setCustomers] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterBranch, setFilterBranch] = (0, import_react.useState)("All");
	const [viewCustomer, setViewCustomer] = (0, import_react.useState)(null);
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		fetchCustomers();
	}, []);
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
		const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search) || c.email.toLowerCase().includes(search.toLowerCase());
		const matchBranch = filterBranch === "All" || c.branch === filterBranch;
		return matchSearch && matchBranch;
	});
	const totalSpend = customers.reduce((sum, c) => sum + Number(c.totalSpend.replace(/[₹,]/g, "")), 0);
	const del = async (id) => {
		try {
			await customersApi.delete(id);
			setCustomers(customers.filter((c) => c._id !== id));
			setDeleteId(null);
		} catch (err) {
			console.error("Failed to delete customer:", err);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-brand" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Customers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						customers.length,
						" customers · Total spend: ₹",
						totalSpend.toLocaleString("en-IN")
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						placeholder: "Search by name, phone, or email...",
						className: "w-full rounded-xl border border-border bg-white pl-9 pr-4 py-2.5 text-sm outline-none focus:border-brand"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: filterBranch,
					onChange: (e) => setFilterBranch(e.target.value),
					className: "rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "All",
						children: "All Branches"
					}), BRANCHES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: b.name,
						children: b.name
					}, b.slug))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-full flex flex-col items-center justify-center py-16 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mb-2 h-8 w-8 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No customers found" })]
				}) : filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated hover:shadow-lg transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand font-display text-sm font-bold",
									children: c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-semibold text-sm leading-tight",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-mono text-muted-foreground",
									children: c._id.slice(-8)
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${c.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`,
								children: c.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.phone })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.email })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.city })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.branch })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between border-t border-border/40 pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-wide text-muted-foreground",
								children: "Orders"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-bold text-sm",
								children: c.totalOrders
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-wide text-muted-foreground",
									children: "Total Spend"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display font-bold text-sm text-brand",
									children: c.totalSpend
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setViewCustomer(c),
								className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-brand hover:text-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " View"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setDeleteId(c._id),
								className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-destructive hover:text-destructive",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
							})]
						})
					]
				}, c._id))
			}),
			viewCustomer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-2xl bg-white shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold",
								children: "Customer Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setViewCustomer(null),
								className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand font-display text-lg font-bold",
									children: viewCustomer.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display font-bold text-lg",
									children: viewCustomer.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-muted-foreground",
									children: viewCustomer._id.slice(-8)
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
										label: "Phone",
										value: viewCustomer.phone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
										label: "Email",
										value: viewCustomer.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
										label: "City",
										value: viewCustomer.city
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
										label: "Branch",
										value: viewCustomer.branch
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
										label: "Total Orders",
										value: String(viewCustomer.totalOrders)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
										label: "Total Spend",
										value: viewCustomer.totalSpend,
										highlight: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
										label: "Last Order",
										value: viewCustomer.lastOrder
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
										label: "Status",
										value: viewCustomer.status.charAt(0).toUpperCase() + viewCustomer.status.slice(1)
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end border-t border-border/60 px-5 py-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setViewCustomer(null),
								className: "rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow",
								children: "Close"
							})
						})
					]
				})
			}),
			deleteId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Delete Customer?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "This action cannot be undone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDeleteId(null),
								className: "flex-1 rounded-xl border border-border py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => del(deleteId),
								className: "flex-1 rounded-xl bg-destructive py-2 text-sm font-semibold text-white",
								children: "Delete"
							})]
						})
					]
				})
			})
		]
	});
}
function DetailRow({ label, value, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: highlight ? "font-semibold text-brand" : "font-medium",
			children: value
		})]
	});
}
var Route$2 = createFileRoute("/admin/categories")({ component: CategoriesManagement });
function CategoriesManagement() {
	const [cats, setCats] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [modal, setModal] = (0, import_react.useState)(null);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [slug, setSlug] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("active");
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		fetchCategories();
	}, []);
	const fetchCategories = async () => {
		try {
			setLoading(true);
			const data = await categoriesApi.getAll();
			setCats(data);
		} catch (err) {
			console.error("Failed to fetch categories:", err);
		} finally {
			setLoading(false);
		}
	};
	const resetForm = () => {
		setName("");
		setSlug("");
		setStatus("active");
	};
	const openAdd = () => {
		resetForm();
		setModal("add");
	};
	const openEdit = (c) => {
		setEditing(c);
		setName(c.name);
		setSlug(c.slug);
		setStatus(c.status);
		setModal("edit");
	};
	const closeModal = () => {
		setModal(null);
		setEditing(null);
		resetForm();
	};
	const save = async () => {
		try {
			setSaving(true);
			const finalSlug = slug || name.toLowerCase().replace(/\s+/g, "-");
			if (modal === "add") {
				const newCat = await categoriesApi.create({
					name,
					slug: finalSlug,
					productCount: 0,
					status
				});
				setCats([...cats, newCat]);
			} else if (modal === "edit" && editing) {
				const updated = await categoriesApi.update(editing._id, {
					name,
					slug: finalSlug,
					status
				});
				setCats(cats.map((c) => c._id === editing._id ? updated : c));
			}
			closeModal();
		} catch (err) {
			console.error("Failed to save category:", err);
		} finally {
			setSaving(false);
		}
	};
	const del = async (id) => {
		try {
			await categoriesApi.delete(id);
			setCats(cats.filter((c) => c._id !== id));
			setDeleteId(null);
		} catch (err) {
			console.error("Failed to delete category:", err);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-brand" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Categories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [cats.length, " categories"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAdd,
					className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Category"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${c.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`,
								children: c.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display font-semibold",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: ["/", c.slug]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [c.productCount, " products"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => openEdit(c),
								className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-brand hover:text-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), " Edit"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setDeleteId(c._id),
								className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-destructive hover:text-destructive",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
							})]
						})
					]
				}, c._id))
			}),
			modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-2xl bg-white shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold",
								children: modal === "add" ? "Add Category" : "Edit Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Category Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: name,
									onChange: (e) => {
										setName(e.target.value);
										setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"));
									},
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									placeholder: "e.g. Televisions"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Slug"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: slug,
									onChange: (e) => setSlug(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand font-mono",
									placeholder: "televisions"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: status,
									onChange: (e) => setStatus(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "active",
										children: "Active"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "inactive",
										children: "Inactive"
									})]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-2 border-t border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: save,
								disabled: !name || saving,
								className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow disabled:opacity-50",
								children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), modal === "add" ? "Add Category" : "Save Changes"]
							})]
						})
					]
				})
			}),
			deleteId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Delete Category?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Products in this category won't be deleted."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDeleteId(null),
								className: "flex-1 rounded-xl border border-border py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => del(deleteId),
								className: "flex-1 rounded-xl bg-destructive py-2 text-sm font-semibold text-white",
								children: "Delete"
							})]
						})
					]
				})
			})
		]
	});
}
var Route$1 = createFileRoute("/admin/campaigns")({ component: CampaignsManagement });
var STATUS_STYLES = {
	draft: "bg-gray-100 text-gray-600",
	sent: "bg-green-100 text-green-700",
	scheduled: "bg-blue-100 text-blue-700"
};
var SEGMENT_STYLES = {
	all: "bg-purple-50 text-purple-700",
	branch: "bg-indigo-50 text-indigo-700",
	category: "bg-amber-50 text-amber-700"
};
function CampaignsManagement() {
	const [campaigns, setCampaigns] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [modal, setModal] = (0, import_react.useState)(null);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [title, setTitle] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [segment, setSegment] = (0, import_react.useState)("all");
	const [segmentValue, setSegmentValue] = (0, import_react.useState)("");
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		fetchCampaigns();
	}, []);
	const fetchCampaigns = async () => {
		try {
			setLoading(true);
			const data = await campaignsApi.getAll();
			setCampaigns(data);
		} catch (err) {
			console.error("Failed to fetch campaigns:", err);
		} finally {
			setLoading(false);
		}
	};
	const filtered = campaigns.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()) || c.message.toLowerCase().includes(search.toLowerCase()));
	const resetForm = () => {
		setTitle("");
		setMessage("");
		setSegment("all");
		setSegmentValue("");
	};
	const openAdd = () => {
		resetForm();
		setModal("add");
	};
	const openEdit = (c) => {
		setEditing(c);
		setTitle(c.title);
		setMessage(c.message);
		setSegment(c.segment);
		setSegmentValue(c.segmentValue || "");
		setModal("edit");
	};
	const closeModal = () => {
		setModal(null);
		setEditing(null);
		resetForm();
	};
	const save = async () => {
		try {
			setSaving(true);
			const data = {
				title,
				message,
				segment,
				segmentValue,
				status: "draft",
				recipients: 0
			};
			if (modal === "add") {
				const newCampaign = await campaignsApi.create(data);
				setCampaigns([newCampaign, ...campaigns]);
			} else if (modal === "edit" && editing) {
				const updated = await campaignsApi.update(editing._id, {
					title,
					message,
					segment,
					segmentValue
				});
				setCampaigns(campaigns.map((c) => c._id === editing._id ? updated : c));
			}
			closeModal();
		} catch (err) {
			console.error("Failed to save campaign:", err);
		} finally {
			setSaving(false);
		}
	};
	const sendCampaign = async (id) => {
		try {
			const updated = await campaignsApi.send(id);
			setCampaigns(campaigns.map((c) => c._id === id ? updated : c));
		} catch (err) {
			console.error("Failed to send campaign:", err);
		}
	};
	const del = async (id) => {
		try {
			await campaignsApi.delete(id);
			setCampaigns(campaigns.filter((c) => c._id !== id));
			setDeleteId(null);
		} catch (err) {
			console.error("Failed to delete campaign:", err);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-brand" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "WhatsApp Campaigns"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						campaigns.length,
						" campaigns · ",
						campaigns.filter((c) => c.status === "sent").length,
						" sent"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAdd,
					className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New Campaign"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: search,
					onChange: (e) => setSearch(e.target.value),
					placeholder: "Search campaigns...",
					className: "w-full rounded-xl border border-border bg-white pl-9 pr-4 py-2.5 text-sm outline-none focus:border-brand"
				})]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-16 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mb-2 h-8 w-8 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No campaigns found" })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-xl bg-green-100 text-green-700",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${STATUS_STYLES[c.status]}`,
									children: c.status
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display font-semibold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-muted-foreground line-clamp-2",
							children: c.message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${SEGMENT_STYLES[c.segment]}`,
								children: c.segment === "all" ? "All Customers" : `${c.segment}: ${c.segmentValue}`
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [c.recipients, " recipients"] })]
							}), c.sentAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.sentAt })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [
								c.status === "draft" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => sendCampaign(c._id),
									className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-600 py-1.5 text-xs font-semibold text-white hover:bg-green-700",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }), " Send Now"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => openEdit(c),
									className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-brand hover:text-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), " Edit"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setDeleteId(c._id),
									className: "grid h-[30px] w-[30px] place-items-center rounded-lg border border-border text-muted-foreground hover:border-destructive hover:text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
								})
							]
						})
					]
				}, c._id))
			}),
			modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-lg rounded-2xl bg-white shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold",
								children: modal === "add" ? "New Campaign" : "Edit Campaign"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Campaign Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: title,
									onChange: (e) => setTitle(e.target.value),
									className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
									placeholder: "e.g. Festival Sale Alert"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
										children: "Message"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: message,
										onChange: (e) => setMessage(e.target.value),
										rows: 4,
										className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand resize-none",
										placeholder: "Type your WhatsApp message here..."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-[10px] text-muted-foreground",
										children: [message.length, " characters"]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
										children: "Segment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: segment,
										onChange: (e) => {
											setSegment(e.target.value);
											setSegmentValue("");
										},
										className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "all",
												children: "All Customers"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "branch",
												children: "By Branch"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "category",
												children: "By Category"
											})
										]
									})] }), segment !== "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
										children: segment === "branch" ? "Branch" : "Category"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: segmentValue,
										onChange: (e) => setSegmentValue(e.target.value),
										className: "mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: "",
											children: ["Select ", segment]
										}), (segment === "branch" ? BRANCHES.map((b) => b.name) : CATEGORIES.map((c) => c.name)).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: v,
											children: v
										}, v))]
									})] })]
								})
							]
						}),
						message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-5 mb-4 rounded-xl border border-green-200 bg-green-50 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold uppercase tracking-wide text-green-700 mb-2",
								children: "WhatsApp Preview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg bg-white p-3 text-sm shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "whitespace-pre-wrap",
									children: message
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-2 border-t border-border/60 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: closeModal,
								className: "rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: save,
								disabled: !title || !message || saving,
								className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow disabled:opacity-50",
								children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), modal === "add" ? "Create Campaign" : "Save Changes"]
							})]
						})
					]
				})
			}),
			deleteId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Delete Campaign?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "This action cannot be undone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDeleteId(null),
								className: "flex-1 rounded-xl border border-border py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => del(deleteId),
								className: "flex-1 rounded-xl bg-destructive py-2 text-sm font-semibold text-white",
								children: "Delete"
							})]
						})
					]
				})
			})
		]
	});
}
var Route = createFileRoute("/admin/analytics")({ component: AnalyticsPage });
var PIE_COLORS = [
	"oklch(0.52 0.18 10)",
	"oklch(0.6 0.15 30)",
	"oklch(0.68 0.14 50)",
	"oklch(0.55 0.16 200)",
	"oklch(0.62 0.18 140)",
	"oklch(0.58 0.12 270)"
];
var PAYMENT_DATA = [
	{
		mode: "EMI",
		count: INITIAL_ORDERS.filter((o) => o.paymentMode === "emi").length
	},
	{
		mode: "UPI",
		count: INITIAL_ORDERS.filter((o) => o.paymentMode === "upi").length
	},
	{
		mode: "Card",
		count: INITIAL_ORDERS.filter((o) => o.paymentMode === "card").length
	},
	{
		mode: "Cash",
		count: INITIAL_ORDERS.filter((o) => o.paymentMode === "cash").length
	}
];
var STATUS_DATA = [
	{
		status: "Delivered",
		count: INITIAL_ORDERS.filter((o) => o.status === "delivered").length
	},
	{
		status: "Confirmed",
		count: INITIAL_ORDERS.filter((o) => o.status === "confirmed").length
	},
	{
		status: "Pending",
		count: INITIAL_ORDERS.filter((o) => o.status === "pending").length
	},
	{
		status: "Cancelled",
		count: INITIAL_ORDERS.filter((o) => o.status === "cancelled").length
	}
];
var STATUS_COLORS = [
	"oklch(0.6 0.18 150)",
	"oklch(0.55 0.16 240)",
	"oklch(0.7 0.16 80)",
	"oklch(0.55 0.18 20)"
];
var totalRevenue = INITIAL_ORDERS.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.amountNum, 0);
var avgOrderValue = Math.round(totalRevenue / INITIAL_ORDERS.filter((o) => o.status !== "cancelled").length);
function AnalyticsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold",
				children: "Analytics"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Complete business intelligence overview"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: IndianRupee,
						label: "Total Revenue",
						value: `₹${totalRevenue.toLocaleString("en-IN")}`,
						change: "+12.5%",
						trend: "up",
						color: "brand"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: ShoppingCart,
						label: "Avg. Order Value",
						value: `₹${avgOrderValue.toLocaleString("en-IN")}`,
						change: "+8.3%",
						trend: "up",
						color: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: Users,
						label: "Active Customers",
						value: String(INITIAL_CUSTOMERS.filter((c) => c.status === "active").length),
						change: "+3",
						trend: "up",
						color: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: Package,
						label: "Active Products",
						value: String(INITIAL_PRODUCTS.filter((p) => p.status === "active").length),
						change: "-1",
						trend: "down",
						color: "orange"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[1fr_380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Revenue Trend"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Monthly revenue with orders overlay"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
									data: MONTHLY_SALES,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "revenueGrad",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "5%",
												stopColor: "oklch(0.52 0.18 10)",
												stopOpacity: .3
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "95%",
												stopColor: "oklch(0.52 0.18 10)",
												stopOpacity: 0
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "oklch(0.929 0.013 255.508)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											tick: { fontSize: 11 },
											axisLine: false,
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tick: { fontSize: 10 },
											axisLine: false,
											tickLine: false,
											tickFormatter: (v) => `₹${(v / 1e3).toFixed(0)}k`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											formatter: (v, name) => [name === "revenue" ? `₹${v.toLocaleString("en-IN")}` : v, name === "revenue" ? "Revenue" : "Orders"],
											contentStyle: {
												borderRadius: 12,
												fontSize: 12,
												border: "1px solid oklch(0.929 0.013 255.508)"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "revenue",
											stroke: "oklch(0.52 0.18 10)",
											strokeWidth: 2.5,
											fill: "url(#revenueGrad)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "orders",
											stroke: "oklch(0.55 0.16 240)",
											strokeWidth: 2,
											dot: {
												fill: "oklch(0.55 0.16 240)",
												r: 3
											}
										})
									]
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Sales by Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Revenue share breakdown"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
								width: 180,
								height: 180,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: CATEGORY_SALES,
									dataKey: "revenue",
									cx: "50%",
									cy: "50%",
									innerRadius: 50,
									outerRadius: 80,
									paddingAngle: 3,
									children: CATEGORY_SALES.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: PIE_COLORS[i % PIE_COLORS.length] }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									formatter: (v) => [`₹${v.toLocaleString("en-IN")}`, "Revenue"],
									contentStyle: {
										borderRadius: 12,
										fontSize: 12
									}
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-1.5",
							children: CATEGORY_SALES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2.5 w-2.5 rounded-full",
										style: { background: PIE_COLORS[i] }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: c.category
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold",
									children: ["₹", c.revenue.toLocaleString("en-IN")]
								})]
							}, c.category))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Branch Performance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Revenue by branch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-52",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: BRANCH_SALES,
									barSize: 32,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "branch",
											tick: { fontSize: 10 },
											axisLine: false,
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { hide: true }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											formatter: (v) => [`₹${v.toLocaleString("en-IN")}`, "Revenue"],
											contentStyle: {
												borderRadius: 12,
												fontSize: 12,
												border: "1px solid oklch(0.929 0.013 255.508)"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "revenue",
											fill: "oklch(0.52 0.18 10)",
											radius: [
												6,
												6,
												0,
												0
											]
										})
									]
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Payment Modes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Distribution of payment methods"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-52",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: PAYMENT_DATA,
									barSize: 40,
									layout: "vertical",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											type: "number",
											hide: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											type: "category",
											dataKey: "mode",
											tick: { fontSize: 12 },
											axisLine: false,
											tickLine: false,
											width: 50
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											borderRadius: 12,
											fontSize: 12,
											border: "1px solid oklch(0.929 0.013 255.508)"
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "count",
											fill: "oklch(0.55 0.16 240)",
											radius: [
												0,
												6,
												6,
												0
											]
										})
									]
								})
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Order Status Distribution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Current order pipeline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
								width: 220,
								height: 200,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: STATUS_DATA,
									dataKey: "count",
									cx: "50%",
									cy: "50%",
									outerRadius: 80,
									paddingAngle: 4,
									label: ({ status, percent }) => `${status} ${(percent * 100).toFixed(0)}%`,
									children: STATUS_DATA.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: STATUS_COLORS[i] }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									borderRadius: 12,
									fontSize: 12
								} })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: "Category Units Radar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Units sold by category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadarChart, {
								cx: 110,
								cy: 100,
								outerRadius: 80,
								width: 260,
								height: 210,
								data: CATEGORY_SALES,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarGrid, { stroke: "oklch(0.929 0.013 255.508)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarAngleAxis, {
										dataKey: "category",
										tick: { fontSize: 9 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarRadiusAxis, {
										tick: false,
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, {
										dataKey: "units",
										stroke: "oklch(0.52 0.18 10)",
										fill: "oklch(0.52 0.18 10)",
										fillOpacity: .25,
										strokeWidth: 2
									})
								]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border/60 bg-white shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border/60 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold",
						children: "Top-Selling Products"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: "Based on order data"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "border-b border-border/40 bg-muted/30",
							children: [
								"#",
								"Product",
								"Category",
								"Orders",
								"Revenue"
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: h
							}, h))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: INITIAL_ORDERS.filter((o) => o.status !== "cancelled").slice(0, 6).map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/30 hover:bg-muted/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-mono text-xs text-muted-foreground",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-medium",
									children: o.product
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 text-muted-foreground text-xs",
									children: o.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5",
									children: "1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-semibold text-brand",
									children: o.amount
								})
							]
						}, o.id)) })]
					})
				})]
			})
		]
	});
}
function KpiCard({ icon: Icon, label, value, change, trend, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-border/60 bg-white p-5 shadow-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl font-bold text-foreground",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center gap-1",
					children: [
						trend === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3 text-green-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3 w-3 text-red-500" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-xs font-semibold ${trend === "up" ? "text-green-600" : "text-red-500"}`,
							children: change
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground",
							children: "vs last month"
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid h-11 w-11 place-items-center rounded-xl ${{
					brand: "bg-brand/10 text-brand",
					blue: "bg-blue-100 text-blue-600",
					green: "bg-green-100 text-green-600",
					orange: "bg-orange-100 text-orange-600"
				}[color]}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			})]
		})
	});
}
var WishlistRoute = Route$29.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$30
});
var TermsConditionsRoute = Route$28.update({
	id: "/terms-conditions",
	path: "/terms-conditions",
	getParentRoute: () => Route$30
});
var SitemapDotxmlRoute = Route$27.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$30
});
var ResetPasswordRoute = Route$26.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$30
});
var RefundPolicyRoute = Route$25.update({
	id: "/refund-policy",
	path: "/refund-policy",
	getParentRoute: () => Route$30
});
var ProfileRoute = Route$24.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$30
});
var ProductsRoute = Route$23.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$30
});
var PrivacyPolicyRoute = Route$22.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$30
});
var PaymentRoute = Route$21.update({
	id: "/payment",
	path: "/payment",
	getParentRoute: () => Route$30
});
var GalleryRoute = Route$20.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$30
});
var ForgotPasswordRoute = Route$19.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$30
});
var ContactRoute = Route$18.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$30
});
var CheckoutRoute = Route$17.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$30
});
var CartRoute = Route$16.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$30
});
var AdminRoute = Route$15.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$30
});
var AboutRoute = Route$14.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$30
});
var SignupRoute = Route$13.update({
	id: "/Signup",
	path: "/Signup",
	getParentRoute: () => Route$30
});
var LoginRoute = Route$12.update({
	id: "/Login",
	path: "/Login",
	getParentRoute: () => Route$30
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$30
});
var ProductsIndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProductsRoute
});
var AdminIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var ProductsIdRoute = Route$8.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ProductsRoute
});
var AdminProductsRoute = Route$7.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => AdminRoute
});
var AdminOrdersRoute = Route$6.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AdminRoute
});
var AdminNotificationsRoute = Route$5.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AdminRoute
});
var AdminGalleryRoute = Route$4.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => AdminRoute
});
var AdminCustomersRoute = Route$3.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => AdminRoute
});
var AdminCategoriesRoute = Route$2.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => AdminRoute
});
var AdminCampaignsRoute = Route$1.update({
	id: "/campaigns",
	path: "/campaigns",
	getParentRoute: () => AdminRoute
});
var AdminRouteChildren = {
	AdminAnalyticsRoute: Route.update({
		id: "/analytics",
		path: "/analytics",
		getParentRoute: () => AdminRoute
	}),
	AdminCampaignsRoute,
	AdminCategoriesRoute,
	AdminCustomersRoute,
	AdminGalleryRoute,
	AdminNotificationsRoute,
	AdminOrdersRoute,
	AdminProductsRoute,
	AdminIndexRoute
};
var AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
var ProductsRouteChildren = {
	ProductsIdRoute,
	ProductsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	LoginRoute,
	SignupRoute,
	AboutRoute,
	AdminRoute: AdminRouteWithChildren,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	ForgotPasswordRoute,
	GalleryRoute,
	PaymentRoute,
	PrivacyPolicyRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	ProfileRoute,
	RefundPolicyRoute,
	ResetPasswordRoute,
	SitemapDotxmlRoute,
	TermsConditionsRoute,
	WishlistRoute
};
var routeTree = Route$30._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
