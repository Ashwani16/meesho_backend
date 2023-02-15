const {Router}=require("express");
const { UserModel } = require("../model/User.Model");
var jwt = require('jsonwebtoken');
require('dotenv').config()

const userRouter=Router();

userRouter.post("/register",async (req,res)=>{
    try {
        const obj=req.body;

        let check= await UserModel.findOne({phoneNo:obj.phoneNo})
        // console.log(check.phoneNo)
        // console.log(check)

        if(check.phoneNo){
            res.end("user already registered")
        }
        
    } catch (error) {
        const user=new UserModel(obj);
        await user.save(obj) 
        res.send("user Registered")
    }
})
userRouter.post("/login",async (req,res)=>{
    const {phoneNo,password}=req.body;
    try {
        let user= await UserModel.findOne({phoneNo,password})
        console.log(user)
        if(user.phoneNo){
            let token=jwt.sign({ phoneNo: phoneNo }, process.env.privatekey)
            res.send({"res":"Success",token})
        }else{
            res.send("wrong credentials")
        }
    } catch (error) {
        res.send("wrong credentials")
    }
})

module.exports={userRouter}