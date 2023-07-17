import "./App.css";
import Home from "./Components/Home/Home.jsx";
import GetCalendar from "./Components/Calendar/Calendar";

import Dashboard from "./Components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/timesheet" element={<GetCalendar />} />
      </Routes>
    </div>
  );
}

export default App;
