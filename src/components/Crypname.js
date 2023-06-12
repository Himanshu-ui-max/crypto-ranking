import React from 'react'

export default function Crypname(props) {
  return (
    <div style={{fontSize : '2.5rem'}}>
    <img src={props.imgUrl} alt="" style={{height:'35px', width : '35px'}} />{props.name}
    </div>
  )
}
