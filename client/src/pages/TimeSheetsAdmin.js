import React, { useEffect, useState } from 'react';
import "../css/TimesheetAdmin.css";
import NavbarUser from '../components/Navbar/NavbarUser';

const APIBASE = "http://localhost:9000";

export default function TimeSheetsAdmin(props) {
  const [resobj, setResObj] = useState([]);
  const timesheetsdata = props.value;
  console.log(timesheetsdata);
  useEffect(()=>{
    getTimesheets();
  },[timesheetsdata])

  const getTimesheets = async() =>{
    
    const res = await fetch(APIBASE+`/auth/${timesheetsdata}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const obj = await res.json();
    setResObj(obj)
    console.log(obj)
  }
  
  return (
    <> 
    <NavbarUser/>
    {(resobj.length===0)?
    <div className='EmptyTimesheets'>
        <h5>There are no timesheets for the time being comeback later.</h5>
        <img src='/TimesheetsSVG.svg' alt='TimesheetsSVG.svg'/>
    </div>
    :
    <div className='timesheetmain'>
        { resobj.map((item)=>
          <div className='cardsheet'>
            <div className='cardheader'>                                                                  
            <h5>{item.date}</h5>
            <h5>Productive Hrs:-{item.productiveHrs}</h5>
            </div>
        <div className='insidecard'>
            <div className='tagpclass'>
              <h5>Employee:-</h5>
              <p>{item.empName}-{item.empId}</p>
              </div>
            <div className='tagpclass'>
              <h5>Project:-</h5>
              <p>{item.projectName}</p>
              </div>
            <div className='tagpclass'>
              <h5>Feature:-</h5>
              <p>{item.feature}</p>
              </div>
            <div className='tagpclass'>
              <h5>Status:-</h5>
              <p>{item.status}</p>
              </div>
            <div className='tagpclass'>
              For timesheets screenshoots click&nbsp; 
              <a style={{color:"#9d72b3"}} href='/'>Here.</a>
            </div>
            <div className='timeSheetbuttons'>
              <div style={{backgroundColor:"lightgreen"}}>Approve</div>
              <div style={{backgroundColor:"#f2666c"}}>Reject</div>
            </div>
        </div>
       </div>
     )}
    </div>
    }
    </>
  )
}
