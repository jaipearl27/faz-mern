import {
    v2 as cloudinary
} from "cloudinary";
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(files) {
    try {
        if (!files || files.length === 0) {
            throw new Error("No files provided");
        }

        // Ensure files is always an array
        const fileArray = Array.isArray(files) ? files : [files];
        console.log("Uploading files:", fileArray.length);

        const uploadedFiles = await Promise.all(
            fileArray.map(async (file) => {
                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const base64Image = buffer.toString("base64");
                const dataUri = `data:${file.type};base64,${base64Image}`;

                const uploadResponse = await cloudinary.uploader.upload(dataUri, {
                    folder: "nextjs_uploads",
                });

                return {
                    secure_url: uploadResponse.secure_url,
                    public_id: uploadResponse.public_id,
                    asset_id: uploadResponse.asset_id,
                };
            })
        );

        console.log("Uploaded Files:", uploadedFiles);
        return uploadedFiles;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw new Error("Image upload failed");
    }
}


/** utitlity functions to delete images if the product is removed */
export const deleteFileFromCloudinary = async (files) => {
    const publicIds = Array.isArray(files) ?
        files.map((file) => file.public_id) :
        [files.public_id];

    try {
        const deleteResults = await Promise.all(
            publicIds.map(async (publicId) => {
                try {
                    const result = await cloudinary.uploader.destroy(publicId);
                    console.log(
                        `File with public_id ${publicId} deleted from Cloudinary`
                    );
                    return {
                        publicId,
                        result
                    };
                } catch (error) {
                    console.error(
                        `Error deleting file with public_id: ${publicId}:`,
                        error
                    );
                    return {
                        publicId,
                        error: error.message || "Deletion failed"
                    };
                }
            })
        );
        console.log("Deleted Result: ", deleteResults);
        const failedDeletes = deleteResults.filter((res) => res.error);
        if (failedDeletes.length > 0) {
            console.log("Failded deletes Response: ", failedDeletes);
            return {
                success: false,
                message: "Some files failed to delete",
                failedDeletes,
            };
        }

        return {
            success: true,
            result: deleteResults
        };
    } catch (error) {
        console.error("Error during Cloudinary deletion process:", error);
        return {
            success: false,
            message: "Error during Cloudinary deletion",
            error: error.message,
        };
    }
};