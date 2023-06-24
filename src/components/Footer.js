import React from 'react'
import fb from './fb.png'
import twitter from './twitter.png'
import yt from './yt.png'


function Footer() {
  return (
    <div style={{margin:"50px",color:'white'}}>
        <hr />
      <footer>
        <div className="container" style={{display:'flex',justifyContent:'center',margin:'20px auto'}} >
          <div style={{height:'48px',width:'48px',margin:'20px'}}>
            <img src={fb} alt="" style={{width:"44px", height:"44px", margin:"1px auto 49px auto", cursor:"pointer",}}/>
            </div>
            <img src={twitter} alt="" style={{width:"46px", height:"46px", margin:"20px", cursor:"pointer"}} />
            <img src={yt} alt="" style={{width:"57px", height:"44px", margin:"20px", cursor:"pointer"}} />
        </div>
        <div className="container" style={{color:'white'}}>
            <p style={{margin:"20px", cursor:"pointer"}}>Privacy</p>
            <p style={{margin:"20px", cursor:"pointer"}}>Terms of Use</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
