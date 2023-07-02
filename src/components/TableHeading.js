import React from 'react'

function TableHeading() {
  return (
    <div id='headingdiv'  >
      <p id='tabhead'style={{textAlign:'left',fontSize:'2.5rem',marginLeft:'11vw'}}>Market Update</p>
      <table id='tableheading' className="table table-borderless" style={{width: '76vw',margin: 'auto'}}>
  <tbody>
    <tr  id='tableheading'className='d-flex justify-content-evenly'style={{color:'black'}} >
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px'}}>Coin</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px'}}>Price</th>
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px'}}>1H Change</th>
      <th className='TabH' style={{ textAlign : 'right', fontSize : '1.8rem',width : '300px'}}>MarketCap</th>
    </tr>

    <hr />
  </tbody>
</table>
    
    </div>
  )
}

export default TableHeading
