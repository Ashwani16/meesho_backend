const {Router} =require("express");
const { ProductModel } = require("../model/product.Model");

const productRouter=Router()
productRouter.get("/",async (req,res)=>{
       const {s}=req.query;
       const products=await ProductModel.find().skip(s)
       res.send(products)
})

module.exports={productRouter}
