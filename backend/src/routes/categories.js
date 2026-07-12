import { Router } from "express";
import Category from "../models/Category.js";

const router = Router();

// GET /api/categories
router.get("/", async (_req, res) => {
    try {
        const categories = await Category.find().sort({ name: 1 });
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/categories
router.post("/", async (req, res) => {
    try {
        const { name, slug, status } = req.body;
        const finalSlug = slug || name.toLowerCase().replace(/\s+/g, "-");
        const category = await Category.create({ name, slug: finalSlug, status: status || "active" });
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /api/categories/:id
router.put("/:id", async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!category) return res.status(404).json({ error: "Category not found" });
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/categories/:id
router.delete("/:id", async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).json({ error: "Category not found" });
        res.json({ message: "Category deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
