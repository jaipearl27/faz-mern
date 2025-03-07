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
    ]
},{
    timestamps: true
})

const Products = mongoose.models.Products || mongoose.model("Products", ProductsSchema)

export default Products