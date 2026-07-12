import { Router } from "express";
import Campaign from "../models/Campaign.js";

const router = Router();

// GET /api/campaigns
router.get("/", async (_req, res) => {
    try {
        const campaigns = await Campaign.find().sort({ createdAt: -1 });
        res.json(campaigns);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/campaigns
router.post("/", async (req, res) => {
    try {
        const campaign = await Campaign.create(req.body);
        res.status(201).json(campaign);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /api/campaigns/:id
router.put("/:id", async (req, res) => {
    try {
        const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!campaign) return res.status(404).json({ error: "Campaign not found" });
        res.json(campaign);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PATCH /api/campaigns/:id/send   (mark as sent)
router.patch("/:id/send", async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        if (!campaign) return res.status(404).json({ error: "Campaign not found" });

        campaign.status = "sent";
        campaign.sentAt = new Date().toISOString().split("T")[0];
        // Estimate recipients based on segment
        if (campaign.segment === "all") campaign.recipients = 1240;
        else if (campaign.segment === "branch") campaign.recipients = 320;
        else campaign.recipients = 180;

        await campaign.save();
        res.json(campaign);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/campaigns/:id
router.delete("/:id", async (req, res) => {
    try {
        const campaign = await Campaign.findByIdAndDelete(req.params.id);
        if (!campaign) return res.status(404).json({ error: "Campaign not found" });
        res.json({ message: "Campaign deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
