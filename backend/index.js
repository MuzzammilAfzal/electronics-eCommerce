const express= require("express")
const userRouter = require("./routes/user")
const adminRouter =require("./routes/admin")
const { default: mongoose } = require("mongoose")
const dotenv=require("dotenv")
const cors=require('cors')


dotenv.config()
const app =express()
app.use(express.json())
app.use(cors({origin:"https://electronics-e-commerce-two.vercel.app",
    methods:["GET","POST","PUT","DELETE"],credentials:true
}))


app.use('/',userRouter)
app.use('/admin',adminRouter)

mongoose.connect(process.env.MONGO_URI, {  dbName: "electronicsStore" })

app.listen(5000,()=>{
    console.log("app running on port 5000")
})