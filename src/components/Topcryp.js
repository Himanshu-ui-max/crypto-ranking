import React from 'react'

export default function Topcryp(props) {
  return (
    <div  style={{display : 'flex', flexDirection : 'column'}}>
      <div><img src={props.imgURL} alt="" style={{height:'200px', width: '200px'}} /></div>
      <div style={{fontSize : '1.5rem' }}>{props.name} <span style={{color : props.change>0?'green':'red'}}>{props.change.toFixed(2)}%</span></div>
      <div style={{fontSize : '1.5rem'}}>${props.price.toFixed(2)}</div>
    </div>
  )
}
