import React from 'react'

export default function Market(props) {
  return (
    <div>
      <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Coin</th>
      <th scope="col">Price</th>
      <th scope="col">1H Change</th>
      <th className="col">Market Cap</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.change}%</td>
      <td>{props.marketcap}</td>
      
    </tr>
   
    
  </tbody>
</table>


    </div>
  )
}
