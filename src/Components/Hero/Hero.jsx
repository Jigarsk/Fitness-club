import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png';
import calories from '../../assets/calories.png';
import heart from '../../assets/heart.png';
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'


const Hero = () => {
  const transition = {type : 'spring', duration: 3}
  return (
    <div className="Hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <motion.div
        transition={transition}
        whileInView={{left:"1rem"}}
        initial={{left:"-15rem"}}


         className="thebestadd">
          
          {/* The best add */}
          <span>The Best Fitness Club in The Town</span>

        </motion.div>
        {/* hero heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span> Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span className='tagline'>Here We will help you to shape and build a ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span> <NumberCounter end={140} start={100} delay='4' preFix='+'/> 

            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800} delay='4' preFix='+'/> 

            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={20} delay='4' preFix='+'/>

            </span>
            <span>Fitness Programs</span>
          </div>
          </div> 
         
         
          {/* hero  Button */}
          <div className="hero-buttons">
<button className="btn">Get Started </button>
<button className="btn">Learn More</button>
          </div>
        
      </div>
      <div className="right-h">
<button className="btn join-btn">Join Now </button>

{/* Heart Rate */}
<motion.div
initial={{right:"1rem"}}
whileInView={{right : "4rem"}}
transition={transition}
 className="heart-rate">
<img src={heart}  />
<span>Heart Rate </span>
<span>111 BPM</span>

</motion.div>


{/* hero Images */}
<img src={hero_image} alt="" className="hero-image" />


{/* Calories */}


<motion.div 
  transition={transition}
  initial={{right:"10rem"}}
  whileInView={{right:"25rem"}}
  


className="calories">
<img src={calories} alt="" />
<div>
<span>Calories Burned</span>
<span>219 kcal</span>
</div>

</motion.div>
      </div>
    </div>
  )
}

export default Hero