import { Router } from "express";
import Gallery from "../models/Gallery.js";
import upload from "../config/multer.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../config/cloudinary.js";

const router = Router();

// GET /api/gallery
router.get("/", async (_req, res) => {
    try {
        const items = await Gallery.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/gallery   (multipart: image file + JSON fields)
router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { title, category, featured } = req.body;
        let url = "";
        let imagePublicId = "";

        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer, "sl-shopee/gallery");
            url = result.secure_url;
            imagePublicId = result.public_id;
        } else if (req.body.url) {
            // Allow passing a URL directly (fallback)
            url = req.body.url;
        }

        if (!url) {
            return res.status(400).json({ error: "Image file or URL is required" });
        }

        const item = await Gallery.create({
            title,
            url,
            imagePublicId,
            category: category || "",
            featured: featured === "true" || featured === true,
            uploadedAt: new Date().toISOString().split("T")[0],
        });

        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /api/gallery/:id
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
        const item = await Gallery.findById(req.params.id);
        if (!item) return res.status(404).json({ error: "Gallery item not found" });

        const { title, category, featured } = req.body;

        if (req.file) {
            // Delete old image from Cloudinary
            if (item.imagePublicId) {
                await deleteFromCloudinary(item.imagePublicId);
            }
            const result = await uploadToCloudinary(req.file.buffer, "sl-shopee/gallery");
            item.url = result.secure_url;
            item.imagePublicId = result.public_id;
        }

        if (title !== undefined) item.title = title;
        if (category !== undefined) item.category = category;
        if (featured !== undefined) item.featured = featured === "true" || featured === true;

        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PATCH /api/gallery/:id/featured   (toggle featured)
router.patch("/:id/featured", async (req, res) => {
    try {
        const item = await Gallery.findById(req.params.id);
        if (!item) return res.status(404).json({ error: "Gallery item not found" });

        item.featured = !item.featured;
        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/gallery/:id
router.delete("/:id", async (req, res) => {
    try {
        const item = await Gallery.findById(req.params.id);
        if (!item) return res.status(404).json({ error: "Gallery item not found" });

        // Delete image from Cloudinary
        if (item.imagePublicId) {
            await deleteFromCloudinary(item.imagePublicId);
        }

        await item.deleteOne();
        res.json({ message: "Gallery item deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
