const express= require("express")
const userRouter = require("./routes/user")
const adminRouter =require("./routes/admin")
const { default: mongoose } = require("mongoose")
const dotenv=require("dotenv")
const cors=require('cors')


dotenv.config()
const app =express()
app.use(express.json())
app.use(cors())


app.use('/',userRouter)
app.use('/admin',adminRouter)

mongoose.connect(process.env.db_url, {  dbName: "electronicsStore" })

app.listen(80,()=>{
    console.log("app running on port 3000")
})