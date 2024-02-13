import './header.css'
import logoIMG from '../../img/icons/logo.svg'

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoIMG} alt="logo" />
            <span>FASHION</span>
          </div>
          <div className="header__nav">NAV</div>
        </div>
      </div>
    </header>
  );
}

export default Header