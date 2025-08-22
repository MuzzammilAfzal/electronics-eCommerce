const express =require("express")
const router=express.Router()


router.get('/',(req,res)=>{
    res.json("message: hello world xxnn")
})

module.exports=router
