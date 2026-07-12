import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as waLink } from "./site-data-CLA0JJbR.mjs";
import { l as MessageCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-fab-Ch0dbJpQ.js
var import_jsx_runtime = require_jsx_runtime();
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
//#endregion
export { WhatsAppFab as t };
