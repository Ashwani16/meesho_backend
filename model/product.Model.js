const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
        img1: String,
        name: String,
        price: String,
        onwards:String,
        rating: Number,
        reviews: String,
        size:[String],
        delivery: String,
        desc: String,
        id: String,
        quantity: Number
})

const ProductModel=mongoose.model("product",productSchema)


module.exports={productSchema,ProductModel}