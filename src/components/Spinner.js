import React from 'react'
import loading from './Gear.gif'

export default function Spinner() {
  return (
    <div style={{margin : ' 100px auto'}}>
      <img src={loading} alt='loading' style={{width : '200px', height : '200px'}} />
    </div>
  )
}
