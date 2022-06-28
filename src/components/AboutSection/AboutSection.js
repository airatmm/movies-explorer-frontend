import './AboutSection.css';

const AboutSection = ({ name, title, children }) => {
    return (
        <section className={`about-section about-section__${name}`} id={`${name}`}>
            <h2 className={`about-section__title about-section__title-${name}`}>{title}</h2>
            {children}
        </section>
    )
}

export default AboutSection;
