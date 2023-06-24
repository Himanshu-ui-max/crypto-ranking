import React from 'react'

function TableHeading() {
  return (
    <div id='headingdiv'  >
      <p style={{textAlign:'left',fontSize:'2.5rem',marginLeft:'125px'}}>Market Update</p>
      <table id='tableheading' className="table table-borderless" style={{width: '1310px',margin: 'auto 70px auto 100px'}}>
  <tbody>
    <tr  id='tableheading'className='d-flex justify-content-evenly'style={{color:'white'}} >
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px'}}>Coin</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width: '280px',marginLeft: '20px'}}>Price</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width: '240px',marginLeft: '60px'}}>1H Change</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width: '270px',marginLeft: '30px'}}>MarketCap</th>
    </tr>

    <hr />
  </tbody>
</table>
    
    </div>
  )
}

export default TableHeading
