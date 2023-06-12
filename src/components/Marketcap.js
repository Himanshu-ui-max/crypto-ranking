import React from 'react'

export default function Marketcap(props) {
  
    
  return (
    
    <div style={{fontSize : '2rem'}}>
    ${props.Marketcap.toLocaleString()}
    </div>
  )
}
