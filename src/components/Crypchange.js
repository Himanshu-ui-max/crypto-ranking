import React from 'react'

export default function Crypchange(props) {
  return (
    <div style={{fontSize : '2rem', color : props.change>0?'green':'red',}}>
      {props.change.toFixed(2)}%
    </div>
  )
}