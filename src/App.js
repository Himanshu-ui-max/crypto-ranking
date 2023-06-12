import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Market from './components/Market';
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
          <Route element={<Market/>} exact path='./'></Route>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
//hey