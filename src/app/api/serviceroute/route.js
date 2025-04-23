import { connectToDatabase } from "@/lib/Database";
import Services from "@/lib/Database/Model/serviceModel";
import { uploadToCloudinary } from "@/lib/util/cloudinaryConfig";
 import { NextResponse } from "next/server";

export async function POST(req) {
try {
    const formData = await req.formData()
    console.log("requested formdata is", formData)
    const title = formData.get("title")
    const description = formData.get("description")

    const bannerFiles = formData.getAll("banner")
       if (!title || bannerFiles.length === 0 || !description) {
               return NextResponse.json({
                   message: "Missing required fields"
               }, {
                   status: 400
               });
           }
           await connectToDatabase()
           const validFiles = bannerFiles.filter(file => file instanceof Blob || file instanceof File);
            if (validFiles.length === 0) {
                       return NextResponse.json({
                           message: "Invalid file format"
                       }, {
                           status: 400
                       });
                   }
            const uploadedImages = await uploadToCloudinary(validFiles);
           
    const data = await Services.create({
        title,
        description,
        banner: uploadedImages
    })
    
    return NextResponse.json({
        message: "Service created successfully",
        data
    }, {
        status: 201
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


export async function GET(req){
    try {
         const { searchParams } = new URL(req.url)
           const page = parseInt(searchParams.get("page") || "1", 10)
           const limit = parseInt(searchParams.get("limit") || "10", 10)

           // logic to skip items from the previous pages
           const skip = (page - 1) * limit

           await connectToDatabase()
           const data = await Services.find().skip(skip).limit(limit)
           if(!data){
             return NextResponse.json({
                 message: "No Data is found"
             }, {
                 status: 404
             });
           }
         const totalProductCategories = await Services.countDocuments()
         return NextResponse.json({
            message:"Data is found",
            data:data,
            pagination:{
            currentPage:page,
            totalPage: Math.ceil(totalProductCategories/limit),
            total:totalProductCategories,
            limit}
         },{
            status:201
         })
        } catch (error) {
        return NextResponse.json({
              message: "Something Failed",
              error: error.message
        },{
            status:500
        });
    }
}


export async function PATCH(req){
    try {
        const formData =await req.formData()
        const serviceid = formData.get("id")
        
        if(!serviceid){
            return NextResponse.json({
                message:"No Id Provided Try again"
            },{
                status:400
            })
        }

        await connectToDatabase()
        const existingProduct = await Services.findById(serviceid);
        if (!existingProduct) {
            return NextResponse.json({
                message: "Product not found"
            }, {
                status: 404
            });
        }
         const title = formData.get("title")
         const description = formData.get("description")

         const bannerFiles = formData.getAll("banner")
         let updatedBanners = existingProduct.banner;
         if (bannerFiles.length > 0) {
             const validFiles = bannerFiles.filter((file) => file instanceof Blob || file instanceof File);
             if (validFiles.length > 0) {
                 updatedBanners = await uploadToCloudinary(validFiles);
             }
         }
 
      existingProduct.title = title
      existingProduct.description = description
      existingProduct.banner = updatedBanners

      await existingProduct.save();
      
      return NextResponse.json({
        message:"Service Updated successfully",
        data: existingProduct
      },{
        status:200
      })


    } catch (error) {
        console.log("Error is", error)
        return NextResponse.json({
            message:"Internal erro",
            error: error
        },{
            status:500
        })
    }
}


export async function DELETE(req){
    try {
        const { searchParams } = req.nextUrl
        const id = searchParams.get("id")
        console.log("the id recieved in")
        if(!id){
            return NextResponse.json({
                message:"Id not recieved"
            },{
                status:400
            })
        }
        await connectToDatabase()
        const data = await Services.findByIdAndDelete(id)

        if(!data){
            return NextResponse.json({
                message:"Failed to delete the Service"
            })
        }
        return NextResponse.json({
            message:"Successfully Deleted the Service"
        },{
            status:201
        })
    } catch (error) {
         return NextResponse.json({
            message:"Something went wrong",
            error:error
         },{           
            status:500
         })        
    }
}