import logo from '../assets/images/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.leadzai.com/"
      >
        <img src={logo} className="header-logo" alt="logo" />
      </a>
      Weather App
    </header>
  );
}

export default Header;