import './mobileApp.css'
import mobile_phone from '../../img/images/vouchers-img.png'
import apple from '../../img/icons/app-store.png'
import google from '../../img/icons/google-play.png'

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const MobileApp = () => {

  const mobileAppRef = useRef(null);

  useEffect(() => {
    const mobileAppElement = mobileAppRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.from('.mobileApp__title', {
            opacity: 0,
            x: -50,
            delay: 0.5
          });
          gsap.from('.mobileApp__IMG', {
            opacity: 0,
            x: 50,
            delay: 0.5
          });
        }
      });
    });

    if (mobileAppElement) {
      observer.observe(mobileAppElement);
    }

    return () => {
      if (mobileAppElement) {
        observer.unobserve(mobileAppElement);
      }
    };
  }, []);


  return (
    <section className="mobileApp">
      <div className="container-small">
        <div className="mobileApp__content">
          <div className="mobileApp__text">
            <div className="mobileApp__title">
              <span>DOWNLOAD APP & GET THE VOUCHER! </span>
              <div className="mobileApp__desc">Get 30% off for first transaction using Rondovision mobile app for now.</div>
              <div className="mobileApp__btn_wrapper">
                <a href="https://www.apple.com/app-store/"
                  className='mobileApp__btn-iPhone'
                  target="_blank"
                  rel="noopener noreferrer" >
                  <img src={apple} alt="App store logo" />
                </a>
                <a href="https://play.google.com/store/apps?hl=ru&gl=US"
                  className='mobileApp__btn-Android'
                  target="_blank"
                  rel="noopener noreferrer" >
                  <img src={google} alt="Google play logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="mobileApp__IMG">
            <img src={mobile_phone} alt="mobile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;