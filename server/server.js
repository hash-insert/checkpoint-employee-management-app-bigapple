import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import empRoute from "./Routes/employee.js"
import adminroute from "./Routes/admin.js"
const app = express();
dotenv.config();
const PORT = process.env.PORT
const MONGO = process.env.MONGO
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/",empRoute)
app.use("/",adminroute)
app.listen(PORT,()=>{
    console.log(`Server started sucessfully in the ${PORT}`)
    mongoose.connect(MONGO).then(()=>{
        console.log("connected to DB")
    }).catch((err)=>{
        console.log(`here is the error:${err}`)
    })
})