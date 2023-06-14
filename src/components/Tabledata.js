import React from 'react'
import {Link} from 'react-router-dom';
import CrypDetail from './CrypDetail';
import {
  Routes,
  Route,
} from "react-router-dom";

export default function Tabledata(props) {
  let name = props.name;
  let imageURL=props.imageURL
  let change =''
  let color ='green'
  if(props.change>0){
     color = 'green';
     change='+'+props.change.toFixed(2);
  }
  else{
     color = 'red'
    change=props.change.toFixed(2);
  }
  return (
    <>
    <div>
      
      <table className="table table-borderless">
  <tbody>
    <Link to='/crypdetails'  style={{textDecoration:"none", color:"black"}}>
    <tr className='d-flex justify-content-evenly' style={{fontSize:'1.6rem'}}>
      <th className='tabledata' scope="row" style={{width : '300px', textAlign : 'left'}}><img src={props.imageURL} alt="" style={{height : '40px', width : '40px'}} /> {props.name}</th>
      <td className='tabledata' style={{width : '300px',textAlign :'left' }}>${props.price.toFixed(2)}</td>
      <td className='tabledata' style={{width : '300px', color:`${color}`,textAlign :'left'}}>{change}%</td>
      <td className='tabledata' style={{width : '300px',textAlign :'left'}}>${props.marketcap}</td>
      
    </tr>
    </Link>
    <hr />
  </tbody>
</table>
    </div>
    
      <Routes>
        <Route exact path='/crypdetails' element={<CrypDetail name={name} imageURL={imageURL}/>}></Route>
      </Routes>
    
    </>
  )
}
