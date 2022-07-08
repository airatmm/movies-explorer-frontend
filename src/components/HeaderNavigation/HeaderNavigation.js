import "./HeaderNavigation.css";
import { Link, NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const setActiveLink = ({isActive}) => isActive ? "navigation__Link navigation__Link-active link " : "navigation__Link link";

const HeaderNavigation = ({ loggedIn }) => {

    if (loggedIn) {
        return (
            <Navigation name="header__navigation">
                <NavLink className={setActiveLink} to="/movies">Фильмы</NavLink>
                <NavLink className={setActiveLink} to="/saved-movies">Сохранённые фильмы</NavLink>
            </Navigation>
        )
    }
    return (
        <Navigation name="header__navigation header__navigation_no-auth">
                  <Link className="navigation__Link navigation__Link_no-auth" to="/signup">Регистрация</Link>
                  <Link className="navigation__Link navigation__Link_no-auth" to="/signin">Войти</Link>
        </Navigation>
  )
}

export default HeaderNavigation;
