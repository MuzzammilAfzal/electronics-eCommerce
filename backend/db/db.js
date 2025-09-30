
const mongoose=require("mongoose")


const userSchema= new mongoose.Schema({
    phoneNo : {type:String ,required:true,min:10,max:10},
    fullName:{type:String,required:true},
    email:String,
    password:{type:String,required:true},
    deliveryAddress:{type:String,required:true},
    myCart:[{type:mongoose.Schema.Types.ObjectId, ref:"product"}],
    myOrders:[{ type:mongoose.Schema.Types.ObjectId, ref:"product"}]
})


const productSchema= new mongoose.Schema({
   image:String,
   productName:String,
   price:String,
   keyFeatures:String,
   descriptionImage:String,
   brand:String,
   categories:String,
   section:String,
})

const adminSchema = new mongoose.Schema({
  username:String,
  password:String
})

const user = mongoose.model("user",userSchema)
const product =mongoose.model("product",productSchema)
const admin= mongoose.model("admin",adminSchema,"admin")

module.exports={
  user,
  product,
  admin
}