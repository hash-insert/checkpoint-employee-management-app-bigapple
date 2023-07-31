
import './App.css';

import TeamPage from './Team/team.js';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>

 
   <Route path="/admin/team" element={ <TeamPage/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
