import { connectToDatabase } from "@/lib/Database";
import Products from "@/lib/Database/Model/Products"
import { uploadToCloudinary } from "@/lib/util/cloudinaryConfig"
import { NextResponse } from "next/server"
import mongoose from "mongoose";
import ProductCategory from "@/lib/Database/Model/ProductCategory";
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
        const sortOrder = searchParams.get("sort") || 'asc'
        const minPrice = parseFloat(searchParams.get("minPrice") || "0");
        const maxPrice = parseFloat(searchParams.get("maxPrice") || "100000");
        await connectToDatabase()

        console.log("all the filters are", categoryId, page, limit, sortOrder, minPrice, maxPrice)
        if (!categoryId) {
            return NextResponse.json({
                message: "Category ID is required"
            }, {
                status: 400
            });
        }
        const categoryFilter = mongoose.Types.ObjectId.isValid(categoryId) ?
            new mongoose.Types.ObjectId(categoryId) :
            null;

        if (!categoryFilter) {
            return NextResponse.json({
                message: "Invalid Category ID"
            }, {
                status: 400
            });
        }    
const testProduct = await Products.findOne({
    category: categoryFilter
});
console.log("Test product found:", testProduct);

        // Pagination logic (skip items from previous pages)
        const skip = (page - 1) * limit;

      /** for finding the category details */
      const categorieData = await ProductCategory.find({_id:categoryId})
      
        // Fetch products with pagination and selected fields only
        const products = await Products.aggregate([
            {
                $match: {
                    category: categoryFilter,
                    price: {
                        $gte: minPrice,
                        $lte: maxPrice
                    }
                }
            }, // Filter by category and price range
            // {
            //     $lookup: {
            //         from: "productcategories",  
            //         localField: "category",
            //         foreignField: "_id",  
            //         as: "categoryDetails"
            //     }
            // },
            {
                $sort: {
                    price: sortOrder === "asc" ? 1 : -1
                }
            }, // Sort by price
            {
                $skip: skip
            }, // Pagination: Skip previous pages
            {
                $limit: limit
            }, // Limit per page
            {
                $project: {
                    title: 1,
                    price: 1,
                    stock: 1,
                    banner: 1,
                    category: 1,
                    // categoryDetails:1
                }
            }
        ])
           
console.log("the products are", products)
        // Get total product count for pagination metadata
        const totalProducts = await Products.countDocuments({
                  category: categoryId,
                  price: {
                          $gte: minPrice,
                        //   $lte: maxPrice
                      }
        });

        return NextResponse.json({
            products,
            categorieData,
            paginate:{
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            totalProducts,
            limit
        }
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