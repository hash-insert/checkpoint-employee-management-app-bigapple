import React, { useEffect, useState } from 'react'
import "./NavbarUser.css";
import { LuCalendarX2 } from "react-icons/lu";
import { BsMicrosoftTeams } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { MdAccountCircle } from 'react-icons/md';
import { PiUsersThreeFill } from 'react-icons/pi';
import { useNavigate } from 'react-router';
import jwt_decode from "jwt-decode";
import { NavLink } from 'react-router-dom';

export default function NavbarUser() {
  const [dropdown,setDropdown] = useState(false);
  const [userrole,setUserrole] = useState(false);
  const [user, setUser] = useState("")
  useEffect(()=>{
      const usertoken = JSON.parse(localStorage.getItem("Token"));
      const decodedToken = jwt_decode(usertoken);
      const { role , userName } = decodedToken;
      if(role==="admin")setUserrole(true)
      else setUserrole(false);
      setUser(userName)
  },[])
  
  // const userrole = true;
  // const userName = "tharun";
  const navigate = useNavigate();
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
          <div style={{ padding: "1%", color: "white" }}>{getTimePeriod() + "  " + user}!</div>
          <div className='rightroutes'>
            <div className='NavRoutes'>
              <NavLink className={userrole?"showemployees":"showemployee"} to="/admin/teams" >Teams</NavLink>
              <NavLink className={userrole?"showemployees":"showemployee"} to="/employees" >Employees</NavLink>
              <NavLink to={userrole?'/calendar':"/timesheets"} >Timesheeet</NavLink>
              <NavLink to={userrole?"/leaveadmin":"/leaveemployee"}  >Leaves</NavLink>
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
          <li style={{padding:"5px",borderBottom:"2px solid white"}} onClick={()=>{navigate("/profile")}}>Profile</li>
          <li style={{padding:"5px"}} onClick={()=>{localStorage.removeItem("Token");navigate("/login")}}>Logout</li>
        </ul>
      </div>
      </div>
      <div className='NavbarBottom'>
        <BsMicrosoftTeams className={userrole?"showemployees":"showemployee"} />
        <PiUsersThreeFill className={userrole?"showemployees":"showemployee"} onClick={() => navigate("/employees")} />
        <IoCalendar onClick={() => {userrole?navigate("/calendar"):navigate("/timesheets")}} />
        <LuCalendarX2 />
      </div>
    </>
  )
}
