import React from 'react'
import {Link} from 'react-router-dom';




export default function Tabledata(props) {
  
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
    
    <div id='tablediv'>
      <table id='table' className="table table-borderless">
  <tbody >
    {props.parseData.map((item)=>{
     return <Link to={`/coin/${item.id}`}  style={{textDecoration:"none", color:"black"}}>
    <tr className='d-flex justify-content-evenly' style={{fontSize:'1.6rem',color:'white',width: '76vw',margin: 'auto'}}>
      <th className='TabD' scope="row" style={{width : '300px', textAlign : 'left'}}><img src={item.image} alt="" style={{height : '40px', width : '40px'}} /> {item.name}</th>
      <td className='TabD' style={{width : '300px',textAlign :'left' }}>{"$"+numberWithCommas(item.current_price.toFixed(2))}</td>
      <td className='TabD' style={{width : '300px', textAlign :'left',color:item.price_change_percentage_24h.toFixed(2)>0?'#00FF00':'#FF0000'}}>{item.price_change_percentage_24h.toFixed(2)>0?'+'+item.price_change_percentage_24h:item.price_change_percentage_24h}%</td>
      <td className='TabD' style={{width : '300px',textAlign :'right'}}>{"$"+numberWithCommas(item.market_cap)}</td>
    </tr>
    </Link>
    })}
    <hr />
  </tbody>
</table>
    </div>
    
     
    </>
  )
}
