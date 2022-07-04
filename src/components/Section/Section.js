import './Section.css';

const Section = ({name, children}) => {
    return (
        <section className={`section section__${name}`}>
            {children}
        </section>
    )

}

export default Section;
