import React from 'react'
import illus from './illus.png'

function ChooseUs() {
  return (
    <div>
      <div className="container my-3">
        <h1 style={{fontSize: '7rem', marginBottom:'100px'}}>WHY CHOOSE US</h1>
        <div className='d-flex justify-content-evenly'>
            <div>

            
        <div class="card my-3" style={{width: '18rem'}}>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div class="card my-3" style={{width: '18rem'}}>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div class="card my-3" style={{width: '18rem'}}>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        </div>
        <img src={illus} alt="" style={{width: '550px', height: '550px'}} />
        <div>

            
        <div class="card my-3" style={{width: '18rem'}}>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div class="card my-3" style={{width: '18rem'}}>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div class="card my-3" style={{width: '18rem'}}>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        </div>
      </div>
    </div>
        </div>
  )
}

export default ChooseUs
