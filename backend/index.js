const express= require("express")
const userRouter = require("./routes/user")
const adminRouter =require("./routes/admin")
const { default: mongoose } = require("mongoose")
const dotenv=require("dotenv")
const cors=require('cors')


dotenv.config()
const app =express()
app.use(express.json())
app.use(cors({origin:"http://ec2-51-20-83-24.eu-north-1.compute.amazonaws.com:5000"}))


app.use('/',userRouter)
app.use('/admin',adminRouter)

mongoose.connect(process.env.MONGO_URI, {  dbName: "electronicsStore" })

app.listen(4000,()=>{
    console.log("app running on port 3000")
})