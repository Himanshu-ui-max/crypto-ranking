import React from 'react'
import Homepage from './Homepage'
import Market from './Market';
import { useState, useEffect } from 'react';


function Home() {
  const cryptodata=async ()=>{
    let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=full'
   let data=await fetch(url);
   let parsedata=await data.json();
   console.log(parsedata);
  }

  useEffect( () => {
   cryptodata();
  }, []);
  
  return (
    <div>
      <Homepage/>
      <Market/>
    </div>
  )
}

export default Home
