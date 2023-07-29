import * as React from 'react';
import "../css/Calenderpage.css";
import Calendar from '../Calender/Calender.jsx';
import { AppContext } from '../AppProvider/Appprovider';

export default function CalenderPage() {
    const { homePage, setHomePage, loginpage, setLoginPage, contact, setContact } = React.useContext(AppContext);


    return (
        <>
            <h5>TimeSheets</h5>
            <div className='timesheetroutes'>
                <span style={{ backgroundColor: "lightgreen" }}>Approved</span>
                <span style={{ backgroundColor: "#bba8ff" }}>Pending</span>
                <span style={{ backgroundColor: "#f2666c" }}>Rejected</span>
            </div>
            <div className='maincalender'>
                    <Calendar/>
            </div>
        </>
    )
}