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
    let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=full'
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
      <div className='d-flex justify-content-evenly'>

      <div style={{width : '500px'}}>

      {parseData.map((element)=>{
          
          return <Crypname name={element.name} imgUrl={element.image} />
        })}
        </div>
      <div style={{width : '500px'}}>
      {parseData.map((element)=>{
          
          return <Cryprice price={element.current_price}  />
        })}
      </div>
      <div style={{width : '500px'}}>
      {parseData.map((element)=>{
          
          return <Crypchange change={element.price_change_percentage_24h}  />
        })}
      </div>
      <div style={{width : '500px'}}>

      {parseData.map((element)=>{
          
          return <Marketcap Marketcap={element.market_cap_change_24h}  />
        })}
        </div>
    </div>
        </div>
  )
}

export default Home
