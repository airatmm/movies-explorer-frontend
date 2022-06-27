import './AboutSection.css';

const AboutSection = ({ name, title, children }) => {
    return (
        <section className={`about-section ${name}`} id={`${name}`}>
            <h2 className={`about-section__title`}>{title}</h2>
            {children}
        </section>
    )
}

export default AboutSection;
