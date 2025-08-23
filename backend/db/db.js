
const mongoose=require("mongoose")


const userSchema= new mongoose.Schema({
    phoneNo : {type:String ,required:true,min:10,max:10},
    username:{type:String,required:true},
    email:String,
    password:{type:String,required:true},
    myCart:[{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
    myOrders:[{ type:mongoose.Schema.Types.ObjectId, ref:"product"}]
})


const productSchema= new mongoose.Schema({
   productName:String,
   description:String,
   price:Number,
   imageLink:String,
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