import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    description : {
        type : String,
        required : true,
    },
    ProductImage : {
        type : String
    },
    price : {
        type : Number,
        default : 0,
        min : 0
    },
    stock : {
        type:Number,
        default : 0,
        min : 0
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    }

},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)