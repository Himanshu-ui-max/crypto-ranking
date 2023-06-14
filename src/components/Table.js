import React from 'react'
import TableHeading from './TableHeading'
import Crypname from './Crypname';
import Cryprice from './Cryprice';
import Crypchange from './Crypchange';
import Marketcap from './Marketcap';
import { useState, useEffect } from 'react';
import Tabledata from './Tabledata';


export default function Table() {
    const [parseData, setparseData] = useState([]);
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
  // const fifth=()=>{
  //   cryptodata(5);
  // }
  const cryptodata = async (page) => {
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=${page}&sparkline=false&price_change_percentage=1h&locale=en&precision=2`
    let data = await fetch(url);
    let parsedata = await data.json();
    setparseData(parsedata);
    console.log(parsedata);
  }

  useEffect(() => {
    cryptodata(1);
    // eslint-disable-next-line
  }, []);
    return (
        <section id='table'style={{paddingTop : '75px', height:'150vh'}}>

        <div>
            <div >

                <TableHeading />
                <hr />
                <div >

                    {/* <div className='d-flex justify-content-evenly' style={{  width: '100vw' }}>

                        <div style={{ width: '500px', textAlign: 'left' }}>

                            {parseData.map((element) => {

                                return <Crypname key={element.id} name={element.name} imgUrl={element.image} />
                            })}
                        </div>
                        <div style={{ width: '350px', textAlign: 'left'  }}>
                            {parseData.map((element) => {

                                return <Cryprice key={element.id} price={element.current_price} />
                            })}
                        </div>
                        <div style={{ width: '350px', textAlign: 'left'  }}>
                            {parseData.map((element) => {

                                return <Crypchange key={element.id} change={element.price_change_percentage_24h} />
                            })}
                        </div>
                        <div style={{ width: '350px', textAlign: 'left'  }}>

                            {parseData.map((element) => {

                                return <Marketcap key={element.id} Marketcap={element.market_cap} />
                            })}
                        </div>
                    </div> */}
                    {parseData.map((element)=>{
                        return <Tabledata name={element.name} price={element.current_price} change={element.price_change_percentage_24h} marketcap={element.market_cap} />
                    })}
                    
                    <div className="container d-flex justify-content-around" style={{marginTop : '50px', marginBottom :'200px'}} >
                        <button className="round" onClick={first}>1</button>
                        <button className="round" onClick={second}>2</button>
                        <button className="round" onClick={third}>3</button>
                        <button className="round" onClick={fourth}>4</button>
                        {/* <button className="round" onClick={fifth}>5</button> */}
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
