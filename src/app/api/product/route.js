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
        const categoryId = formData.get("category")
        const price = formData.get("price")
        const stock = formData.get("stock")

        if (!title || bannerFiles.length === 0 || !categoryId || !price || !stock ) {
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
            category: categoryId,
            price,
            stock,
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

export async function GET(req) {
    try {
        const {
            searchParams
        } = new URL(req.url);
        const categoryId = searchParams.get("categoryId");
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "10", 10); // Default: 10 items per page
         console.log("the data is", categoryId) 
        if (!categoryId) {
            return NextResponse.json({
                message: "Category ID is required"
            }, {
                status: 400
            });
        }

        // Pagination logic (skip items from previous pages)
        const skip = (page - 1) * limit;

        // Fetch products with pagination and selected fields only
        const products = await Products.find({
                category:categoryId
            })
            .select("title price stock banner") 
            .populate("category")
            .skip(skip)
            .limit(limit);

        // Get total product count for pagination metadata
        const totalProducts = await Products.countDocuments({
            category: categoryId
        });

        return NextResponse.json({
            products,
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            totalProducts,
            limit
        }, {
            status: 200
        });

    } catch (error) {
        return NextResponse.json({
            message: "Server error",
            error: error.message
        }, {
            status: 500
        });
    }
}