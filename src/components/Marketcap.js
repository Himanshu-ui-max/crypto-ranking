import React from 'react'

export default function Marketcap(props) {
  
    
  return (
    
    <div style={{fontSize : '1.75rem'}}>
    ${props.Marketcap.toLocaleString()}
    </div>
  )
}
