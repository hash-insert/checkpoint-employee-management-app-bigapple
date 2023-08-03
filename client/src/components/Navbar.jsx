import React from 'react'
import "../css/homepage.css";
import { useNavigate,NavLink } from 'react-router-dom';
// import { AppContext } from '../AppProvider/Appprovider.js';
function Navbar() {
  const navigate = useNavigate();
  // const { homePage, setHomePage, loginpage, setLoginPage, contact, setContact } = React.useContext(AppContext);
  
  return (
    <nav className='NavBar'>
      <h3 className="empHeading" onClick={()=>(navigate('/'))}>EMPLOYEE MANAGEMENT APP</h3>
      <div className='login-button'>
        <NavLink to='/login'>LOGIN</NavLink>
    </div>
    </nav>
    
  )
}

export default Navbar