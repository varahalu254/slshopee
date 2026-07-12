import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        customer: { type: String, required: true },
        phone: { type: String, required: true },
        product: { type: String, required: true },
        category: { type: String, default: "" },
        branch: { type: String, default: "" },
        amount: { type: String, required: true },
        amountNum: { type: Number, required: true },
        status: {
            type: String,
            enum: ["pending", "confirmed", "delivered", "cancelled"],
            default: "pending",
        },
        date: { type: String, required: true },
        paymentMode: {
            type: String,
            enum: ["cash", "emi", "upi", "card"],
            default: "cash",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
