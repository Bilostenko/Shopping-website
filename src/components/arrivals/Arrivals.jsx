import './arriavls.css'
import Card from './card/Card'

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Arrivals = ({ title, cardData, animationParams }) => {
  const arrivalsRef = useRef(null);

  useEffect(() => {
    const arrivalsElement = arrivalsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (animationParams) {
            gsap.fromTo(arrivalsElement, {
              ...animationParams,
              delay: 1,
              scale: 0.1, 
              rotation: animationParams.rotation || 0 
            }, {
              scale: 1, 
              rotation: 0,
              duration: animationParams.duration * 0.5
            });
          }
        }
      });
    });

    if (arrivalsElement) {
      observer.observe(arrivalsElement);
    }

    return () => {
      if (arrivalsElement) {
        observer.unobserve(arrivalsElement);
      }
    };
  }, [animationParams]);




  return (
    <section className="arrivals" ref={arrivalsRef}>
      <div className="section">
        <div className="container">
          <div className="arrivals__header">
            <h2 className="title2">{title}</h2>
          </div>
          <div className="arrivals__content">
            {cardData.map((card, index) => (
              <Card key={index} title={card.titleCard} img={card.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrivals;
