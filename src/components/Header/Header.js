import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

function Header({loggedIn}) {
    return (
        <header className={loggedIn ? "header header__account" : "header header__auth"}>
            <div className="header__content">
                <Link to="/" className="header__logo-link">
                    <img className="header__logo" src={logo} alt="Логотип"/>
                </Link>
                <HeaderNavigation loggedIn={loggedIn} />
            </div>
        </header>
    );
}

export default Header;
