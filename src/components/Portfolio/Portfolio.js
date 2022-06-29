import './Portfolio.css';
import AboutSection from '../AboutSection/AboutSection';

const Portfolio = () => {
    return(
        <AboutSection name="portfolio" title="Портфолио">
            <ul className="portfolio__project">
                <li className="portfolio__project-item">
                    <a href="https://airatmm.github.io/how-to-learn/index.html" className="portfolio__project-link link" target="_blank" rel="noreferrer">Статичный сайт</a>
                    <span className="portfolio__project-jump">↗</span>
                </li>
                <li className="portfolio__project-item">
                    <a href="https://airatmm.github.io/russian-travel/" className="portfolio__project-link link" target="_blank" rel="noreferrer">Адаптивный сайт</a>
                    <span className="portfolio__project-jump">↗</span>
                </li>
                <li className="portfolio__project-item">
                    <a href="https://github.com/airatmm/react-mesto-api-full" className="portfolio__project-link link" target="_blank" rel="noreferrer">Одностраничное приложение</a>
                    <span className="portfolio__project-jump">↗</span>
                </li>
            </ul>
        </AboutSection>
    )
}

export default Portfolio;
