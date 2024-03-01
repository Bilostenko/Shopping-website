import './header.css'
import logoIMG from '../../img/icons/logo.svg'

import gsap from 'gsap';
import { useEffect, useRef } from 'react';


function Header() {

  const timeline = gsap.timeline({
    repeat: false,
    defaults: {duration:1, ease: "easeInOut"}
  });
  const logoRef = useRef();

  useEffect(() => {
    timeline.from(logoRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 1
    })
  }, []);


  return (
    <header className='header'>
      <div className="container">
        <div className="header__row">
          <div className="header__logo" ref={logoRef}>
            <img src={logoIMG} alt="logo" />
            <span>FASHION</span>
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="!#">CATALOGUE</a></li>
              <li><a href="!#">FASHION</a></li>
              <li><a href="!#">FAVOURITE</a></li>
              <li><a href="!#">LIFESTYLE</a></li>
              <li><a href="!#" className='header__nav-sign btn'>SIGN UP</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header