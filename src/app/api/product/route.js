import { connectToDatabase } from "@/lib/Database";
import Products from "@/lib/Database/Model/Products"
import { uploadToCloudinary } from "@/lib/util/cloudinaryConfig"
import { NextResponse } from "next/server"

/** This is for creating a new product */
export async function POST(req) {
    try {
        const formData = await req.formData();
        const title = formData.get("title"); // Get title
        const bannerFiles = formData.getAll("banner"); // Get all banner files

        if (!title || bannerFiles.length === 0) {
            return NextResponse.json({
                message: "Missing required fields"
            }, {
                status: 400
            });
        }

        await connectToDatabase();

        // Upload images to Cloudinary
        const uploadedImages = await uploadToCloudinary(bannerFiles);

        const data = await Products.create({
            title,
            banner: uploadedImages, // Store array of uploaded images
        });

        if (data) {
            return NextResponse.json({
                message: "Product created successfully",
                data,
            }, {
                status: 201
            });
        } else {
            return NextResponse.json({
                message: "Something Failed"
            }, {
                status: 400
            });
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Server error",
            error: error.message
        }, {
            status: 500
        });
    }
}

