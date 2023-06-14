import React from 'react'

export default function Cryprice(props) {
  return (
    <div style={{fontSize : '1.75rem'}}>
      ${props.price.toFixed(2)}
    </div>
  )
}
