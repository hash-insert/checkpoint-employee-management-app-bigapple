import "./App.css";
import { Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/employees";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/employees" element={<EmployeePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
