import React from 'react'

function TableHeading() {
  return (
    <div id='headingdiv'  >
      <p id='tabhead'style={{textAlign:'left',fontSize:'2.5rem',marginLeft:'125px'}}>Market Update</p>
      <table id='tableheading' className="table table-borderless" style={{width: '1310px',margin: 'auto 5.75vw auto 5.75vw'}}>
  <tbody>
    <tr  id='tableheading'className='d-flex justify-content-evenly'style={{color:'black'}} >
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px',marginLeft: '0px'}}>Coin</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width: '295px',marginLeft: '5px'}}>Price</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width: '280px',marginLeft: '10px'}}>1H Change</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width: '270px',marginLeft: '30px'}}>MarketCap</th>
    </tr>

    <hr />
  </tbody>
</table>
    
    </div>
  )
}

export default TableHeading
