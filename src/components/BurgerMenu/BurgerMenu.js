import './BurgerMenu.css';
import { NavLink } from "react-router-dom";
import Account from "../Account/Account";
// import Hamburger from "../Hamburger/Hamburger";

const setActiveBurgerLink = ({isActive}) => isActive ? "burger-menu__link burger-menu__link_is-active" : "burger-menu__link";

const BurgerMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`burger-menu ${isOpen ? 'burger-menu_is-open' : ''}`}>
            <div className="burger-menu_content">
                <div className="burger-menu__link-list">
                    <NavLink
                        to="/"
                        className={setActiveBurgerLink}
                        onClick={onClose}
                    >
                        Главная
                    </NavLink>

                    <NavLink
                        to="/movies"
                        className={setActiveBurgerLink}
                        onClick={onClose}
                    >
                        Фильмы
                    </NavLink>

                    <NavLink
                        to="/saved-movies"
                        className={setActiveBurgerLink}
                        onClick={onClose}
                    >
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <Account onClose={onClose} />
            </div>
        </div>
    );
}

export default BurgerMenu;
