import React from 'react'
import {Link} from 'react-router-dom';
import gitLogo from './pngLogos/gitLogo.png'
import instaLogo from './pngLogos/instaLogo.png'
import linkedinLogo from './pngLogos/linkedinLogo.png'
export default function Footer() {
  return (
    <div className='text-light container-fluid' id='foot'>
            <div className='box1'>
                <div className='' id='footBrand'>
                    Fresh Junction
                </div>
                <div id='footLogoContainer'>
                    <a href="https://github.com/Akash33253" rel="noreferrer" target="_blank">
                        <img src={gitLogo} className="footLogo" alt="" />
                    </a>
                    <a href="https://www.instagram.com/akash_33253" rel="noreferrer" target="_blank">
                        <img src={instaLogo} className="footLogo" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/akash-gupta-56a40824a" rel="noreferrer" target="_blank">
                        <img src={linkedinLogo} className="footLogo" alt="" />
                    </a>
                </div>
            </div>
            <div className="box2">
                <div className='footContent'>
                    <ul id="footList">
                        <li style={{"marginBottom" : "10px"}}>Quick Links</li>
                        <li><Link  className="nav-link" to="/menu">Menu</Link></li>
                        <li><Link  className="nav-link" to="/book">Book Table</Link></li>
                    </ul>
                    <p id="footPara">
                    Fresh Junction Restaurant: We take pride in serving up a symphony of spices, aromas, and authentic Indian dishes that tantalize your taste buds. Our commitment to excellence extends to creating a warm and inviting atmosphere where you can savor every moment. Join us for an unforgettable dining experience that redefines Indian cuisine. Your culinary adventure begins at Fresh Junction – where tradition meets innovation on every plate. Come and explore the true essence of India with us today!
                        <br/>
                        <a rel="noreferrer" href="mailto:akashgtcatopk@gmail.com">Email me</a>
                    </p>
                </div>
                <div className="copyRight">
                    2023  &#169;  Fresh Junction
                </div>
            </div>
        </div>
  )
}
