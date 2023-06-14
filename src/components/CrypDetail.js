import React from 'react'

function CrypDetail(props) {
  return (
    <div>
      <img src={props.imageURL} alt="" />{props.name}
    </div>
  )
}

export default CrypDetail
