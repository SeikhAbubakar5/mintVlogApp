require('dotenv').config({path:'src/.env'})
const express=require('express');
const mongoose = require('mongoose');
const cors=require("cors")

const userRoutes=require("./routes/userRoutes")
const blogRoutes=require("./routes/blogRoutes")
const app =express()

app.use(cors())
app.use(express.json())
app.use("/api/user",userRoutes )
app.use("/api/blogs",blogRoutes)

mongoose.connect(process.env.MONGO_URI,{}).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})

const PORT=process.env.PORT || 7000
app.listen (PORT ,()=>{
    console.log(`Server start Listining on PORT ${PORT}`)
})




