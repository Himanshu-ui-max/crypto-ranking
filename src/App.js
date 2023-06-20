import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CrypDetail from './components/CrypDetail';
import { useState, useEffect } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import Homepage from './components/Homepage';


function App() {
  const [parseData, setparseData] = useState();
  const fetchData= async ()=>{
    let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=32&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=2'
   let data=await fetch(url);
   let parsedata=await data.json();
   setparseData(parsedata);
   
   
  }
  useEffect(() => {
    fetchData();
   // eslint-disable-next-line
    
   }, []);
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>" 
        <Route exact path='/coin/:coinId' element={<CrypDetail key={parseData?.name}  />}></Route>
        {/* <Route exact path='/coin/:coinId' element={<Homepage key="cry" />}></Route> */}
      </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
