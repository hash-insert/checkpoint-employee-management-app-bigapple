const express=require('express');
const {getTimesheets,addTimesheets,getallTimesheets,updatebyemployee}=require('../controllers/timesheets.js');

const app=express();
const route=express.Router()

route.get('/timesheet/:id',getTimesheets);

route.get('/timesheet',getallTimesheets)

route.post('/timesheet',addTimesheets);

route.patch('/timesheet/employee/:id',updatebyemployee);

module.exports=route;