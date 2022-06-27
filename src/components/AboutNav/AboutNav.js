import './AboutNav.css';
import Navigation from '../Navigation/Navigation';

const AboutNav = () => {
    return (
        <Navigation name="about-nav">
            <ul className="about-nav__menu">
                <li className="about-nav__menu-item"><a href="#" className="about-nav__menu-link">Технологии</a></li>
                <li className="about-nav__menu-item"><a href="#" className="about-nav__menu-link">Студент</a></li>
                <li className="about-nav__menu-item"><a href="#" className="about-nav__menu-link">О проекте</a></li>
            </ul>
        </Navigation>
    )
}

export default AboutNav;
