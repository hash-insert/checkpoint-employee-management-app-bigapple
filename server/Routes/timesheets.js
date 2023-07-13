// const express=require('express');
import express from "express";
import { getTimesheets,addTimesheets,getallTimesheets,updatebyemployee } from "../controllers/timesheets.js";
// const {getTimesheets,addTimesheets,getallTimesheets,updatebyemployee}=require('../controllers/timesheets.js');

const app=express();
const route=express.Router()

route.get('/:id',getTimesheets);

route.get('/',getallTimesheets)

route.post('/',addTimesheets);

route.patch('/employee/:id',updatebyemployee);

export default route;