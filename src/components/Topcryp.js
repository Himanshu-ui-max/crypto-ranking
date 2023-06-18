// import React from 'react'
// import {Link} from 'react-router-dom';

// export default function Topcryp(props) {
//   return (
//     <>
//     <div>

//     {props.parseData.map((item)=>{
//       if(parseData.market_cap_rank<=4){
//         return <Link to={`/coin/${item.id}`}  style={{textDecoration:"none", color:"black"}}>
//     <div  style={{display : 'flex', flexDirection : 'column'}}>
//       <div><img src={item.image} alt="" style={{height:'200px', width: '200px'}} /></div>
//       <div style={{fontSize : '1.5rem' }}>{item.name} <span style={{color : item.price_change_percentage_24h>0?'green':'red'}}>{item.price_change_percentage_24h.toFixed(2)}%</span></div>
//       <div style={{fontSize : '1.5rem'}}>${item.current_price.toFixed(2)}</div>
//     </div>
//     </Link>
//       }
//       else{
//         return null;
//       }
//     })}
//     </div>
//   </>
//   )
// }
