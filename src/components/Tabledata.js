import React from 'react'

export default function Tabledata(props) {
  return (
    <div>
      <table className="table table-borderless">
  <tbody>
    <tr className='d-flex justify-content-evenly' style={{fontSize:'1.6rem'}}>
      <th scope="row" style={{width : '300px'}}>{props.name}</th>
      <td style={{width : '300px'}}>{props.price}</td>
      <td style={{width : '300px'}}>{props.change}</td>
      <td style={{width : '300px'}}>{props.marketcap}</td>
    </tr>
    <hr />
  </tbody>
</table>
    </div>
  )
}
