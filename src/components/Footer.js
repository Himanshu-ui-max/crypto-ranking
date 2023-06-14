import React from 'react'
import fb from './fb.png'
import twitter from './twitter.png'
import yt from './yt.png'


function Footer() {
  return (
    <div style={{margin:"50px"}}>
        <hr />
      <footer>
        <div className="container">
            <img src={fb} alt="" style={{width:"50px", height:"50px", margin:"20px", cursor:"pointer"}}/>
            <img src={twitter} alt="" style={{width:"50px", height:"50px", margin:"20px", cursor:"pointer"}} />
            <img src={yt} alt="" style={{width:"50px", height:"50px", margin:"20px", cursor:"pointer"}} />
        </div>
        <div className="container">
            <p style={{margin:"20px", cursor:"pointer"}}>Privacy</p>
            <p style={{margin:"20px", cursor:"pointer"}}>Terms of Use</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
