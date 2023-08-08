import React, { useEffect, useState } from 'react'
import './Timesheet.css'
import axios from 'axios'
function PreviousBlocks({setOpenModel ,setObjs}) {

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
        return(<div className='timesheetblock' key={id++} onClick={()=>popup(obj)} >
        <p>{obj.description} </p>
      </div>)})
    }
    </div>
  )
}

export default PreviousBlocks
