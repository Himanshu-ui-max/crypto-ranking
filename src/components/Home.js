import React from 'react'
import Homepage from './Homepage'
import {
  BrowserRouter as Router,
  
} from "react-router-dom";

import Table from './Table';
import ChooseUs from './ChooseUs';
import Footer from './Footer';



function Home() {
  

  return (
    <div>
      <Router>
        <Homepage/>
        <Table/>
        <ChooseUs/>
        <Footer/>
      </Router>
      
      {/* <hr /> */}
      
    </div>
  )
}

export default Home
