import React from 'react'

function TableHeading() {
  return (
    <div className='d-flex justify-content-evenly'>
      
      <div style={{width : '500px'}}><h5>Coin</h5></div>
      <div style={{width : '500px'}}><h5>Price</h5></div>

      <div style={{width : '500px'}}><h5>24H change</h5></div>
      <div style={{width : '500px'}}s><h5>MarketCap</h5></div>
    
    </div>
  )
}

export default TableHeading
