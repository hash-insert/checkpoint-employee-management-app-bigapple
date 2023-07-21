import React from 'react'
import "./Navbar.css";
// import { VscAccount } from "react-icons/vsc";
import { LuCalendarX2 } from "react-icons/lu";
import { BsMicrosoftTeams } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { MdAccountCircle } from 'react-icons/md';

export default function Navbar() {
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
    <div className='ParentNavbar'>
      <div className='Navbar'>
        <div style={{ padding: "1%", color: "white" }}>{getTimePeriod() + "  " + userName}!</div>
        <div className='NavRoutes'>
          <span >Teams</span>
          <span >Timesheeet</span>
          <span >Leaves</span>
        </div>
        <MdAccountCircle className='ProfileImg' />
      </div>
      <div className='NavbarBottom'>
        <BsMicrosoftTeams />
        <IoCalendar />
        <LuCalendarX2 />
        {/* <img src='/Daco_659067.png' alt='Teams not found'></img> */}
        {/* <img src='/pngegg.png' alt='Timesheet not found'></img> */}
        {/* <img src='/Leave.png' alt='Leaveimg not found'></img> */}
      </div>
    </div>
  )
}
