import { Router } from "express";
import Notification from "../models/Notification.js";

const router = Router();

// GET /api/notifications
router.get("/", async (_req, res) => {
    try {
        const notifications = await Notification.find().sort({ createdAt: -1 });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/notifications
router.post("/", async (req, res) => {
    try {
        const notification = await Notification.create(req.body);
        res.status(201).json(notification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /api/notifications/:id
router.put("/:id", async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!notification) return res.status(404).json({ error: "Notification not found" });
        res.json(notification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PATCH /api/notifications/:id/send   (mark as sent)
router.patch("/:id/send", async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) return res.status(404).json({ error: "Notification not found" });

        notification.status = "sent";
        notification.sentAt = new Date().toISOString().split("T")[0];
        if (!notification.recipients) notification.recipients = 1;

        await notification.save();
        res.json(notification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/notifications/:id
router.delete("/:id", async (req, res) => {
    try {
        const notification = await Notification.findByIdAndDelete(req.params.id);
        if (!notification) return res.status(404).json({ error: "Notification not found" });
        res.json({ message: "Notification deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
