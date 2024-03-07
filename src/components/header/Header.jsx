import React, { useEffect, useRef } from 'react';
import './header.css';
import logoIMG from '../../img/icons/logo.svg';
import gsap from 'gsap';

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.from('.header__logo img', {
            opacity: 0,
            x: -50,
            delay: 0.5
          });
          gsap.from('.header__nav', {
            opacity: 0,
            x: 50,
            delay: 0.5
          });
          gsap.fromTo(
            '.header__logo',
            { scale: 0.1 }, 
            { duration: 1, scale: 1, ease: 'power3.out' }
          );
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.5 });

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, []);


  return (
    <header className='header' ref={headerRef}>
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

export default Header;
