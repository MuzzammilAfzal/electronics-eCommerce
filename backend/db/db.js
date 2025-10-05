
const mongoose=require("mongoose")


const userSchema= new mongoose.Schema({
    phoneNo : {type:Number ,required:true},
    fullName:{type:String,required:true},
    email:{type:String,required:true},
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

const orderSchema = new mongoose.Schema({
  productId:String,
  payment:String,
  userId:String,
  time:String
})

const user = mongoose.model("user",userSchema)
const product =mongoose.model("product",productSchema)
const admin= mongoose.model("admin",adminSchema,"admin")
const order= mongoose.model("order",orderSchema,"order")

module.exports={
  user,
  product,
  admin,
  order
}