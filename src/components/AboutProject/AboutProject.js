import './AboutProject.css';
import AboutSection from '../AboutSection/AboutSection';

const AboutProject = () => {
    return (
        <AboutSection name="project" title="О проекте">
            <div className="project__stage">
                <div className="project__stage_item">
                <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="project__stage_item">
                <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
         </AboutSection>
    )
}

export default AboutProject;
