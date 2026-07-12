import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        type: {
            type: String,
            enum: ["promo", "order", "general"],
            default: "general",
        },
        sentAt: { type: String, default: "" },
        status: {
            type: String,
            enum: ["draft", "sent"],
            default: "draft",
        },
        recipients: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
