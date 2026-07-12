import { Router } from "express";
import Product from "../models/Product.js";
import upload from "../config/multer.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../config/cloudinary.js";

const router = Router();

// GET /api/products
router.get("/", async (_req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/products/:id
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/products  (multipart: image file + JSON fields)
router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { name, brand, price, priceNum, category, stock, status } = req.body;
        let image = "";
        let imagePublicId = "";

        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer, "sl-shopee/products");
            image = result.secure_url;
            imagePublicId = result.public_id;
        }

        const product = await Product.create({
            name,
            brand,
            price,
            priceNum: Number(priceNum),
            category,
            image,
            imagePublicId,
            stock: Number(stock) || 0,
            status: status || "active",
        });

        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /api/products/:id
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });

        const { name, brand, price, priceNum, category, stock, status } = req.body;

        if (req.file) {
            // Delete old image from Cloudinary if it exists
            if (product.imagePublicId) {
                await deleteFromCloudinary(product.imagePublicId);
            }
            const result = await uploadToCloudinary(req.file.buffer, "sl-shopee/products");
            product.image = result.secure_url;
            product.imagePublicId = result.public_id;
        }

        if (name !== undefined) product.name = name;
        if (brand !== undefined) product.brand = brand;
        if (price !== undefined) product.price = price;
        if (priceNum !== undefined) product.priceNum = Number(priceNum);
        if (category !== undefined) product.category = category;
        if (stock !== undefined) product.stock = Number(stock);
        if (status !== undefined) product.status = status;

        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/products/:id
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });

        // Delete image from Cloudinary
        if (product.imagePublicId) {
            await deleteFromCloudinary(product.imagePublicId);
        }

        await product.deleteOne();
        res.json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
