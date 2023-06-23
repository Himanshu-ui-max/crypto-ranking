import React from 'react'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

export default function Homepage() {
  const [parseData, setparseData] = useState([]);
  const [loading, setloading] = useState(false);
  const cryptodata=async ()=>{
    let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=2'
    setloading(true);
   let data=await fetch(url);
   let parsedata=await data.json();
   setloading(false);
   setparseData(parsedata);
   console.log(parsedata);
  }

  useEffect( () => {
   cryptodata();
  }, []);
  return (
    <section id='homepage' style={{paddingTop: '100px', width : '100vw'}}>

    <div >
      <div className="container my-3" style={{ width : '100vw'}}>
      
        <h1 id='heading'  style={{ fontSize:"7.5rem", height:'150px',marginBottom:'200px'}}>Welcome to Crypto-Ranking!</h1>
         
        <div className='container'>
          <div className="container d-flex justify-content-around" style={{marginTop:'80px'}}>

          
          <div id='topcrypto'  style={{display : 'flex', justifyContent : 'space-evenly'} } >
          {loading && (<Spinner/>)}
          {!loading && (parseData.map((item)=>{
            if(item.market_cap_rank<=4){
              return <Link id='toplink' to={`/coin/${item.id}`}  style={{textDecoration:"none", color:'white'}}>
          <div id='topdiv'  style={{display : 'flex', flexDirection : 'column', margin:'50px'}}>
            <div><img id='topimages'  src={item.image} alt="" style={{height:'200px', width: '200px'}} /></div>
            <div id='topname' style={{fontSize : '1.5rem' }}>{item.name} <span style={{color : item.price_change_percentage_24h>0?'green':'red'}}>{item.price_change_percentage_24h.toFixed(2)}%</span></div>
            <div id='topprices' style={{fontSize : '1.5rem'}}>${item.current_price.toFixed(2)}</div>
          </div>
          </Link>
            }
            else{
              return null;
            }
          }))}
          </div>
            
            
         
          </div>
          
        </div>
      </div>
    </div>
              </section>
  )
}
