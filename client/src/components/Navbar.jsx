import React from 'react'
import "../css/homepage.css";
import { useNavigate,NavLink } from 'react-router-dom';
import { AppContext } from '../AppProvider/Appprovider.js';
function Navbar() {
  // const navigate = useNavigate();
  const { homePage, setHomePage, loginpage, setLoginPage, contact, setContact } = React.useContext(AppContext);
  
  return (
    <nav className='NavBar'>
      <h3 className="empHeading">EMA</h3>
      <div className='nav123'>
        <NavLink to='/' >HOMEPAGE</NavLink>
        <NavLink to='/login'>LOGIN</NavLink>
        <NavLink to='calendar'>CONTACT</NavLink>
    </div>
    </nav>
    
  )
}

export default Navbar