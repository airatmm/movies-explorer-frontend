import "./HeaderNavigation.css";
import { NavLink } from 'react-router-dom';
import accountIcon from '../../images/accountIcon.svg';
import Navigation from '../Navigation/Navigation';

const setActiveLink = ({isActive}) => isActive ? "header__nav-link header__nav-link_account-active" : "header__nav-link header__nav-link_account";

const HeaderNavigation = ({loggedIn}) => {
    if (loggedIn) {
        return (
            <>
                <Navigation name="header__account" loggedIn={true}>
                    <ul className="header__nav header__nav_movies">
                        <li className="header__nav-item">
                            <NavLink className={setActiveLink}
                                     to="/movies">Фильмы</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink className={setActiveLink}
                                     to="/saved-movies">Сохранённые фильмы</NavLink>
                        </li>
                    </ul>
                </Navigation>
                <Navigation name="header__account" loggedIn={true}>
                    <ul className="header__nav">
                        <li className="header__nav-item">
                            <NavLink to="/profile" className="header__nav-link header__nav-link_profile">
                                <img className="header__account-icon" src={accountIcon} alt="Аккаунт"/>
                                <span className="header__account-text">Аккаунт</span>
                            </NavLink>
                        </li>
                    </ul>
                </Navigation>
            </>
        )
    }
    return (
        <Navigation name="header__auth" loggedIn={false}>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <NavLink className="header__nav-link header__nav-link_sign" to="/signup">Регистрация</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink className="header__nav-link header__nav-link_sign" to="/signin">Войти</NavLink>
                </li>
            </ul>
        </Navigation>
    )
}

export default HeaderNavigation;
