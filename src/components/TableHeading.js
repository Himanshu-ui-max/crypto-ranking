import React from 'react'

function TableHeading() {
  return (
    <div id='headingdiv' >
      
      <table id='tableheading' className="table table-borderless">
  <tbody>
    <tr className='d-flex justify-content-evenly' >
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px'}}>Coin</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px'}}>Price</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px'}}>1H Change</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px'}}>MarketCap</th>
    </tr>

    <hr />
  </tbody>
</table>
    
    </div>
  )
}

export default TableHeading
