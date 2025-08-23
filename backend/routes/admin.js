const express =require("express")
const { admin } = require("../db/db")
const router=express.Router()
const jwt = require("jsonwebtoken")



router.get('/',(req,res)=>{
    res.status(200).json({message: "hello world from admin "})
})

router.post('/',async(req,res)=>{
 const {username,password} = req.body
 console.log(process.env.SECERT_KEY)
 const admin= await admin.findOne({username,password})
 if (admin){
    
 }
})


module.exports=router