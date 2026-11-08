import logo from '../assets/images/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.leadzai.com/"
        >
          <img src={logo} className="header-logo" alt="logo" />
        </a>
      </div>
      <div className="header-center">
        Weather App
      </div>
      <div className="header-right">
        {/* Place something here later */}
      </div>
    </header>
  );
}

export default Header;