// Admin mock data — all state managed via React, no backend required
import { PRODUCTS, CATEGORIES, BRANCHES } from "./site-data";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: string;
  priceNum: number;
  category: string;
  image: string;
  stock: number;
  status: "active" | "inactive" | "out_of_stock";
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  status: "active" | "inactive";
};

export type Order = {
  id: string;
  customer: string;
  phone: string;
  product: string;
  category: string;
  branch: string;
  amount: string;
  amountNum: number;
  status: "pending" | "confirmed" | "delivered" | "cancelled";
  date: string;
  paymentMode: "cash" | "emi" | "upi" | "card";
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  branch: string;
  totalOrders: number;
  totalSpend: string;
  lastOrder: string;
  status: "active" | "inactive";
};

export type GalleryItem = {
  id: string;
  title: string;
  type: "image" | "video";
  url: string;
  category: string;
  uploadedAt: string;
  featured: boolean;
};

export type Campaign = {
  id: string;
  title: string;
  message: string;
  segment: "all" | "branch" | "category";
  segmentValue?: string;
  sentAt?: string;
  status: "draft" | "sent" | "scheduled";
  recipients: number;
};

export type Notification = {
  id: string;
  title: string;
  body: string;
  type: "promo" | "order" | "general";
  sentAt?: string;
  status: "draft" | "sent";
  recipients: number;
};

// Seed products from existing data
export const INITIAL_PRODUCTS: Product[] = PRODUCTS.map((p, i) => ({
  id: `PRD-${String(i + 1).padStart(3, "0")}`,
  name: p.name,
  brand: p.brand,
  price: p.price,
  priceNum: Number(p.price.replace(/[₹,]/g, "")),
  category: p.category,
  image: p.image,
  stock: (i * 7 + 3) % 40 + 5,
  status: i < 10 ? "active" : "inactive",
}));

export const INITIAL_CATEGORIES: Category[] = CATEGORIES.map((c, i) => ({
  id: `CAT-${String(i + 1).padStart(3, "0")}`,
  name: c.name,
  slug: c.name.toLowerCase().replace(/\s+/g, "-"),
  productCount: PRODUCTS.filter((p) => p.category === c.name).length,
  status: "active",
}));

export const INITIAL_ORDERS: Order[] = [
  { id: "ORD-001", customer: "Ravi Kumar", phone: "+91 98765 43210", product: "4K Ultra HD Smart TV", category: "Televisions", branch: "Achampeta (Kakinada)", amount: "₹49,990", amountNum: 49990, status: "delivered", date: "2025-07-10", paymentMode: "emi" },
  { id: "ORD-002", customer: "Lakshmi Devi", phone: "+91 87654 32109", product: "Front Load Washing Machine", category: "Washing Machines", branch: "Pithapuram", amount: "₹34,490", amountNum: 34490, status: "delivered", date: "2025-07-09", paymentMode: "card" },
  { id: "ORD-003", customer: "Suresh Babu", phone: "+91 76543 21098", product: "1.5 Ton Split AC 5-Star", category: "Air Conditioners", branch: "Peddapuram", amount: "₹41,990", amountNum: 41990, status: "confirmed", date: "2025-07-09", paymentMode: "cash" },
  { id: "ORD-004", customer: "Anitha S.", phone: "+91 65432 10987", product: "OLED Bravia TV", category: "Televisions", branch: "Gollaprolu", amount: "₹1,29,990", amountNum: 129990, status: "pending", date: "2025-07-08", paymentMode: "emi" },
  { id: "ORD-005", customer: "Vijay Reddy", phone: "+91 54321 09876", product: "Smartphone Pro 5G", category: "Smartphones", branch: "Kathipudi", amount: "₹32,999", amountNum: 32999, status: "delivered", date: "2025-07-08", paymentMode: "upi" },
  { id: "ORD-006", customer: "Padma Rao", phone: "+91 43210 98765", product: "L-Shape Fabric Sofa", category: "Furniture", branch: "Achampeta (Kakinada)", amount: "₹28,999", amountNum: 28999, status: "cancelled", date: "2025-07-07", paymentMode: "card" },
  { id: "ORD-007", customer: "Krishna Murthy", phone: "+91 32109 87654", product: "Inverter Split AC", category: "Air Conditioners", branch: "Pithapuram", amount: "₹36,490", amountNum: 36490, status: "confirmed", date: "2025-07-07", paymentMode: "emi" },
  { id: "ORD-008", customer: "Sita Devi", phone: "+91 21098 76543", product: "RO+UV Water Purifier", category: "Water Purifiers", branch: "Peddapuram", amount: "₹13,999", amountNum: 13999, status: "delivered", date: "2025-07-06", paymentMode: "upi" },
  { id: "ORD-009", customer: "Ramesh K.", phone: "+91 10987 65432", product: "Realme Note 60", category: "Smartphones", branch: "Kathipudi", amount: "₹12,499", amountNum: 12499, status: "delivered", date: "2025-07-06", paymentMode: "cash" },
  { id: "ORD-010", customer: "Usha Rani", phone: "+91 09876 54321", product: "Convection Microwave", category: "Kitchen Appliances", branch: "Gollaprolu", amount: "₹10,990", amountNum: 10990, status: "pending", date: "2025-07-05", paymentMode: "upi" },
  { id: "ORD-011", customer: "Mohan Das", phone: "+91 98761 23456", product: "Recliner Chair", category: "Furniture", branch: "Achampeta (Kakinada)", amount: "₹18,499", amountNum: 18499, status: "delivered", date: "2025-07-04", paymentMode: "card" },
  { id: "ORD-012", customer: "Durga Prasad", phone: "+91 87651 23456", product: "Semi Auto Washer", category: "Washing Machines", branch: "Pithapuram", amount: "₹14,990", amountNum: 14990, status: "delivered", date: "2025-07-03", paymentMode: "cash" },
];

export const INITIAL_CUSTOMERS: Customer[] = [
  { id: "CUS-001", name: "Ravi Kumar", phone: "+91 98765 43210", email: "ravi@example.com", city: "Kakinada", branch: "Achampeta (Kakinada)", totalOrders: 3, totalSpend: "₹1,32,979", lastOrder: "2025-07-10", status: "active" },
  { id: "CUS-002", name: "Lakshmi Devi", phone: "+91 87654 32109", email: "lakshmi@example.com", city: "Pithapuram", branch: "Pithapuram", totalOrders: 2, totalSpend: "₹49,480", lastOrder: "2025-07-09", status: "active" },
  { id: "CUS-003", name: "Suresh Babu", phone: "+91 76543 21098", email: "suresh@example.com", city: "Peddapuram", branch: "Peddapuram", totalOrders: 4, totalSpend: "₹1,87,469", lastOrder: "2025-07-09", status: "active" },
  { id: "CUS-004", name: "Anitha S.", phone: "+91 65432 10987", email: "anitha@example.com", city: "Gollaprolu", branch: "Gollaprolu", totalOrders: 1, totalSpend: "₹1,29,990", lastOrder: "2025-07-08", status: "active" },
  { id: "CUS-005", name: "Vijay Reddy", phone: "+91 54321 09876", email: "vijay@example.com", city: "Kathipudi", branch: "Kathipudi", totalOrders: 2, totalSpend: "₹45,498", lastOrder: "2025-07-08", status: "active" },
  { id: "CUS-006", name: "Padma Rao", phone: "+91 43210 98765", email: "padma@example.com", city: "Kakinada", branch: "Achampeta (Kakinada)", totalOrders: 1, totalSpend: "₹28,999", lastOrder: "2025-07-07", status: "inactive" },
  { id: "CUS-007", name: "Krishna Murthy", phone: "+91 32109 87654", email: "krishna@example.com", city: "Pithapuram", branch: "Pithapuram", totalOrders: 3, totalSpend: "₹93,969", lastOrder: "2025-07-07", status: "active" },
  { id: "CUS-008", name: "Sita Devi", phone: "+91 21098 76543", email: "sita@example.com", city: "Peddapuram", branch: "Peddapuram", totalOrders: 2, totalSpend: "₹27,998", lastOrder: "2025-07-06", status: "active" },
];

export const INITIAL_GALLERY: GalleryItem[] = [
  { id: "GAL-001", title: "Showroom Interior", type: "image", url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", category: "Furniture", uploadedAt: "2025-07-01", featured: true },
  { id: "GAL-002", title: "Samsung TV Display", type: "image", url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400", category: "Televisions", uploadedAt: "2025-07-02", featured: false },
  { id: "GAL-003", title: "AC Demo Zone", type: "image", url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400", category: "Air Conditioners", uploadedAt: "2025-07-03", featured: true },
  { id: "GAL-004", title: "Pithapuram Branch", type: "image", url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400", category: "Branches", uploadedAt: "2025-07-04", featured: false },
  { id: "GAL-005", title: "Festival Sale Banner", type: "image", url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400", category: "Promotions", uploadedAt: "2025-07-05", featured: true },
  { id: "GAL-006", title: "Washing Machine Section", type: "image", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", category: "Washing Machines", uploadedAt: "2025-07-06", featured: false },
];

export const INITIAL_CAMPAIGNS: Campaign[] = [
  { id: "CMP-001", title: "Festival Sale Alert", message: "🎉 Big Festival Sale at SL SHOPEE! Up to 10% off on TVs & ACs. EMI available. Visit us today!", segment: "all", sentAt: "2025-07-05", status: "sent", recipients: 1240 },
  { id: "CMP-002", title: "New AC Models Available", message: "🌬️ New 2025 AC models now in stock at SL SHOPEE Pithapuram! Best brands, best prices.", segment: "branch", segmentValue: "Pithapuram", sentAt: "2025-07-08", status: "sent", recipients: 320 },
  { id: "CMP-003", title: "Smartphone Launch", message: "📱 Latest smartphones now available! 0% EMI for 6 months on select models.", segment: "category", segmentValue: "Smartphones", status: "draft", recipients: 0 },
];

export const INITIAL_NOTIFICATIONS: Notification[] = [
  { id: "NOT-001", title: "Order Confirmed", body: "Your order ORD-003 has been confirmed. Our team will contact you shortly.", type: "order", sentAt: "2025-07-09", status: "sent", recipients: 1 },
  { id: "NOT-002", title: "Festival Offers Live", body: "Festival discounts are now live across all branches. Shop now!", type: "promo", sentAt: "2025-07-05", status: "sent", recipients: 1240 },
  { id: "NOT-003", title: "New Product Alert", body: "New arrivals just dropped in. Check out our latest collection!", type: "general", status: "draft", recipients: 0 },
];

// Analytics data
export const MONTHLY_SALES = [
  { month: "Jan", revenue: 185000, orders: 14 },
  { month: "Feb", revenue: 210000, orders: 18 },
  { month: "Mar", revenue: 256000, orders: 21 },
  { month: "Apr", revenue: 198000, orders: 16 },
  { month: "May", revenue: 312000, orders: 25 },
  { month: "Jun", revenue: 289000, orders: 23 },
  { month: "Jul", revenue: 395000, orders: 30 },
];

export const CATEGORY_SALES = [
  { category: "Televisions", revenue: 310000, units: 8 },
  { category: "Air Conditioners", revenue: 236000, units: 6 },
  { category: "Washing Machines", revenue: 148000, units: 8 },
  { category: "Smartphones", revenue: 93000, units: 6 },
  { category: "Furniture", revenue: 95000, units: 5 },
  { category: "Kitchen Appliances", revenue: 52000, units: 6 },
];

export const BRANCH_SALES = BRANCHES.map((b, i) => ({
  branch: b.name.split(" ")[0],
  revenue: [198000, 156000, 134000, 112000, 95000][i],
  orders: [24, 18, 16, 14, 12][i],
}));
