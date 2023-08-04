import React, { useState } from 'react'
import "./NavbarUser.css";
import { LuCalendarX2 } from "react-icons/lu";
import { BsMicrosoftTeams } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { MdAccountCircle } from 'react-icons/md';
import { PiUsersThreeFill } from 'react-icons/pi';
import { useNavigate } from 'react-router';

export default function NavbarUser() {
  const [dropdown,setDropdown] = useState(false);
  const [userrole,setUserrole] = useState(false);
  const navigate = useNavigate();
  const userName = "Tharun";
  function getTimePeriod() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return 'GoodMorning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'GoodAfternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
      return 'GoodEvening';
    } else {
      return 'GoodNight';
    }
  }
  return (
    <>
      <div className='ParentNavbar'>
        <div className='Navbaruser'>
          <div style={{ padding: "1%", color: "white" }}>{getTimePeriod() + "  " + userName}!</div>
          <div className='rightroutes'>
            <div className='NavRoutes'>
              <span >Teams</span>
              <span className={userrole?"showemployees":"showemployee"} onClick={() => navigate("/employees")} >Employees</span>
              <span onClick={() => navigate("/calendar")} >Timesheeet</span>
              <span >Leaves</span>
            </div>
            <div>
            <MdAccountCircle onClick={()=>setDropdown(!dropdown)} className='ProfileLogo' />
            </div>
          </div>
        </div>
      </div>
      <div style={{position:"fixed",zIndex:"9"}} className={dropdown?"dropdown-main":"dropdown-main1"}>
      <div className='dropdown'>
        <ul style={{listStyle:"none",marginLeft:"-40px"}}>
          <li style={{padding:"5px",borderBottom:"2px solid white"}}>Profile</li>
          <li style={{padding:"5px"}}>Logout</li>
        </ul>
      </div>
      </div>
      <div className='NavbarBottom'>
        <BsMicrosoftTeams />
        <PiUsersThreeFill className={userrole?"showemployees":"showemployee"} onClick={() => navigate("/employees")} />
        <IoCalendar onClick={() => navigate("/calendar")} />
        <LuCalendarX2 />
      </div>
    </>
  )
}
