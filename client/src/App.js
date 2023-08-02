import { Routes, Route } from "react-router-dom"
import ProfilePage from './pages/profile';
import './App.css';
import { HomePage } from './pages/HomePage';
import LargeCalendar from './pages/CalenderPage';
import { AppProvider } from './AppProvider/Appprovider';
import Login from "./pages/login.jsx"
import TimeSheetsAdmin from './pages/TimeSheetsAdmin.js';
import EmployeePage from './pages/employees.jsx'


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
        </Routes>
      </AppProvider>
  );
}
  
export default App;

