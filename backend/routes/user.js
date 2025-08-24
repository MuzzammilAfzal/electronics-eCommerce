const express =require("express")
const { authJwt } = require("../auth/auth")
const { product, user } = require("../db/db")
const jwt =require("jsonwebtoken")
const router=express.Router()


router.get('/',(req,res)=>{
    res.status(200).json({message: "hello world "})
})


router.get('/allProducts',async (req,res)=>{
    const allProducts = await product.find({})
    res.status(200).send(allProducts)
})

router.post('/signUp',async(req,res)=>{
 const {fullName,phoneNo,email,password,deliveryAddress,myCart,myOrders} = req.body
 const User= await user.findOne({phoneNo})
 if (User){
    res.status(400).json({message:"User already exists"})
 }
 else{
    const newUser= await user.create({fullName,phoneNo,email,password,deliveryAddress,myCart,myOrders})
    const token=  jwt.sign({email,password},process.env.SECERT_KEY,{expiresIn:"1h"})
    if(newUser && token){
       res.status(200).json({message: "user Created successfully ",token}) 
    }
 }
})


router.post('/login',async(req,res)=>{
 const {email,password} = req.body
 const User= await user.findOne({email,password})
 if (User){
    const token = jwt.sign({email,password},process.env.SECERT_KEY,{expiresIn:"1h"})
    res.status(200).json({message:"admin success",token})
 }
 else{
    res.status(400).json({message:"admin not found"})
 }
})


router.post('/addToCart',authJwt, async(req,res)=>{
    const id=  req.headers.product
    const {email}=req.user
    const User= await user.findOne({email})
    if(User){
        await user.updateOne({_id:User._id}, { $addToSet: { myCart: id } })
        res.status(400).json({message:"successful adding to cart"})
    }else{
       res.status(400).json({message:"unsuccessful adding to cart"}) 
    }
    
})


router.get('/myCart',authJwt,async (req,res)=>{
    const {email}=req.user
    const User= await user.findOne({email}).populate("myCart")
    const myCart=User.myCart
    res.status(200).send(myCart)
})

module.exports=router
