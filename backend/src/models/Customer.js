import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, default: "" },
        city: { type: String, default: "" },
        branch: { type: String, default: "" },
        totalOrders: { type: Number, default: 0 },
        totalSpend: { type: String, default: "₹0" },
        lastOrder: { type: String, default: "" },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Customer", customerSchema, "users");
