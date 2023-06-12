import React from 'react'
import Homepage from './Homepage'
import { useState, useEffect } from 'react';
import TableHeading from './TableHeading'
import Crypname from './Crypname';
import Cryprice from './Cryprice';
import Crypchange from './Crypchange';
import Marketcap from './Marketcap';


function Home() {
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
    <div>
      <Homepage/>
      <TableHeading/>
        <hr />
      <div className='d-flex justify-content-evenly' style={{height : '100vh', width:'100vw'}}>

      <div style={{width : '500px', textAlign:'left'}}>

      {parseData.map((element)=>{
          
          return <Crypname key={element.id} name={element.name} imgUrl={element.image} />
        })}
        </div>
      <div style={{width : '500px'}}>
      {parseData.map((element)=>{
          
          return <Cryprice key={element.id} price={element.current_price}  />
        })}
      </div>
      <div style={{width : '500px'}}>
      {parseData.map((element)=>{
          
          return <Crypchange key={element.id} change={element.price_change_percentage_24h}  />
        })}
      </div>
      <div style={{width : '500px'}}>

      {parseData.map((element)=>{
          
          return <Marketcap key={element.id} Marketcap={element.market_cap}  />
        })}
        </div>
    </div>
        </div>
  )
}

export default Home
