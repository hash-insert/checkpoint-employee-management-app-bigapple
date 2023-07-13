// const mongoose=require('mongoose');
import mongoose from "mongoose";
import timeSheetSchema from "../models/timeshee.js";
// const timesheet=require('../models/timesheet');

export const getTimesheets=async(req,res)=>{
    try{
    const id=req.params.id;
    const time=await timeSheetSchema.findById({_id:id});
    res.send(time);
    }
    catch(err)
    {
        res.status(404).send(err);
    }
}

export const getallTimesheets=async(req,res)=>{
    try{
    const time=await timeSheetSchema.find();
    res.send(time);
    }
    catch(err)
    {
        res.status(404).send(err);
    }
}

export const addTimesheets=async(req,res)=>{
    try{
       const userId=req.body.userId; 
       const userName=req.body.userName;
       const feature= req.body.feature;
       const description=req.body.description;
       const productive=req.body.productive;
       const status=req.body.status;
      
       const time=await timeSheetSchema.create({
        userId:userId,
        userName:userName,
        feature:feature,
        description:description,
        productive:productive,
        status:status
       })

       res.status(200).send(req.body);

    }

    catch(err){
        console.log("the error is ",err);
        res.status(400).json({error:err})
    }
}

export const updatebyemployee=async(req,res)=>{

    try{
        const _id=req.params.id;
        console.log(_id);
        const updated=await timeSheetSchema.findByIdAndUpdate(_id,req.body);

        res.send(updated);
    }
    catch(err)
    {
        res.json({error:err})
    }
}



// module.exports={getTimesheets,addTimesheets,getallTimesheets,updatebyemployee}