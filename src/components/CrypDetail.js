import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";
import Chart from './Chart';

export default function CrypDetail() {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});

  const cryptodata = async () => {
    let url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setCoin(parsedata);
  }
    
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
 
  useEffect(() => {
    cryptodata();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='container' style={{marginTop:"60px"}}>
      {coin.image ? <img src={coin.image.large} alt={coin.id} /> : null}
      <h2 style={{textTransform:"uppercase"}}><strong>{coin.name}({coin.symbol})</strong></h2>
      <Chart />
      <div className="d-flex justify-content-center my-4">
      <div className="p-2">Rank={coin.market_cap_rank}</div>
      <div className="p-2">Current Price={coin.market_data? "$" +numberWithCommas(coin.market_data.current_price.usd.toFixed(2)) : null}</div>
      <div className="p-2">Market Cap={coin.market_data? "$" +numberWithCommas(coin.market_data.market_cap.usd.toFixed(2)) : null}</div>
      <div className="p-2">Price Change={coin.market_data? coin.market_data.price_change_percentage_24h.toFixed(2) + "%" : ""}</div>
        </div>
       <div className="description">
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(
                      coin.description ? coin.description.en : ""
                    ),
                  }}
        ></p>
      </div>
    </div>
  )
}

