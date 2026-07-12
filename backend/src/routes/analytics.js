import { Router } from "express";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import Customer from "../models/Customer.js";

const router = Router();

// GET /api/analytics/dashboard
router.get("/dashboard", async (_req, res) => {
    try {
        const [productCount, orderCount, customerCount] = await Promise.all([
            Product.countDocuments(),
            Order.countDocuments(),
            Customer.countDocuments(),
        ]);

        const orders = await Order.find();
        const totalRevenue = orders
            .filter((o) => o.status !== "cancelled")
            .reduce((sum, o) => sum + o.amountNum, 0);

        const statusBreakdown = {
            pending: orders.filter((o) => o.status === "pending").length,
            confirmed: orders.filter((o) => o.status === "confirmed").length,
            delivered: orders.filter((o) => o.status === "delivered").length,
            cancelled: orders.filter((o) => o.status === "cancelled").length,
        };

        // Category-wise revenue
        const categoryMap = {};
        for (const o of orders) {
            if (o.status === "cancelled") continue;
            if (!categoryMap[o.category]) categoryMap[o.category] = { revenue: 0, units: 0 };
            categoryMap[o.category].revenue += o.amountNum;
            categoryMap[o.category].units += 1;
        }
        const categorySales = Object.entries(categoryMap).map(([category, data]) => ({
            category,
            ...data,
        }));

        // Branch-wise revenue
        const branchMap = {};
        for (const o of orders) {
            if (o.status === "cancelled") continue;
            if (!branchMap[o.branch]) branchMap[o.branch] = { revenue: 0, orders: 0 };
            branchMap[o.branch].revenue += o.amountNum;
            branchMap[o.branch].orders += 1;
        }
        const branchSales = Object.entries(branchMap).map(([branch, data]) => ({
            branch: branch.split(" ")[0],
            ...data,
        }));

        res.json({
            productCount,
            orderCount,
            customerCount,
            totalRevenue,
            statusBreakdown,
            categorySales,
            branchSales,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
