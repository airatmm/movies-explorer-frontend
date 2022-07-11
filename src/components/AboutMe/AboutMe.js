import './AboutMe.css';
import AboutSection from '../AboutSection/AboutSection';
import aboutMe from '../../images/aboutme.png';

const AboutMe = () => {
    return (
        <AboutSection name="me" title="Обо мне">
            <div className="me__content">
                <div className="me__profile">
                <h3 className="me__name">Айрат</h3>
                <h4 className="me__job">Фронтенд-разработчик, 37 лет</h4>
                <p className="me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <ul className="me__links">
                    <li className="me__links-item"><a className="me__link link" target="_blank" rel="noreferrer"  href="https://github.com/airatmm">Github</a></li>
                    <li className="me__links-item"><a className="me__link link" target="_blank" rel="noreferrer"  href="https://github.com/airatmm">Facebook</a></li>
                </ul>
                </div>
                <img className="me__photo" src={aboutMe} alt="Фото"/>
            </div>
        </AboutSection>
    )
}

export default AboutMe;
