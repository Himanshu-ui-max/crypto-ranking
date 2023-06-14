import React from 'react'

export default function Crypname(props) {
  return (
    <div style={{fontSize : '1.75rem', marginLeft:'100px'}}>
    <img src={props.imgUrl} alt="" style={{height:'35px', width : '35px'}} />{props.name}
    </div>
  )
}
