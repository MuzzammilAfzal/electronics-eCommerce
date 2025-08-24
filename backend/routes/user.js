const express =require("express")
const { authJwt } = require("../auth/auth")
const { product } = require("../db/db")
const router=express.Router()


router.get('/',(req,res)=>{
    res.status(200).json({message: "hello world "})
})


router.get('/allProducts',async (req,res)=>{
    const allProducts = await product.find({})
    res.status(200).send(allProducts)
})

module.exports=router
