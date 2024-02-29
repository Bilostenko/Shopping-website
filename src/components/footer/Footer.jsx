import './footer.css'

import fb from '../../img/socials/fb.svg'
import inst from '../../img/socials/inst.svg'
import twitter from '../../img/socials/tw.svg'
import linkdn from '../../img/socials/in.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
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
            <div class="footer__column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div class="footer__column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Share location</a></li>
                <li><a href="#">Orders Tracking</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div class="footer__column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Terms & conditions</a></li>
                <li><a href="#">Privacy Police</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;