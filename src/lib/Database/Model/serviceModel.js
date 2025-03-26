import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    banner:[{
            secure_url: {
                type: String
            },
            public_id: {
                type: String
            },
            asset_id: {
                type: String
         }
    }]
},{
    timestamps: true
})

const Services = mongoose.models.Services || mongoose.model("Services", ServiceSchema)

export default Services