import React from 'react'
import Topcryp from './Topcryp';
import { useState, useEffect } from 'react';

export default function Homepage() {
  const [parseData, setparseData] = useState([]);
  const cryptodata=async ()=>{
    let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=2'
   let data=await fetch(url);
   let parsedata=await data.json();
   setparseData(parsedata);
   console.log(parsedata);
  }

  useEffect( () => {
   cryptodata();
  }, []);
  return (
    <section id='homepage' style={{paddingTop: '100px'}}>

    <div >
      <div className="container my-3" style={{  width : '100vw'}}>
        <h1 style={{fontSize : '10rem'}}>Welcome to Crypto-Ranking !</h1> 
        <div className='container'>
          <div className="container d-flex justify-content-around" style={{marginTop:'80px'}}>

          {parseData.map((element)=>{
            if(element.market_cap_rank<=4){
              return <Topcryp key={element.id} name={element.name} imgURL={element.image} change={element.price_change_percentage_24h} price={element.current_price}/>
            }
            else{
              return null;
            }
          })}
          </div>
          
        </div>
      </div>
    </div>
              </section>
  )
}
