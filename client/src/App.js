import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfilePage from './pages/profile';
import './App.css';
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
  const navigate = useNavigate();
  useEffect(() => {
    const usertoken = localStorage.getItem("Token");
    if (usertoken) {
      const decodedToken = jwt_decode(usertoken);
      setRole(decodedToken.role);
      setIsLoggedin(true);
    } else {
      // If no token, redirect to the login page
      setTimeout(()=>{
        navigate("/login");

      },20000)
    }
  }, []);
  return (
    <AppProvider>
      <Routes>
        {isLoggedin && (
          <>
            {role === "admin" && (
              <>
                <Route path="/employees" element={<EmployeePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path='/Calendar' element={<LargeCalendar />} />
                <Route path="/timesheetadmin" element={<TimeSheetsAdmin />} />
              </>
            )}
            {role === "employee" && (
              <>
                <Route path="/profile" element={<ProfilePage />} />
              </>
            )}
          </>
        )}
        {/* Redirect to login if not logged in */}
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </AppProvider>
  );
}
export default App;

