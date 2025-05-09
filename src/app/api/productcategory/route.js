import {
    connectToDatabase
} from "@/lib/Database";
import ProductCategory from "@/lib/Database/Model/ProductCategory";
 import {
    uploadToCloudinary
} from "@/lib/util/cloudinaryConfig"
import {
    NextResponse
} from "next/server"

/** This is for creating a new product */
export async function POST(req) {
    try {
        const formData = await req.formData();
        const title = formData.get("title"); // Get title
        const bannerFiles = formData.getAll("banner"); // Get all banner files
        const slug = formData.get("slug")
        const shortDescription = formData.get("shortDescription")
        if (!title || bannerFiles.length === 0 || !slug || !shortDescription) {
            return NextResponse.json({
                message: "Missing required fields"
            }, {
                status: 400
            });
        }

        await connectToDatabase();

        // Upload images to Cloudinary
        const uploadedImages = await uploadToCloudinary(bannerFiles);

        const data = await ProductCategory.create({
            title,
            slug,
            shortDescription,
            banner: uploadedImages, // Store array of uploaded images
        });

        if (data) {
            return NextResponse.json({
                message: "Product Category created successfully",
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



export async function GET(req){
    try {
        const { searchParams } = new URL(req.url)

        const page = parseInt(searchParams.get("page") || "1",10)
        const limit = parseInt(searchParams.get("limit") || "10", 10)

        // logic to skip items from the previous pages
        const skip = (page-1)*limit

        await connectToDatabase()
         const data = await ProductCategory.find().skip(skip).limit(limit)
         if (!data) {
             return NextResponse.json({
                 message: "No Data is found"
             }, {
                 status: 404
             });
         }
         const totalProductCategories = await ProductCategory.countDocuments()
         return NextResponse.json({
             message: "Data is found1",
             data: data,
             pagination:{
                currentPage: page,
                totalPage:Math.ceil(totalProductCategories/limit),
                total:totalProductCategories,
                limit:limit
            }
         }, {
             status: 201
         });
    } catch (error) {
        return NextResponse.json({
             message: "Something Failed",
             error: error.message
         }, {
             status: 500
         });
    }
 
}

export async function PATCH(req){
 try {
    const formData = await req.formData();
    const id= formData.get("id")

    if (!id) {
       return NextResponse.json({
           message: "Category ID is required"
       }, {
           status: 400
       });
    }
    await connectToDatabase()

    const existingCategory = await ProductCategory.findById(id)
    if (!existingCategory) {
        return NextResponse.json({
            message:"Category not found"
        },{status:404})
    }
     const title = formData.get("title")
    const slug = formData.get("slug")
    const shortDescription = formData.get("shortDescription")
    let updatedBanners = existingCategory.banner; // Keep old banners if no new ones
 const bannerfiles = formData.getAll("banner")
     if (bannerfiles.length > 0) {
         const validFiles = bannerfiles.filter((file) => file instanceof Blob || file instanceof File);
         if (validFiles.length > 0) {
             updatedBanners = await uploadToCloudinary(validFiles);
         }
     }

     existingCategory.title = title
     existingCategory.slug = slug
     existingCategory.shortDescription = shortDescription
     existingCategory.banner = updatedBanners

     existingCategory.save()
     return NextResponse.json({
        message:"Category updated successfully",
        data: existingCategory
     },{
        status: 200
     })
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
        const id= searchParams.get("id")

        if(!id){
            return NextResponse.json({
                message:"Resource is not sent"
            }, {
                status:400
            })
        }
        await connectToDatabase()
        const data = await ProductCategory.findByIdAndDelete(id)
        if(!data){
            return NextResponse.json({
                message:"Unable to delete the Category"
            },{
                status: 401
            })
        }
        return NextResponse.json({
            message:"Successfully Deleted the Category"
        },{
            status:201
        })
    } catch (error) {
        return NextResponse.json({
            message:"Something went wrong"
        },{
            status:500
        })
    }
}