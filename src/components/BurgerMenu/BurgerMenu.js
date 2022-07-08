import './BurgerMenu.css';
import { NavLink } from "react-router-dom";
import Account from "../Account/Account";
// import Hamburger from "../Hamburger/Hamburger";

const setActiveBurgerLink = ({isActive}) => isActive ? "burger-menu__link burger-menu__link_is-active" : "burger-menu__link";

const BurgerMenu = ({ isOpen }) => {
    return (
        <div className={`burger-menu ${isOpen ? 'burger-menu_is-open' : ''}`}>
            {/*<Hamburger onClick={closeHandler}/>*/}
            <div className="burger-menu__link-list">
                <NavLink
                    to="/"
                    className={setActiveBurgerLink}
                >
                    Главная
                </NavLink>

                <NavLink
                    to="/movies"
                    className={setActiveBurgerLink}
                >
                    Фильмы
                </NavLink>

                <NavLink
                    to="/saved-movies"
                    className={setActiveBurgerLink}
                >
                    Сохранённые фильмы
                </NavLink>
            </div>
            <Account />
        </div>
    );
}

export default BurgerMenu;
