import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import ProfilePage from './pages/profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav><Navbar /></nav>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
