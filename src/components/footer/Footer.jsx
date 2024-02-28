import './footer.css'

import fb from '../../img/socials/fb.svg'
import inst from '../../img/socials/inst.svg'
import twitter from '../../img/socials/tw.svg'
import linkdn from '../../img/socials/in.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__social">
          <h3 className="footer__social-title">FASHION</h3>
          <p className="footer__social-desc">Complete your style with awesome clothes from us.</p>
          <ul className="footer__social-list">
            <li className="footer__social-item"><img src={fb} alt="facebook" /></li>
            <li className="footer__social-item"><img src={inst} alt="instagram" /></li>
            <li className="footer__social-item"><img src={twitter} alt="twitter" /></li>
            <li className="footer__social-item"><img src={linkdn} alt="linkedin" /></li>
          </ul>
        </div>
        <div className="footer__contacts">

        </div>
      </div>
    </footer>
  );
}

export default Footer;