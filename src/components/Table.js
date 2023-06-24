import React from 'react'
import TableHeading from './TableHeading'
import { useState, useEffect } from 'react';
import Tabledata from './Tabledata';
import Spinner from './Spinner';


export default function Table() {
  const [parseData, setparseData] = useState([]);
  const [loading, setloading] = useState(false);
  const first = () => {
    cryptodata(1);
  }
  const second = () => {

    cryptodata(2);
  }
  const third = () => {
    cryptodata(3);
  }
  const fourth = () => {

    cryptodata(4);
  }
  
  const cryptodata = async (page) => {
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=${page}&sparkline=false&price_change_percentage=1h&locale=en&precision=2`
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setloading(false);
    setparseData(parsedata);
    console.log(parsedata);
  }

  useEffect(() => {
    cryptodata(1);
    // eslint-disable-next-line
  }, []);
  return (
    <section style={{ paddingTop: '45px', height: '125vh' }}>

      <div>
        <div id='table' >

          <TableHeading />
          <hr />
          <div >


            {loading && (<Spinner/>)}
            {!loading && (<Tabledata parseData={parseData} />)}


          </div>
        </div>
        <div className="container d-flex justify-content-evenly" style={{ marginTop: '50px', marginBottom: '200px' }} >
          <button className="round" onClick={first}>1</button>
          <button className="round" onClick={second}>2</button>
          <button className="round" onClick={third}>3</button>
          <button className="round" onClick={fourth}>4</button>
          {/* <button className="round" onClick={fifth}>5</button> */}
        </div>
      </div>
    </section>
  )
}
