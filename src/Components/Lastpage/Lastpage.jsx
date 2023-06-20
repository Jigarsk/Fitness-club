import React from 'react'
import './Lastpage.css'
import github from './../../assets/github.png'
import instagram from './../../assets/instagram.png'
import linkedin from './../../assets/linkedin.png'
import logo from './../../assets/logo.png'




const Lastpage = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social">

                    <a href='https://github.com/'><img src={github} alt="" /></a>
                    <a href='https://www.instagram.com/'><img src={instagram} alt="" /></a>
                    <a href='https://www.linkedin.com/'><img src={linkedin} alt="" /></a>
                </div>

                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
            <div style={{color:"darkslategray"}}>.</div>
<div style={{color:"darkslategray"}}>.</div>
        </div>
        
    )
}

export default Lastpage