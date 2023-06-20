import React from 'react'
import './Programs.css'
import {programsData, programsdata} from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
  
  
  <div className="programs" id="programs">
{/* headrer */}

<div className="header-programs">
<span className='stroke-text'>Explore Our</span>
<span>Programs</span>
<span className='stroke-text'>To Shape You</span>
</div>
<div className="programs-categories">
{programsData.map((program)=>(
    <div className="category">
        {program.image}
        <span>{program.heading}</span>
        <span>{program.details}</span>
        <div className="join-now"><span>Join now</span><img src={rightArrow} alt="" /></div>
    </div>

))}

</div>
<div style={{color:"darkslategray"}}>.</div>
<div style={{color:"darkslategray"}}>.</div>

  </div>
  
  )
}

export default Programs