const jwt= require("jsonwebtoken")


async function authJwt(req,res,next){
  const token= await req.headers.token
  if(token){
  const success= await jwt.verify(token,process.env.SECERT_KEY,(err)=>{
    if(err){
      res.status(401).json({"message":"unAuthorized"})
    }else{
      console.log("auth passed")
      next()
    }
  })
 }else{
    res.status(400).json({message:"no token"})
 }
}
module.exports={
    authJwt
}