export const SITE = {
  name: "SL SHOPEE",
  tagline: "Electronics & Home Furniture Showroom",
  phone: "+91 90000 00000",
  whatsapp: "919000000000",
  email: "hello@slshopee.in",
  hours: "Mon – Sun · 9:30 AM – 9:00 PM",
};

export const BRANCHES = [
  { slug: "achampeta", name: "Achampeta (Kakinada)", address: "Main Road, Achampeta, Kakinada, Andhra Pradesh", phone: "+91 90000 00001" },
  { slug: "pithapuram", name: "Pithapuram", address: "Bazaar Street, Pithapuram, Andhra Pradesh", phone: "+91 90000 00002" },
  { slug: "kathipudi", name: "Kathipudi", address: "NH-16, Kathipudi, Andhra Pradesh", phone: "+91 90000 00003" },
  { slug: "gollaprolu", name: "Gollaprolu", address: "Main Road, Gollaprolu, Andhra Pradesh", phone: "+91 90000 00004" },
  { slug: "peddapuram", name: "Peddapuram", address: "Market Road, Peddapuram, Andhra Pradesh", phone: "+91 90000 00005" },
];

export const CATEGORIES = [
  { icon: "📺", name: "Televisions" },
  { icon: "📱", name: "Smartphones" },
  { icon: "🛋", name: "Furniture" },
  { icon: "❄", name: "Air Conditioners" },
  { icon: "🧺", name: "Washing Machines" },
  { icon: "🌬", name: "Air Coolers" },
  { icon: "💧", name: "Water Purifiers" },
  { icon: "🍳", name: "Kitchen Appliances" },
  { icon: "🔥", name: "Microwave Ovens" },
  { icon: "🍚", name: "Rice Cookers" },
  { icon: "🌀", name: "Fans" },
  { icon: "☕", name: "Kettles" },
];

export const BRANDS = [
  "Samsung", "LG", "Sony", "Whirlpool", "IFB", "Haier",
  "Vivo", "Oppo", "Realme", "OnePlus", "Panasonic", "Philips",
];

export const PRODUCTS = [
  { name: "4K Ultra HD Smart TV", brand: "Samsung", price: "₹49,990", category: "Televisions", emoji: "📺" },
  { name: "OLED Bravia TV", brand: "Sony", price: "₹1,29,990", category: "Televisions", emoji: "📺" },
  { name: "Smartphone Pro 5G", brand: "Vivo", price: "₹32,999", category: "Smartphones", emoji: "📱" },
  { name: "Realme Note 60", brand: "Realme", price: "₹12,499", category: "Smartphones", emoji: "📱" },
  { name: "Front Load Washing Machine", brand: "IFB", price: "₹34,490", category: "Washing Machines", emoji: "🧺" },
  { name: "Semi Auto Washer", brand: "Whirlpool", price: "₹14,990", category: "Washing Machines", emoji: "🧺" },
  { name: "1.5 Ton Split AC 5-Star", brand: "LG", price: "₹41,990", category: "Air Conditioners", emoji: "❄" },
  { name: "Inverter Split AC", brand: "Haier", price: "₹36,490", category: "Air Conditioners", emoji: "❄" },
  { name: "L-Shape Fabric Sofa", brand: "SL Shopee", price: "₹28,999", category: "Furniture", emoji: "🛋" },
  { name: "Recliner Chair", brand: "SL Shopee", price: "₹18,499", category: "Furniture", emoji: "🛋" },
  { name: "RO+UV Water Purifier", brand: "Kent", price: "₹13,999", category: "Water Purifiers", emoji: "💧" },
  { name: "Convection Microwave", brand: "Panasonic", price: "₹10,990", category: "Kitchen Appliances", emoji: "🔥" },
];

export const TESTIMONIALS = [
  { name: "Ravi Kumar", role: "Pithapuram", text: "Bought a Sony TV at the best price in town. Staff explained every feature clearly." },
  { name: "Lakshmi Devi", role: "Kakinada", text: "Great EMI options and quick home delivery. Very happy with my new washing machine." },
  { name: "Suresh Babu", role: "Peddapuram", text: "Trusted brand names and honest pricing — SL SHOPEE is our family go-to store." },
  { name: "Anitha S.", role: "Gollaprolu", text: "Excellent after-sales service. They installed our AC on the same day!" },
];

export function waLink(message = "Hi SL SHOPEE, I'd like to enquire about a product.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/branches", label: "Branches" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;