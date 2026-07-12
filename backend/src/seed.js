/**
 * Seed script — populates the database with initial data matching
 * the frontend's mock data in admin-data.ts / site-data.ts.
 *
 * Usage:  npm run seed
 */
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import Category from "./models/Category.js";
import Order from "./models/Order.js";
import Customer from "./models/Customer.js";
import Gallery from "./models/Gallery.js";
import Campaign from "./models/Campaign.js";
import Notification from "./models/Notification.js";

// ── Seed data (mirrors frontend/src/lib/admin-data.ts + site-data.ts) ───

const CATEGORIES_SEED = [
    "Televisions", "Smartphones", "Furniture", "Air Conditioners",
    "Washing Machines", "Air Coolers", "Water Purifiers",
    "Kitchen Appliances", "Microwave Ovens", "Rice Cookers", "Fans", "Kettles",
];

const PRODUCTS_SEED = [
    { name: "4K Ultra HD Smart TV", brand: "Samsung", price: "₹49,990", priceNum: 49990, category: "Televisions" },
    { name: "OLED Bravia TV", brand: "Sony", price: "₹1,29,990", priceNum: 129990, category: "Televisions" },
    { name: "Smartphone Pro 5G", brand: "Vivo", price: "₹32,999", priceNum: 32999, category: "Smartphones" },
    { name: "Realme Note 60", brand: "Realme", price: "₹12,499", priceNum: 12499, category: "Smartphones" },
    { name: "Front Load Washing Machine", brand: "IFB", price: "₹34,490", priceNum: 34490, category: "Washing Machines" },
    { name: "Semi Auto Washer", brand: "Whirlpool", price: "₹14,990", priceNum: 14990, category: "Washing Machines" },
    { name: "1.5 Ton Split AC 5-Star", brand: "LG", price: "₹41,990", priceNum: 41990, category: "Air Conditioners" },
    { name: "Inverter Split AC", brand: "Haier", price: "₹36,490", priceNum: 36490, category: "Air Conditioners" },
    { name: "L-Shape Fabric Sofa", brand: "SL Shopee", price: "₹28,999", priceNum: 28999, category: "Furniture" },
    { name: "Recliner Chair", brand: "SL Shopee", price: "₹18,499", priceNum: 18499, category: "Furniture" },
    { name: "RO+UV Water Purifier", brand: "Kent", price: "₹13,999", priceNum: 13999, category: "Water Purifiers" },
    { name: "Convection Microwave", brand: "Panasonic", price: "₹10,990", priceNum: 10990, category: "Kitchen Appliances" },
];

const ORDERS_SEED = [
    { customer: "Ravi Kumar", phone: "+91 98765 43210", product: "4K Ultra HD Smart TV", category: "Televisions", branch: "Achampeta (Kakinada)", amount: "₹49,990", amountNum: 49990, status: "delivered", date: "2025-07-10", paymentMode: "emi" },
    { customer: "Lakshmi Devi", phone: "+91 87654 32109", product: "Front Load Washing Machine", category: "Washing Machines", branch: "Pithapuram", amount: "₹34,490", amountNum: 34490, status: "delivered", date: "2025-07-09", paymentMode: "card" },
    { customer: "Suresh Babu", phone: "+91 76543 21098", product: "1.5 Ton Split AC 5-Star", category: "Air Conditioners", branch: "Peddapuram", amount: "₹41,990", amountNum: 41990, status: "confirmed", date: "2025-07-09", paymentMode: "cash" },
    { customer: "Anitha S.", phone: "+91 65432 10987", product: "OLED Bravia TV", category: "Televisions", branch: "Gollaprolu", amount: "₹1,29,990", amountNum: 129990, status: "pending", date: "2025-07-08", paymentMode: "emi" },
    { customer: "Vijay Reddy", phone: "+91 54321 09876", product: "Smartphone Pro 5G", category: "Smartphones", branch: "Kathipudi", amount: "₹32,999", amountNum: 32999, status: "delivered", date: "2025-07-08", paymentMode: "upi" },
    { customer: "Padma Rao", phone: "+91 43210 98765", product: "L-Shape Fabric Sofa", category: "Furniture", branch: "Achampeta (Kakinada)", amount: "₹28,999", amountNum: 28999, status: "cancelled", date: "2025-07-07", paymentMode: "card" },
    { customer: "Krishna Murthy", phone: "+91 32109 87654", product: "Inverter Split AC", category: "Air Conditioners", branch: "Pithapuram", amount: "₹36,490", amountNum: 36490, status: "confirmed", date: "2025-07-07", paymentMode: "emi" },
    { customer: "Sita Devi", phone: "+91 21098 76543", product: "RO+UV Water Purifier", category: "Water Purifiers", branch: "Peddapuram", amount: "₹13,999", amountNum: 13999, status: "delivered", date: "2025-07-06", paymentMode: "upi" },
    { customer: "Ramesh K.", phone: "+91 10987 65432", product: "Realme Note 60", category: "Smartphones", branch: "Kathipudi", amount: "₹12,499", amountNum: 12499, status: "delivered", date: "2025-07-06", paymentMode: "cash" },
    { customer: "Usha Rani", phone: "+91 09876 54321", product: "Convection Microwave", category: "Kitchen Appliances", branch: "Gollaprolu", amount: "₹10,990", amountNum: 10990, status: "pending", date: "2025-07-05", paymentMode: "upi" },
    { customer: "Mohan Das", phone: "+91 98761 23456", product: "Recliner Chair", category: "Furniture", branch: "Achampeta (Kakinada)", amount: "₹18,499", amountNum: 18499, status: "delivered", date: "2025-07-04", paymentMode: "card" },
    { customer: "Durga Prasad", phone: "+91 87651 23456", product: "Semi Auto Washer", category: "Washing Machines", branch: "Pithapuram", amount: "₹14,990", amountNum: 14990, status: "delivered", date: "2025-07-03", paymentMode: "cash" },
];

const CUSTOMERS_SEED = [
    { name: "Ravi Kumar", phone: "+91 98765 43210", email: "ravi@example.com", city: "Kakinada", branch: "Achampeta (Kakinada)", totalOrders: 3, totalSpend: "₹1,32,979", lastOrder: "2025-07-10", status: "active" },
    { name: "Lakshmi Devi", phone: "+91 87654 32109", email: "lakshmi@example.com", city: "Pithapuram", branch: "Pithapuram", totalOrders: 2, totalSpend: "₹49,480", lastOrder: "2025-07-09", status: "active" },
    { name: "Suresh Babu", phone: "+91 76543 21098", email: "suresh@example.com", city: "Peddapuram", branch: "Peddapuram", totalOrders: 4, totalSpend: "₹1,87,469", lastOrder: "2025-07-09", status: "active" },
    { name: "Anitha S.", phone: "+91 65432 10987", email: "anitha@example.com", city: "Gollaprolu", branch: "Gollaprolu", totalOrders: 1, totalSpend: "₹1,29,990", lastOrder: "2025-07-08", status: "active" },
    { name: "Vijay Reddy", phone: "+91 54321 09876", email: "vijay@example.com", city: "Kathipudi", branch: "Kathipudi", totalOrders: 2, totalSpend: "₹45,498", lastOrder: "2025-07-08", status: "active" },
    { name: "Padma Rao", phone: "+91 43210 98765", email: "padma@example.com", city: "Kakinada", branch: "Achampeta (Kakinada)", totalOrders: 1, totalSpend: "₹28,999", lastOrder: "2025-07-07", status: "inactive" },
    { name: "Krishna Murthy", phone: "+91 32109 87654", email: "krishna@example.com", city: "Pithapuram", branch: "Pithapuram", totalOrders: 3, totalSpend: "₹93,969", lastOrder: "2025-07-07", status: "active" },
    { name: "Sita Devi", phone: "+91 21098 76543", email: "sita@example.com", city: "Peddapuram", branch: "Peddapuram", totalOrders: 2, totalSpend: "₹27,998", lastOrder: "2025-07-06", status: "active" },
];

const GALLERY_SEED = [
    { title: "Showroom Interior", type: "image", url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", category: "Furniture", uploadedAt: "2025-07-01", featured: true },
    { title: "Samsung TV Display", type: "image", url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400", category: "Televisions", uploadedAt: "2025-07-02", featured: false },
    { title: "AC Demo Zone", type: "image", url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400", category: "Air Conditioners", uploadedAt: "2025-07-03", featured: true },
    { title: "Pithapuram Branch", type: "image", url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400", category: "Branches", uploadedAt: "2025-07-04", featured: false },
    { title: "Festival Sale Banner", type: "image", url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400", category: "Promotions", uploadedAt: "2025-07-05", featured: true },
    { title: "Washing Machine Section", type: "image", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", category: "Washing Machines", uploadedAt: "2025-07-06", featured: false },
];

const CAMPAIGNS_SEED = [
    { title: "Festival Sale Alert", message: "🎉 Big Festival Sale at SL SHOPEE! Up to 10% off on TVs & ACs. EMI available. Visit us today!", segment: "all", sentAt: "2025-07-05", status: "sent", recipients: 1240 },
    { title: "New AC Models Available", message: "🌬️ New 2025 AC models now in stock at SL SHOPEE Pithapuram! Best brands, best prices.", segment: "branch", segmentValue: "Pithapuram", sentAt: "2025-07-08", status: "sent", recipients: 320 },
    { title: "Smartphone Launch", message: "📱 Latest smartphones now available! 0% EMI for 6 months on select models.", segment: "category", segmentValue: "Smartphones", status: "draft", recipients: 0 },
];

const NOTIFICATIONS_SEED = [
    { title: "Order Confirmed", body: "Your order ORD-003 has been confirmed. Our team will contact you shortly.", type: "order", sentAt: "2025-07-09", status: "sent", recipients: 1 },
    { title: "Festival Offers Live", body: "Festival discounts are now live across all branches. Shop now!", type: "promo", sentAt: "2025-07-05", status: "sent", recipients: 1240 },
    { title: "New Product Alert", body: "New arrivals just dropped in. Check out our latest collection!", type: "general", status: "draft", recipients: 0 },
];

// ── Seed runner ──────────────────────────────────────────────────────────

async function seed() {
    await connectDB();

    console.log("🗑️  Clearing existing data...");
    await Promise.all([
        Product.deleteMany({}),
        Category.deleteMany({}),
        Order.deleteMany({}),
        Customer.deleteMany({}),
        Gallery.deleteMany({}),
        Campaign.deleteMany({}),
        Notification.deleteMany({}),
    ]);

    console.log("📦 Seeding Categories...");
    const productCounts = {};
    PRODUCTS_SEED.forEach((p) => {
        productCounts[p.category] = (productCounts[p.category] || 0) + 1;
    });
    await Category.insertMany(
        CATEGORIES_SEED.map((name) => ({
            name,
            slug: name.toLowerCase().replace(/\s+/g, "-"),
            productCount: productCounts[name] || 0,
            status: "active",
        }))
    );

    console.log("📦 Seeding Products...");
    await Product.insertMany(
        PRODUCTS_SEED.map((p, i) => ({
            ...p,
            image: "",
            imagePublicId: "",
            stock: Math.floor(Math.random() * 40) + 5,
            status: i < 10 ? "active" : "inactive",
        }))
    );

    console.log("📦 Seeding Orders...");
    await Order.insertMany(ORDERS_SEED);

    console.log("📦 Seeding Customers...");
    await Customer.insertMany(CUSTOMERS_SEED);

    console.log("📦 Seeding Gallery...");
    await Gallery.insertMany(GALLERY_SEED);

    console.log("📦 Seeding Campaigns...");
    await Campaign.insertMany(CAMPAIGNS_SEED);

    console.log("📦 Seeding Notifications...");
    await Notification.insertMany(NOTIFICATIONS_SEED);

    console.log("✅ Database seeded successfully!");
    await mongoose.disconnect();
    process.exit(0);
}

seed().catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
});
