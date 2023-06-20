import React from 'react'
import './Header.css'
import logo from './../../assets/logo.png'
import bars from './../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setmenuOpened] = useState(false)
  return (
    <div className="header">
      <img src={logo} alt="" className='logo ' />
      {(menuOpened === false && mobile === true) ?
       (
          <div
          style={{
            backgroundColor:'darkslategray',
            padding:"0.5rem",
            borderRadius:"5px"
          }}

          onClick={()=> setmenuOpened(true)}
          
          >
            <img src={bars} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
          </div>
        ) : (
          <ul className='header-menu'>
            <li onClick={()=>setmenuOpened(false)}>
              <Link
              onClick={()=>setmenuOpened(false)} 
              to='home'
              spy={true}
              smooth={true}
              
              
              >Home</Link>
              
              </li>
            <li>
            <Link
            activeClass='active'
            onClick={()=>setmenuOpened(false)} 
            to='programs'
            spy={true}
            smooth={true}
            
            >Programs</Link>
              </li>
            <li>
              
              <Link
              onClick={()=>setmenuOpened(false)} 
              to='reasons'
              spy={true}
              smooth={true}
              
              >Why Us</Link></li>

                  <li>
              
              <Link
              onClick={()=>setmenuOpened(false)} 
              to='addtocakepage'
              spy={true}
              smooth={true}
              
              >Inquiry Page</Link></li>
            {/* <li onClick={()=>setmenuOpened(false)}>Plans</li> */}
            {/* <li onClick={()=>setmenuOpened(false)}>Testimonials</li> */}
          </ul>



        )}

    </div>



  )
}

export default Header