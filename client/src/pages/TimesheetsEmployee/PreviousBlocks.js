import React, { useEffect, useState } from 'react'
import './Timesheet.css'
import axios, { toFormData } from 'axios'
function PreviousBlocks({setOpenModel ,setObjs }) {

 const [obj,setObj]=useState([]);   
 let id=0;
 useEffect(()=>{
    axios.get('http://localhost:9000/auth/timesheet')
    .then((x)=>setObj(x.data))
},)

function popup(x)
{
    setObjs(x);
    setOpenModel(false)
}
  
  return (
    <div className='previoustimesheets'>
    { 
     obj.map((obj)=>{ 
        return(
        <div className='timesheetblock' key={id++}  >
          <div className='timesheetsheader'>
          <h6>{obj.date}</h6>
          <h6 className='timesheetHrs'>Productive Hrs:-{obj.productiveHrs} </h6> 
          </div>
        <div className='innerblock'>  
        <div className='timesheetdetails'>
        <h6>Employee:-</h6>  
       
        </div>
        
        <div className='timesheetdetails'>
        <h6>Feature:-</h6>  
        <p>{obj.feature} </p>
        </div>
        <div className='timesheetdetails'>
        <h6>Status:-</h6>  
        <p>{obj.status} </p>
        </div>
        <p>for timesheet screenshots click <a onClick={()=>popup(obj)}>here</a></p>
        
        </div>
      </div>)})
    }
    </div>
  )
}

export default PreviousBlocks
