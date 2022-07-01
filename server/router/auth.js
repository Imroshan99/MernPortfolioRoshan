const express=require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const User =require("../model/userSchema");
const route=express.Router();
require("../db/connect")

route.get("/",(req,res,next)=>{
    res.send("Hi I am in Router");
})
route.post("/register",async(req,res,next)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({massage:"fill proper details"});
    }
   const existing= await User.findOne({email:email})
   if(existing){
       res.status(409).json({massage:"Your mail exist already.."});
   }else if(password != cpassword){
       return res.status(422).json({massage:"not match your pass"});
   }else{
    console.log("am")
    const response=new User({name,email,phone,work,password,cpassword});
    console.log("i ")
    const result=await response.save();
    res.json(result);
   }
   
})

route.post("/signin",async(req,res,next)=>{
    const {email,password}=req.body;
    console.log(req.body);
    if(!email || !password){
        return res.status(404).json({massage:"please fill your data"});
    }
    const exist=await User.findOne({email:email});
    if(!exist){
        return res.status(404).json({"massage":"not match email"})
    }else if(exist){
       const match=await bcrypt.compare(password,exist.password);
       const token=await exist.generateAuthToken();
       console.log(token)
    //    res.cookie("tokens",token,{
    //        expires:new Date(Date.now()+25892000000),
    //        httpOnly:true
    //    })
    res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 })



        if(!match){
            return res.status(404).json({massage:"pass not match"});
        }else{
            res.json("LOg in successful...");
        }

    }
    
})

module.exports=route;