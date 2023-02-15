const mongoose=require("mongoose")
const { productSchema } = require("./product.Model")

const userSchema=mongoose.Schema({
    name:String,
    phoneNo:String,
    password:String,
    cart:[productSchema]
})
const UserModel=mongoose.model("user",userSchema)
module.exports={UserModel}