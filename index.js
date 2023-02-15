const express=require("express");
const { connection } = require("./config/db");
const { productRouter } = require("./controller/product.Router");
const { userRouter } = require("./controller/user.Router");
require('dotenv').config()
var cors = require('cors')
const app=express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use("/user",userRouter)
app.use("/product",productRouter)
app.listen(process.env.port,()=>{
    try {
        connection
        console.log("server is running at "+process.env.port)
    } catch (error) {
        console.log("some eror in mongoDB")
    }
})