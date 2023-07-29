import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import ProfilePage from './pages/profile';
import './App.css';
import { HomePage } from './pages/HomePage';
import LargeCalendar from './pages/CalenderPage';
import { AppProvider } from './AppProvider/Appprovider';
import Login from "./pages/login.jsx"
import AdminDashboard from './Dashboard/Dashboard';
import EmpDashboard from './Dashboard/empDashboard';

function App() {
  return (
    <div >
      <AppProvider>
        <Navbar />
        <Routes >
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/Calendar' element={<LargeCalendar />}></Route>
          <Route path="/profile" element={<ProfilePage />} ></Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="/employee/dashboard" element={<EmpDashboard />}/>
        </Routes>
      </AppProvider>

    </div>
  );
}

export default App;

