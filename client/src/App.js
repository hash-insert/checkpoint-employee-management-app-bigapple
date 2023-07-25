import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeavePageAdmin from './components/leavePageAdmin';
import LeavePageEmp from "./components/leavePageEmp"
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/employee/leave" element={   < LeavePageEmp />} />    
          </Routes>
      </Router>
      <LeavePageAdmin/>
    </div>
  );
}

export default App;
