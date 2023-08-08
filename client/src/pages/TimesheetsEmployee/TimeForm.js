import React from 'react'
import { useState } from 'react';
import './Timesheet.css'
import PreviousBlocks from './PreviousBlocks';
import axios  from 'axios';
function TimeForm({setOpenModel,setObjs}) {
    const [feature,setFeature]=useState();
    const [image,setImage]=useState([]);
    const [description,setDescription]=useState('');
    const [Status,setStatus]=useState('');
    const [time,setTime]=useState();
  
    function add()
    {
      console.log('image')

      axios.post('http://localhost:9000/auth/timesheet',
      {
      feature:feature,
      description:description,
      time:time,
      Status:Status,
      screenshots:image
      }

      )
      .then((res)=>console.log(res)) 
    }
  
    function convert(e)
    {
       var reader=new FileReader()
       reader.readAsDataURL(e.target.files[0])
       reader.onload=()=>{
        setImage([...image,reader.result])
       }
    }
    
    
    return (
      <div className="TimesheetEmployee">
       <div className='timesheetform'>
        <h1 className='textheading'>Time sheet</h1>
        
        <label className='timesheetslabel' >Feature</label>
        <br></br>
        <input className='timesheetinputs' type='text' onChange={(e)=>setFeature(e.target.value)}></input>
        <br></br>
        <label className='timesheetslabel' >Description</label>
        <br></br>
        <input className='timesheetinputs' type='text' onChange={(e)=>setDescription(e.target.value)}></input>
        <br></br>
        <label className='timesheetslabel' >Productive hours</label>
        <br></br>
        <input className='timesheetinputs' type='Number' onChange={(e)=>setTime(e.target.value)}></input>
        <br></br>
        <input className='timesheetinputs' accept='image/*' type='file' onChange={convert} />
        <br></br>
        <label className='timesheetslabel' >Status</label>
        <br></br>
        <input className='timesheetinputs' type='text' onChange={(e)=>setStatus(e.target.value)}></input>
        <button className='timesheetbutton' onClick={()=>add()}>submit</button>
       </div>
       
       
       <PreviousBlocks setOpenModel={setOpenModel} setObjs={setObjs}/>
      </div>
    );
}

export default TimeForm
