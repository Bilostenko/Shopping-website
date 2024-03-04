import './header.css'
import logoIMG from '../../img/icons/logo.svg'

import gsap from 'gsap';
import { useLayoutEffect } from 'react';


function Header() {

  useLayoutEffect(() => {
    gsap.to('.header__logo', {
      rotation: 360
    })
  }, [])


  return (
    <header className='header'>
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
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