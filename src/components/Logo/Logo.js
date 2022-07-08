import './Logo.css';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Logo = () => {
    return (
        <Link to="/" className="header__logo-link link">
            <img className="header__logo" src={logo} alt="Логотип"/>
        </Link>
    )
}

export default Logo;
