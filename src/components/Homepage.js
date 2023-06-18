import React from 'react'
import {Link} from 'react-router-dom';
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
    <section id='homepage' style={{paddingTop: '100px', height : '100vh'}}>

    <div >
      <div className="container my-3" style={{ width : '100vw'}}>
      <div className="typewriter tex-center container" style={{width:'2000px', height : '100px '}}>
        <h1  style={{ fontSize:"6rem", height:'150px', width:'1350px'}}>Welcome to Crypto-Ranking!</h1>
        </div> 
        <div className='container'>
          <div className="container d-flex justify-content-around" style={{marginTop:'80px'}}>

          
          <div className='d-flex justify-content-evenly' >

          {parseData.map((item)=>{
            if(item.market_cap_rank<=4){
              return <Link to={`/coin/${item.id}`}  style={{textDecoration:"none", color:"black"}}>
          <div  style={{display : 'flex', flexDirection : 'column', margin:'50px'}}>
            <div><img src={item.image} alt="" style={{height:'200px', width: '200px'}} /></div>
            <div style={{fontSize : '1.5rem' }}>{item.name} <span style={{color : item.price_change_percentage_24h>0?'green':'red'}}>{item.price_change_percentage_24h.toFixed(2)}%</span></div>
            <div style={{fontSize : '1.5rem'}}>${item.current_price.toFixed(2)}</div>
          </div>
          </Link>
            }
            else{
              return null;
            }
          })}
          </div>
            
            
         
          </div>
          
        </div>
      </div>
    </div>
              </section>
  )
}
