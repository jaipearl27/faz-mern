import {
    v2 as cloudinary
} from "cloudinary";

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload files to Cloudinary
 * @param {File[] | File} files - Single or multiple files to upload
 * @returns {Promise<Object[]>} - Array of uploaded file details
 */
export async function uploadToCloudinary(files) {
    try {
        if (!files || (Array.isArray(files) && files.length === 0)) {
            throw new Error("No files provided for upload.");
        }

        // Convert single file input into an array
        const fileArray = Array.isArray(files) ? files : [files];

        console.log(`Uploading ${fileArray.length} file(s) to Cloudinary...`);

        const uploadedFiles = await Promise.all(
            fileArray.map(async (file) => {
                if (!(file instanceof Blob || file instanceof File)) {
                    console.error("Invalid file type:", file);
                    throw new Error("Invalid file type. Expected a Blob or File.");
                }

                // Convert file to base64
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const base64Image = buffer.toString("base64");
                const dataUri = `data:${file.type};base64,${base64Image}`;

                // Upload to Cloudinary
                const uploadResponse = await cloudinary.uploader.upload(dataUri, {
                    folder: "nextjs_uploads",
                    resource_type: "auto", // Auto-detect file type
                });

                return {
                    secure_url: uploadResponse.secure_url,
                    public_id: uploadResponse.public_id,
                    asset_id: uploadResponse.asset_id,
                };
            })
        );

        console.log("Upload successful:", uploadedFiles);
        return uploadedFiles;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error.message || error);
        throw new Error("Image upload failed. Please try again.");
    }
}

/**
 * Delete files from Cloudinary
 * @param {Object[] | Object} files - File objects containing public_id(s)
 * @returns {Promise<Object>} - Result of deletion process
 */
export async function deleteFileFromCloudinary(files) {
    try {
        if (!files) {
            throw new Error("No files provided for deletion.");
        }

        // Extract public_ids
        const publicIds = Array.isArray(files) ?
            files.map((file) => file.public_id) :
            [files.public_id];

        console.log(`Attempting to delete ${publicIds.length} file(s) from Cloudinary...`);

        const deleteResults = await Promise.all(
            publicIds.map(async (publicId) => {
                try {
                    const result = await cloudinary.uploader.destroy(publicId);
                    console.log(`Successfully deleted: ${publicId}`);
                    return {
                        publicId,
                        result
                    };
                } catch (error) {
                    console.error(`Error deleting ${publicId}:`, error);
                    return {
                        publicId,
                        error: error.message || "Deletion failed"
                    };
                }
            })
        );

        console.log("Deletion results:", deleteResults);

        // Check for failed deletions
        const failedDeletes = deleteResults.filter((res) => res.error);
        if (failedDeletes.length > 0) {
            return {
                success: false,
                message: "Some files failed to delete.",
                failedDeletes,
            };
        }

        return {
            success: true,
            result: deleteResults
        };
    } catch (error) {
        console.error("Cloudinary Deletion Error:", error.message || error);
        return {
            success: false,
            message: "Error during Cloudinary deletion.",
            error: error.message,
        };
    }
}
