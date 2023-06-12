import React from 'react'

export default function Marketcap(props) {
  
    
  return (
    
    <div style={{fontSize : '2.5rem'}}>
    ${props.Marketcap.toLocaleString()}
    </div>
  )
}
