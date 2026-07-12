import { Router } from "express";
import Customer from "../models/Customer.js";

const router = Router();

// GET /api/customers
router.get("/", async (_req, res) => {
    try {
        const customers = await Customer.find().sort({ createdAt: -1 });
        res.json(customers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/customers/:id
router.get("/:id", async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ error: "Customer not found" });
        res.json(customer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/customers
router.post("/", async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /api/customers/:id
router.put("/:id", async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!customer) return res.status(404).json({ error: "Customer not found" });
        res.json(customer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/customers/:id
router.delete("/:id", async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) return res.status(404).json({ error: "Customer not found" });
        res.json({ message: "Customer deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
