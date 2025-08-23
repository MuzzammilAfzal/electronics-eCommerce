const express= require("express")
const userRouter = require("./routes/user")
const adminRouter =require("./routes/admin")
const { default: mongoose } = require("mongoose")
const dotenv=require("dotenv")


dotenv.config()
const app =express()
app.use(express.json())


app.use('/',userRouter)
app.use('/admin',adminRouter)

mongoose.connect(process.env.url, {  dbName: "electronicsStore" })

app.listen(3000,()=>{
    console.log("app running on port 3000")
})