import './Techs.css';
import AboutSection from '../AboutSection/AboutSection';

const Techs = () => {
    return (
        <AboutSection name="techs" title="Технологии">
            <div className="techs__wrap">
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__stack">
                <li className="techs__stack-item">HTML</li>
                <li className="techs__stack-item">CSS</li>
                <li className="techs__stack-item">JS</li>
                <li className="techs__stack-item">React</li>
                <li className="techs__stack-item">Git</li>
                <li className="techs__stack-item">Express.js</li>
                <li className="techs__stack-item">mongoDB</li>
            </ul>
            </div>
        </AboutSection>
    )
}

export default Techs;
