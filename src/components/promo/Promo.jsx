// sfc
import './promo.css'
import promoImg from './../../img/images/header-img.jpg'
import decorYellow from './../../img/icons/decor-yellow.svg'

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">LET’S EXPLORE UNIQUE CLOTHES.</div>
            <div className="promo__desc">Live for Influential and Innovative fashion!</div>
            <div className="promo__btn_wrapper">
              <img src={decorYellow} alt="decor" />
              <a href="!#" className='btn promo__btn'>Shop Now</a>
            </div>
          </div>
          <div className="promo__IMG">
            <img src={promoImg} alt="promo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;