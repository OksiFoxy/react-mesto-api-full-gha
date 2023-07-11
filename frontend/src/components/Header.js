import headerLogo from '../images/header_logo.svg';
import { Link } from "react-router-dom";

const Header = ({ title, route, email, onClick }) => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип" />
      <div className="header__auth">
        <p className="header__email">{email}</p>
        <Link to={route} className="header__link" onClick={onClick}>{title}</Link>
      </div>
    </header>
  )
}

export default Header;
