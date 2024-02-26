import './payday.css'
import promoImg from '../../img/images/promo-img.jpg'
const Payday = () => {
  return (
    <section className="payday">
      <div className="container">
        <div className="payday__content">
          <div className="promo__IMG">
            <img src={promoImg} alt="promo" />
          </div>
          <div className="payday__text">
            <div className="payday__title">
              <span className='payday__title-highlight'>
                <span>PAYDAY</span>
              </span>
              SALE NOW
              <div className="payday__desc-1">Spend minimal $100 get 30% off
                voucher code for your next purchase</div>
              <div className="payday__desc-2">
                <span> 1 June - 10 June 2021</span> <br />
                *Terms & Conditions apply</div>
            </div>
            <div className="payday__btn_wrapper">
              <a href="!#" className='btn payday__btn'>Shop Now</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Payday;