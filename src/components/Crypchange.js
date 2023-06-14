import React from 'react'

export default function Crypchange(props) {
  return (
    <div style={{fontSize : '1.75rem', color : props.change>0?'green':'red',}}>
      {props.change>0?'+'+props.change.toFixed(2):props.change.toFixed(2)}%
    </div>
  )
}
