import './Section.css';

const Section = ({name, children}) => {
    return (
        <main className="main">
            <section className={`section section__${name}`}>
                {children}
            </section>
        </main>
    )

}

export default Section;
