import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import ProfilePage from './pages/profile';
import './App.css';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/profile" element={<ProfilePage />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
