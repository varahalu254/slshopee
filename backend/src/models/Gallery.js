import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        type: { type: String, enum: ["image", "video"], default: "image" },
        url: { type: String, required: true },              // Cloudinary URL
        imagePublicId: { type: String, default: "" },        // for Cloudinary deletion
        category: { type: String, default: "" },
        uploadedAt: { type: String, default: () => new Date().toISOString().split("T")[0] },
        featured: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);
