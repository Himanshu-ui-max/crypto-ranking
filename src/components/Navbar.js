import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link'



export default function Navbar() {
  const [parseData, setparseData] = useState();
  const fetchData= async ()=>{
    let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=32&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=2'
   let data=await fetch(url);
   let parsedata=await data.json();
   setparseData(parsedata);
   
   
  }
  useEffect(() => {
    fetchData();
   // eslint-disable-next-line
    
   }, []);
   
   const [filteredData, setfilteredData] = useState([]);
   const handleFilter=(event)=>{
    const searchValue = event.target.value;
    
    const newfilter=parseData?.filter((value)=>{
      return value.name.toLowerCase().includes(searchValue.toLowerCase())
    }) 
    if(searchValue === ''){
      setfilteredData([])
   }
   else{
    setfilteredData(newfilter)
   }
   }
   
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ zIndex : '-1'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="./">CryptoR</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <HashLink className="nav-link active" aria-current="page" to="/#homepage">Home</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/#table">Market</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/#choose us">Choose Us</HashLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<form id='search' className="d-flex " style={{position : 'absolute', top : '8px' , right : '30px' , zIndex : '1'}}>
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={handleFilter}/>
      
      </form>
{filteredData?.length!==0 &&  (<div className="dataResult" style={{position : 'absolute',top : '50px', right : '0px'}} >
  {filteredData?.map((item)=>{
    return  <p><Link to={`/coin/${item.id}`} >{item.name}</Link></p>
  })}
</div>)}
    </div>
  )
}
