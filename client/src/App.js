
import { Routes, Route } from "react-router-dom"
import ProfilePage from './pages/profile';
  import './App.css';
  import LeavePageAdmin from './components/leavePageAdmin';
import LeavePageEmp from "./components/leavePageEmp"
import { HomePage } from './pages/HomePage';
import LargeCalendar from './pages/CalenderPage';
import { AppProvider } from './AppProvider/Appprovider';
import Login from "./pages/login.jsx"
import TimeSheetsAdmin from './pages/TimeSheetsAdmin.js';
import EmployeePage from './pages/employees.jsx'

import AdminDashboard from './Dashboard/Dashboard';
import EmpDashboard from './Dashboard/empDashboard';

function App() {
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
        <Route path="/employee/dashboard" element={<EmpDashboard />} />
        <Route path="/admin/leave" element={    <LeavePageAdmin/>} />   
          <Route path="/employee/leave" element={   < LeavePageEmp />} />  
        </Routes>
      </AppProvider>
  );
}
  
export default App;

