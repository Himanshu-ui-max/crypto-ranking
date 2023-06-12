import React from 'react'

function TableHeading() {
  return (
    <div className='d-flex justify-content-evenly'>
      
      <div style={{width : '500px'}}  ><h5 style={{fontSize : '3.5rem'}}>Coin</h5></div>
      <div style={{width : '500px'}}  ><h5 style={{fontSize : '3.5rem'}}>Price</h5></div>
      <div style={{width : '500px'}}  ><h5 style={{fontSize : '3.5rem'}}>1H change</h5></div>
      <div style={{width : '500px'}}  ><h5 style={{fontSize : '3.5rem'}}>MarketCap</h5></div>
    
    </div>
  )
}

export default TableHeading
