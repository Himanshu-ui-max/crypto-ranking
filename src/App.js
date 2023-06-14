import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CrypDetail from './components/CrypDetail';


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
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route exact path='/crypdetails' element={<CrypDetail/>}></Route>
      </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
