import './NavTab.css';
import Navigation from '../Navigation/Navigation';

const NavTab = () => {
    return (
        <Navigation name="nav-tab">
            <ul className="nav-tab__menu">
                <li className="nav-tab__menu-item"><a href="#project" className="nav-tab__menu-link">О проекте</a></li>
                <li className="nav-tab__menu-item"><a href="#techs" className="nav-tab__menu-link">Технологии</a></li>
                <li className="nav-tab__menu-item"><a href="#me" className="nav-tab__menu-link">Студент</a></li>
            </ul>
        </Navigation>
    )
}

export default NavTab;
