import React from 'react'
import './Reasons.css'
import tick from './../../assets/tick.png'
import nike from './../../assets/nike.png'
import nb from './../../assets/nb.png'
import adidas from './../../assets/adidas.png'
const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
        
      <div className="righth">
     
        <span>Some Reasons </span>
        <div>
          <span className='stroke-text'>Why</span>
          <span> Choose Us ?</span>
        
        </div>
       
       
        {/* Reasons */}
        
        <div className='details'>

     
        <div>
       
          <img src={tick} alt=""/>
            <span> OVER 140+ EXPERT COACHES</span>
           
            </div>
        
        <div>
          <img src={tick} alt=""/>
            <span> TRAIN SMARTER AND FASTER THAN BEFORE</span>
            
            </div>
        
        <div>
          <img src={tick} alt=""/>
          <span> 1 FREE PROGRAM FOR NEW MEMBER</span>
          
          </div>
        
        <div>
          <img src={tick} alt=""/>
          <span> RELIABLE PARTNERS</span>
          
          </div>
          
          </div>
        
      <span style={{color: "gray", fontWeight:"bolder",fontSize:30}}>
        OUR PARTNERS</span>
        
        <div className="partners">
     
          <img src= {nb} alt="" /><div> </div>
          <img src= {adidas} alt="" /><div></div>
          <img src= {nike} alt="" />
      </div>
      </div>
     
        
        

    </div>
  )
}

export default Reasons