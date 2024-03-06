import './brands.css'
import HM from '../../img/brands/HM.png'
import Obey from '../../img/brands/Obey.png'
import Shopify from '../../img/brands/Shopify.png'
import Lacoste from '../../img/brands/Lacoste.png'
import Levis from '../../img/brands/Levis.png'
import Amazon from '../../img/brands/Amazon.png'

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Brands = () => {
  const brandsRef = useRef(null);

  useEffect(() => {
    const brandsElement = brandsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(brandsElement, {opacity: 0, y: 25}, {opacity: 1, y: 0});
        }
      });
    });

    if (brandsElement) {
      observer.observe(brandsElement);
    }

    return () => {
      if (brandsElement) {
        observer.unobserve(brandsElement);
      }
    };
  }, []);

  return (
    <section className="brands" ref={brandsRef}>
      <div className="container">
        <ul className="brands__list">
          <li className="brands__list-item"><img src={HM} alt="brand_image" /></li>
          <li className="brands__list-item"><img src={Obey} alt="brand_image" /></li>
          <li className="brands__list-item"><img src={Shopify} alt="brand_image" /></li>
          <li className="brands__list-item"><img src={Lacoste} alt="brand_image" /></li>
          <li className="brands__list-item"><img src={Levis} alt="brand_image" /></li>
          <li className="brands__list-item"><img src={Amazon} alt="brand_image" /></li>
        </ul>
      </div>
    </section>
  );
}

export default Brands;
