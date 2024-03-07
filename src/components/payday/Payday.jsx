import './payday.css';
import promoImg from '../../img/images/promo-img.jpg';
import { useEffect } from 'react';
import gsap from 'gsap';

const Payday = () => {
  useEffect(() => {
    let sa; // Змінна для зберігання таймлайну анімації

    const stepAnimation = () => {
      const tlStep = gsap.timeline({ defaults: { duration: 1 }, repeat: -1, repeatDelay: 2 });
      tlStep
        .to('.payday__btn_wrapper', { y: -60 })
        .to('.payday__btn_wrapper', { y: 0, ease: 'bounce.out' });

      return tlStep; // Повертаємо таймлайн, щоб мати змогу зупиняти та відновлювати анімацію
    };

    sa = stepAnimation(); // Зберігаємо таймлайн анімації в змінній

    const firstStep = document.querySelector(".payday__btn_wrapper");
    firstStep.addEventListener('mouseover', () => {
      sa.pause(); // При наведенні курсора миші зупиняємо анімацію
    });
    firstStep.addEventListener('mouseleave', () => {
      sa.play(); // При виході курсора миші відновлюємо анімацію
    });

    return () => {
      // Прибираємо обробники подій при знищенні компонента
      firstStep.removeEventListener('mouseover', () => {
        sa.pause();
      });
      firstStep.removeEventListener('mouseleave', () => {
        sa.play();
      });
    };
  }, []);

  return (
    <section className="payday">
      <div className="container">
        <div className="payday__content">
          <div className="promo__IMG">
            <img src={promoImg} alt="promo" />
          </div>
          <div className="payday__text">
            <div className="payday__title">
              <span className="payday__title-highlight">
                <span>PAYDAY</span>
              </span>
              SALE NOW
              <div className="payday__desc-1">
                Spend minimal $100 get 30% off voucher code for your next purchase
              </div>
              <div className="payday__desc-2">
                <span>1 June - 10 June 2021</span> <br />
                *Terms & Conditions apply
              </div>
            </div>
            <div className="payday__btn_wrapper">
              <a href="!#" className="btn payday__btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payday;
