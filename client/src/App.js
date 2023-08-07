
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfilePage from './pages/profile';
  import './App.css';
  import LeavePageAdmin from './components/leavePageAdmin';
import LeavePageEmp from "./components/leavePageEmp"
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
        <Routes >
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/Calendar' element={<LargeCalendar />}></Route>
          <Route path="/profile" element={<ProfilePage />} ></Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/timesheetadmin" element={<TimeSheetsAdmin/>}></Route>
          <Route path="/employees" element={<EmployeePage />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="/employee/dashboard" element={<EmpDashboard />}/>
        </Routes>
      </AppProvider>
  );
}
export default App;

