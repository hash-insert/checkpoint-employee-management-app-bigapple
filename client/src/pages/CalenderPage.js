import * as React from 'react';
import "../css/Calenderpage.css";
import Calendar from '../Calender/Calender.jsx';
// import { AppContext } from '../AppProvider/Appprovider';
import { useNavigate } from 'react-router-dom';
import NavbarUser from "../components/Navbar/NavbarUser"

export default function CalenderPage(props) {

const navigate = useNavigate();
    const setTimesheetsData = props.value;


    return (
        <>
            <NavbarUser/>
            <div className='timesheetroutes'>
                <span style={{ backgroundColor: "lightgreen" }} onClick={()=>{setTimesheetsData("allAcceptedTimesheets");navigate('/timesheetadmin')}}>Approved</span>
                <span style={{ backgroundColor: "#bba8ff" }} onClick={()=>{setTimesheetsData("pendingEmployeeTimesheets");navigate('/timesheetadmin')}}>Pending</span>
                <span style={{ backgroundColor: "#f2666c" }} onClick={()=>{setTimesheetsData("allrejectedtimesheets");navigate('/timesheetadmin')}}>Rejected</span>
            </div>
            <div className='maincalender'>
                    <Calendar value={setTimesheetsData} />
            </div>
        </>
    )
}