import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from 'body-parser'
import userRoute from "./Routes/User.js"
import teamsRoute from "./Routes/Teams.js"
import leavesRoute from "./Routes/Leaves.js"
import timesheets from "./Routes/TImesheets.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT
const MONGO = process.env.MONGO
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/", userRoute)

app.use("/admin/teams",teamsRoute)
app.use("/auth",timesheets)

app.use("/empLeave",leavesRoute)
app.get("/",(req,res)=> {
    res.send("welcome to login")
})

app.listen(PORT,()=>{
    console.log(`Server started sucessfully in the ${PORT}`)
    mongoose.connect(MONGO).then(()=>{
        console.log("connected to DB")
    }).catch((err)=>{
        console.log(`here is the error:${err}`)
    })
})