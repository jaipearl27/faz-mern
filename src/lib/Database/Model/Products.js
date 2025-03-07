import mongoose from "mongoose";
 
const ProductsSchema = new mongoose.Schema({
    title:{type: String, required: true},
    banner:[
        {
                secure_url: {
                        type: String
                    },
                    public_id: {
                        type: String
                    },
                    asset_id: {
                        type: String
                    }
        }
    ],
   category:{
              type: mongoose.Schema.Types.ObjectId,
              ref: "ProductCategory"
              },
    price:{type: Number, required:true},
    stock:{type:Number}      
},{
    timestamps: true
})

const Products = mongoose.models.Products || mongoose.model("Products", ProductsSchema)

export default Products