import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function CrypDetail(props) {
  const { coinId } = useParams();
  const [coin, setCoin] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
  const cryptodata = async (page) => {
    let data = await fetch(url);
    let parsedata = await data.json();
    setCoin(parsedata);
    console.log(parsedata);
  }

  useEffect(() => {
    cryptodata(1);
    // eslint-disable-next-line
  }, []);
  return (
    <div className='container' style={{marginTop:"300px"}}>
      {coin.name}
    </div>
  )
}

