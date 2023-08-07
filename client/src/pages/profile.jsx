import React from 'react'
import Profile from '../components/Profile'
import NavbarUser from "../components/Navbar/NavbarUser.js";
const ProfilePage = (props) => {
  const userid = props.value;
  return (
    <>
    <NavbarUser/>
    <Profile value={userid}/>
    </>
  )
}

export default ProfilePage