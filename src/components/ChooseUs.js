import React from 'react'
import illus from './illus.png'

function ChooseUs() {
  return (
    <section id='choose us' style={{paddingTop : "80px"  }}>

    <div>
      <div className="container my-3">
        <h1 id='heading2' style={{fontSize: '7rem', marginBottom:'70px'}}>WHY CHOOSE US</h1>
        <div id='chooseUs' style={{display : 'flex', justifyContent : 'space-evenly'}}>
            <div>

            
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        </div>
        <div className='object' style={{zIndex :'-1'}}>

        <img id='bitcoinimage' src={illus} alt="" style={{width: '550px', height: '550px',}} />
        </div>
        <div>

            
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        </div>
      </div>
    </div>
        </div>
            </section>
  )
}

export default ChooseUs
