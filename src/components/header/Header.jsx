import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import logoIMG from '../../img/icons/logo.svg';
import gsap from 'gsap';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

function Header() {
  const headerRef = useRef(null);

  const [visible, setVisible] = useState(false);

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

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


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
          <div className="header__burger" >
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </div>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            
          >
            <Menu mode="vertical" className='burger-list'>
              <Menu.Item key="1">CATALOGUE</Menu.Item>
              <Menu.Item key="2">FASHION</Menu.Item>
              <Menu.Item key="3">FAVOURITE</Menu.Item>
              <Menu.Item key="4">LIFESTYLE</Menu.Item>
              <Menu.Item key="5">
                <a href="!#" className="header__nav-sign btn">SIGN UP</a>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

export default Header;
