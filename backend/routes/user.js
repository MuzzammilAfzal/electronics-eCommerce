const express =require("express")
const { authJwt } = require("../auth/auth")
const { product, user } = require("../db/db")
const jwt =require("jsonwebtoken")
const router=express.Router()


router.get('/',(req,res)=>{
    res.status(200).json({message: "hello world "})
})


router.post('/allProducts',async (req,res)=>{

    
    const logic=req.body.logic 
    const limit=req.body.limit 
    const skip=req.body.skip

    
    const allProducts = await product.find(logic).skip(skip).limit(limit) 
    const filteredProduct=allProducts.filter(obj=>obj.productName!==undefined)

    res.status(200).send(filteredProduct)

    
})

router.post('/specificProducts',async (req,res)=>{

    const _id=req.body._id
    console.log({_id});
    
    const specificProduct = await product.find({_id})

    res.status(200).send(specificProduct)

    
})

router.post('/signUp',async(req,res)=>{
 const {fullName,phoneNo,email,password,deliveryAddress,myCart,myOrders} = req.body
 const User= await user.findOne({phoneNo,email})
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

router.get('/myOrders',authJwt,async (req,res)=>{
    const {email}=req.user
    const User= await user.findOne({email}).populate("myOrders")
    const myOrders=User.myOrders
    res.status(200).send(myOrders)
})

router.get('/buyPageProduct',authJwt,async (req,res)=>{
    const id=req.headers.id
    const Product= await product.findById(id)
    res.status(200).send(Product)
})


router.post('/confirmOrder',authJwt, async(req,res)=>{
    const id=  req.headers.id    
    const {email}=req.user
    const User= await user.findOne({email})
    if(User){
        User.myOrders.push(id)
        User.save()
        res.status(200).json({message:"successful "})
    }else{
       res.status(400).json({message:"unsuccessful Order"}) 
    }
    
})

module.exports=router
