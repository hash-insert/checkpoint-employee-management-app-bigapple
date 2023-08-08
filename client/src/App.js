import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfilePage from './pages/profile';
import './App.css';
import LeavePageAdmin from "./pages/leavePageAdmin";
 import LeavePageEmployee from "./pages/leavePageEmp"
import { HomePage } from './pages/HomePage';
import LargeCalendar from './pages/CalenderPage';
import { AppProvider } from './AppProvider/Appprovider';
import Login from "./pages/login.jsx";
import TimeSheetsAdmin from './pages/TimeSheetsAdmin.js';
import EmployeePage from './pages/employees.jsx';
import jwt_decode from "jwt-decode";
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [role, setRole] = useState("");
  const [userid, setUserId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const usertoken = localStorage.getItem("Token");
    if (usertoken) {
      const decodedToken = jwt_decode(usertoken);
      setRole(decodedToken.role);
      setUserId(decodedToken.userid);
      setIsLoggedin(true);
      console.log(decodedToken);
    } else {
      // If no token, redirect to the login page
      setTimeout(()=>{
        navigate("/login");

      },20000)
    }
  }, []);
  console.log(userid)
  return (
    <AppProvider>
      <Routes>
        {isLoggedin && (
          <>
            {role === "admin" && (
              <>
                <Route path="/employees" element={<EmployeePage />} />
                <Route path="/profile" element={<ProfilePage value={userid} />} />
                <Route path='/Calendar' element={<LargeCalendar />} />
                <Route path="/timesheetadmin" element={<TimeSheetsAdmin />} />
                <Route path="/leaveadmin" element={<LeavePageAdmin  />} />
              </>
            )}
            {role === "employee" && (
              <>
                <Route path="/profile" element={<ProfilePage value={userid} />} />
                <Route path="/leaveemployee" element={<LeavePageEmployee userId={userid}/>} />
              </>
            )}
          </>
        )}
        
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </AppProvider>
  );
}
export default App;

