import React from 'react'
import Homepage from './Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Table from './Table';
import ChooseUs from './ChooseUs';



function Home() {
  

  return (
    <div>
      <Router>
        <Homepage/>
        <Table/>
        <ChooseUs/>
      </Router>
      
      {/* <hr /> */}
      
    </div>
  )
}

export default Home
