import "./App.css";
import Login from "./login";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
