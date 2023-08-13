import './Timesheet.css'
import React , { useState } from 'react';
import NavbarUser from '../../components/Navbar/NavbarUser';
import TimeForm from './TimeForm';
import PreviousTimesheet from './PreviousTimesheet';
function Timesheets({userId,userName}) {
    const [openModel,setOpenModel]=useState(true);
    const [objs,setObjs]=useState([]);
    
    return (
      <div className="TimesheetEmployee">
        <NavbarUser/>
      {openModel ? <TimeForm setOpenModel={setOpenModel} setObjs={setObjs} userId={userId} userName={userName} />:<PreviousTimesheet objs={objs} setOpenModel={setOpenModel}/>}
      </div>
    );
}

export default Timesheets
