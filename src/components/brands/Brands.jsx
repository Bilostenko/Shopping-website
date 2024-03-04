import './brands.css'
import HM from '../../img/brands/HM.png'
import Obey from '../../img/brands/Obey.png'
import Shopify from '../../img/brands/Shopify.png'
import Lacoste from '../../img/brands/Lacoste.png'
import Levis from '../../img/brands/Levis.png'
import Amazon from '../../img/brands/Amazon.png'

import gsap from 'gsap';
import { useLayoutEffect, useRef} from 'react';
const Brands = () => {

  const brands = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(brands.current, {opacity: 0, y: 25}, {opacity: 1, y: 0})
  }, [])


  return (
    <section className="brands">
      <div className="container" ref={brands}>
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