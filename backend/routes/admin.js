const express =require("express")
const { admin, product } = require("../db/db")
const router=express.Router()
const jwt = require("jsonwebtoken")
const {authJwt}=require("../auth/auth")


router.get('/',(req,res)=>{
    res.status(200).json({message: "hello world from admin "})
})

router.post('/',async(req,res)=>{
 const {username,password} = req.body
 const Admin= await admin.findOne({username,password})
 if (Admin){
    const token = jwt.sign({username,password},process.env.SECERT_KEY,{expiresIn:"1h"})
    res.status(200).json({message:"admin success",token})
 }
 else{
    res.status(404).json({message:"admin not found"})
 }
})

router.post('/addProduct',authJwt,async(req,res)=>{
  const newProduct = new product(req.body);
    await newProduct.save();
    res.status(200).json({ message: 'product added successfully'});
  
})


module.exports=router