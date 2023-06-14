import React from 'react'

export default function Crypchange(props) {
  return (
    <div style={{fontSize : '1.75rem', color : props.change>0?'green':'red',}}>
      <a href='/'>
      {props.change>0?'+'+props.change.toFixed(2):props.change.toFixed(2)}%
      </a>
    </div>
  )
}
