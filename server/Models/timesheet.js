
const mongoose  = require('mongoose');

const timesheet= new mongoose.Schema({
     userId:{
      type:String,
      required:true
     },
     userName:{
       type:String,
       required:true
     },
     feature:{
        type:String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     productive:{
        type:Number,
        required:true
     },
     screenshots:{
        type:Buffer,
        required:true
     },
     status:{
        type:String,
        required:true
     }
},
{timestamps:true}

)

module.exports=mongoose.model("time",timesheet);