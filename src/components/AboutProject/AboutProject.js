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
            <div className="project__progress">
                <p className="project__progress-item project__progress-item_backend">1 неделя</p>
                <p className="project__progress-item project__progress-item_frontend">4 недели</p>
                <p className="project__progress-item project__progress-item_title">Back-end</p>
                <p className="project__progress-item project__progress-item_title">Front-end</p>
            </div>
         </AboutSection>
    )
}

export default AboutProject;
