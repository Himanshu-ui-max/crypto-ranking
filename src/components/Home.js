import React from 'react'
import Homepage from './Homepage'
import { useState, useEffect } from 'react';
import TableHeading from './TableHeading'
import Crypname from './Crypname';
import Cryprice from './Cryprice';
import Crypchange from './Crypchange';
import Marketcap from './Marketcap';


function Home() {
  const [page, setpage] = useState(1);
  const [parseData, setparseData] = useState([]);
  const first=()=>{
    setpage(1)
  }
  const second=()=>{
    setpage(2)
  }
  const third=()=>{
    setpage(3)
  }
  const fourth=()=>{
    setpage(4)
  }
  const fifth=()=>{
    setpage(5)
  }
  const cryptodata=async ()=>{
    let url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=${page}&sparkline=false&price_change_percentage=1h&locale=en&precision=2`
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
      <hr />
      <TableHeading/>
        <hr />
        <div style={{height : '100vh'}}>

      <div className='d-flex justify-content-evenly' style={{height : '60vh', width:'100vw'}}>

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
    <div className="container d-flex justify-content-around" >
      <button className="round" onClick={first}>1</button>
      <button className="round" onClick={second}>2</button>
      <button className="round" onClick={third}>3</button>
      <button className="round" onClick={fourth}>4</button>
      <button className="round" onClick={fifth}>5</button>
    </div>
      </div>
        </div>
  )
}

export default Home
