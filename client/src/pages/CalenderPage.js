import * as React from 'react';
import "../css/Calenderpage.css";
import Calendar from '../Calender/Calender.jsx';
// import { AppContext } from '../AppProvider/Appprovider';
import { useNavigate } from 'react-router-dom';
import NavbarUser from "../components/Navbar/NavbarUser"

export default function CalenderPage() {
const navigate = useNavigate();
    // const { homePage, setHomePage, loginpage, setLoginPage, contact, setContact } = React.useContext(AppContext);


    return (
        <>
            <NavbarUser/>
            <div className='timesheetroutes'>
                <span style={{ backgroundColor: "lightgreen" }} onClick={()=>navigate('/timesheetadmin')}>Approved</span>
                <span style={{ backgroundColor: "#bba8ff" }}>Pending</span>
                <span style={{ backgroundColor: "#f2666c" }}>Rejected</span>
            </div>
            <div className='maincalender'>
                    <Calendar/>
            </div>
        </>
    )
}