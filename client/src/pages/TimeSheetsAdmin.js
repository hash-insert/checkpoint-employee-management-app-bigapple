import React from 'react';
import "../css/TimesheetAdmin.css"
import NavbarUser from '../components/Navbar/NavbarUser';
export default function TimeSheetsAdmin() {
    const obj = [
        {
          userId:"072355",
          userName:"TharunGoud",
          date:"23-7-2023",
          productive_hrs:"8hrs",
          project:"Employee management app",
          feature:"worked on the add, update, delete timesheet for employee",
          description:"work on add, update, delete timesheet for employee",
          status:"approved"
          // screenshoots:[]
        },{
          userId:"072359",
          userName:"nikhil",
          date:"29-7-2023",
          productive_hrs:"8hrs",
          project:"Employee management app",
          feature:"worked on the add, update, delete employee for employee-listing",
          description:"work on add, update, delete timesheet for employee",
          status:"approved"
          // screenshoots:[]
        },
    ]
  return (
    <> 
    <NavbarUser/>
    <div className='timesheetmain'>
        { obj.map((item)=>
          <div className='cardsheet'>
            <div className='cardheader'>                                                                  
            <h5>{item.date}</h5>
            <h5>Productive Hrs:-{item.productive_hrs}</h5>
            </div>
        <div className='insidecard'>
            <div className='tagpclass'>
              <h5>Employee:-</h5>
              <p>{item.userName}-{item.userId}</p>
              </div>
            <div className='tagpclass'>
              <h5>Project:-</h5>
              <p>{item.project}</p>
              </div>
            <div className='tagpclass'>
              <h5>Feature:-</h5>
              <p>{item.feature}</p>
              </div>
            {
            /* <div className='tagpclass'>
              <h5>Status:-</h5>
              <p>{item.status}</p>
              </div> */
              }
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
    </>
  )
}
