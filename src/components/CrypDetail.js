import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";
import Chart from './Chart';
import Spinner from './Spinner';

export default function CrypDetail() {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setloading] = useState(false);
  const cryptodata = async () => {
    let url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setloading(false);
    setCoin(parsedata);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    cryptodata();
    // eslint-disable-next-line
  }, [coinId]);
  if (!loading) {
    return (
      <><div className='container' id='Container' style={{ marginTop: "60px", display: 'flex', flexDirection: 'row', justifyContent: 'around', alignItems: 'center' }}>
        <div className="image" style={{ marginTop: '30px' }}>
          {coin.image ? <img src={coin.image.large} alt={coin.id} id='detailimage' /> : null}
          <h2 style={{ textTransform: "uppercase" }}><strong>{coin.name}({coin.symbol})</strong></h2>
          <div className="p-2">Rank={coin.market_cap_rank}</div>
        </div>
        <div className="info" id="info" style={{ height: '320px', width: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div id="detailheading" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="p-2">Current Price={coin.market_data ? "$" + numberWithCommas(coin.market_data.current_price.usd.toFixed(2)) : null}</div>
            <div className="p-2">Market Cap={coin.market_data ? "$" + numberWithCommas(coin.market_data.market_cap.usd.toFixed(2)) : null}</div>
            <div className="p-2">Price Change={coin.market_data ? coin.market_data.price_change_percentage_24h.toFixed(2) + "%" : ""}</div>
          </div>
          <div className="description" id="description" style={{ height: '230px', width: '800px', overflow: 'auto', textAlign: 'left', padding: '30px' }}>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ""
              ),
            }}
            ></p>
          </div>
        </div>
      </div><Chart />
      </>
    )
  }
  else{
    <Spinner/>
  }
}

