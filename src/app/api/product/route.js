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
        const title = formData.get("title");
        const categoryId = formData.get("category");
        const price = formData.get("price");
        const stock = formData.get("stock");

        // Get files
        const bannerFiles = formData.getAll("banner");

        console.log("Files received in API:", bannerFiles);

        if (!title || !categoryId || !price || !stock || bannerFiles.length === 0) {
            return NextResponse.json({
                message: "Missing required fields"
            }, {
                status: 400
            });
        }

        await connectToDatabase();

        // Validate files
        const validFiles = bannerFiles.filter(file => file instanceof Blob || file instanceof File);
        if (validFiles.length === 0) {
            return NextResponse.json({
                message: "Invalid file format"
            }, {
                status: 400
            });
        }

        // Upload images
        const uploadedImages = await uploadToCloudinary(validFiles);

        // Save product
        const data = await Products.create({
            title,
            category: categoryId,
            price,
            stock,
            banner: uploadedImages, // Array of uploaded image URLs
        });

        return NextResponse.json({
            message: "Product created successfully",
            data
        }, {
            status: 201
        });
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
   
   
   
   const page = parseInt(searchParams.get("page") || "1", 10);
   const limit = parseInt(searchParams.get("limit") || "10", 10);
   const skip = (page - 1) * limit;


        const from = searchParams.get("from")
        if(from == "admin"){
            await connectToDatabase()
            const totalProducts = await Products.countDocuments();

            const data = await Products.find().skip(skip).limit(limit);
            console.log("the data before is", data)
            if(!data){
                return NextResponse.json({
                    message:"No Product found",
                    data:[]
                },{
                    status:400
                })
            }
            console.log("the product are", data)
            return NextResponse.json({
                message:"Product Found successfully",
                products: data,
                paginate: {
                    currentPage: page,
                    totalPage: Math.ceil(totalProducts / limit),
                    total:totalProducts,
                    limit:limit
                }
            },{
                status:201
            })
        }
        const categoryId = searchParams.get("categoryId");
       // Default: 10 items per page
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
export async function PATCH(req) {
    try {
        const formData = await req.formData();
        const productId = formData.get("id");

        if (!productId) {
            return NextResponse.json({
                message: "Product ID is required"
            }, {
                status: 400
            });
        }

        await connectToDatabase();

        // Find the existing product
        const existingProduct = await Products.findById(productId);
        console.log("the existing product is", existingProduct)
        if (!existingProduct) {
            return NextResponse.json({
                message: "Product not found"
            }, {
                status: 404
            });
        }

        // Get updated fields (only if they are provided)
        const title = formData.get("title") || existingProduct.title;
        const categoryId = formData.get("category") || existingProduct.category;
        const price = formData.get("price") || existingProduct.price;
        const stock = formData.get("stock") || existingProduct.stock;

        // Get files if provided
        const bannerFiles = formData.getAll("banner");
        let updatedBanners = existingProduct.banner; // Keep old banners if no new ones

        if (bannerFiles.length > 0) {
            const validFiles = bannerFiles.filter((file) => file instanceof Blob || file instanceof File);
            if (validFiles.length > 0) {
                updatedBanners = await uploadToCloudinary(validFiles);
            }
        }

        // Update product in database
        existingProduct.title = title;
        existingProduct.category = categoryId;
        existingProduct.price = price;
        existingProduct.stock = stock;
        existingProduct.banner = updatedBanners;

        await existingProduct.save();

        return NextResponse.json({
            message: "Product updated successfully",
            data: existingProduct,
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Server error",
            error: error.message,
        }, {
            status: 500
        });
    }
}

export async function DELETE(req){
    try {
        const { searchParams } = req.nextUrl
        const id = searchParams.get('id')

        if(!id){
            return NextResponse.json({
                message:"Id is not recieved"
            },{
                status:400
            })
        }
        await connectToDatabase()
        const data = await Products.findByIdAndDelete(id)
        if(!data){
           return NextResponse.json({
            message:"Failed to delete the product"
           },{
            status:400
           })            
        }
        return NextResponse.json({
            message:"Product deleted successfully"
        },{
            status:201
        })
    } catch (error) {
         return NextResponse.json({
            message:"Server error"
         },{
            status:500
         })       
     }
}