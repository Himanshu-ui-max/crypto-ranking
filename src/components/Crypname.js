import React from 'react'

export default function Crypname(props) {
  return (
    <div style={{fontSize : '2rem', marginLeft:'160px'}}>
    <img src={props.imgUrl} alt="" style={{height:'35px', width : '35px'}} />{props.name}
    </div>
  )
}
