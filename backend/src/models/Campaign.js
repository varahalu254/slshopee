import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        message: { type: String, required: true },
        segment: {
            type: String,
            enum: ["all", "branch", "category"],
            default: "all",
        },
        segmentValue: { type: String, default: "" },
        sentAt: { type: String, default: "" },
        status: {
            type: String,
            enum: ["draft", "sent", "scheduled"],
            default: "draft",
        },
        recipients: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export default mongoose.model("Campaign", campaignSchema);
