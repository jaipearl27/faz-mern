import mongoose from "mongoose";
 
const ProductCategorySchema = new mongoose.Schema({
    title:{
        type:String, required: true,
        trim: true,
        minlength: [3, 'Title must be at least 3 characters'],
        maxlength: [100, 'Title cannot exceed 100 characters'] 
    },
    slug:{type: String, required: true},
    shortDescription:{
        type: String, required: true
    },
    /** will add this later once checkout on how to upload to cloudinary */
    banner:[
      {  
        secure_url:{type:String},
        public_id:{type:String},
        asset_id:{type: String} 
      }
    ],
}, 
{
    timestamps:true
})

const ProductCategory = mongoose.models.productcategories || mongoose.model("productcategories", ProductCategorySchema)
export default ProductCategory;