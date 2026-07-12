import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload a buffer to Cloudinary
 * @param {Buffer} buffer - file buffer from multer
 * @param {string} folder - Cloudinary folder path  e.g. "sl-shopee/gallery"
 * @param {string} [publicId] - optional custom public_id
 * @returns {Promise<import("cloudinary").UploadApiResponse>}
 */
export function uploadToCloudinary(buffer, folder, publicId) {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                public_id: publicId,
                resource_type: "image",
                overwrite: true,
                transformation: [{ quality: "auto", fetch_format: "auto" }],
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );
        stream.end(buffer);
    });
}

/**
 * Delete a Cloudinary image by its public_id
 * @param {string} publicId
 */
export async function deleteFromCloudinary(publicId) {
    return cloudinary.uploader.destroy(publicId);
}

export default cloudinary;
