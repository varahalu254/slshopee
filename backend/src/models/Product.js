import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: String, required: true },          // formatted e.g. "₹49,990"
        priceNum: { type: Number, required: true },
        category: { type: String, required: true },
        image: { type: String, default: "" },              // Cloudinary URL
        imagePublicId: { type: String, default: "" },      // Cloudinary public_id for deletion
        stock: { type: Number, default: 0 },
        status: {
            type: String,
            enum: ["active", "inactive", "out_of_stock"],
            default: "active",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);
