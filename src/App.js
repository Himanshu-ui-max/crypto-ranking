import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import CrypDetail from './components/CrypDetail'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route element={<CrypDetail/> } exact path='/crypdetails'></Route>
      </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
