import './Promo.css';
import NavTab from "../NavTab/NavTab";
import Section from "../Section/Section";

const Promo = () => {
    return (
        <Section name="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <NavTab />
        </Section>
    )
}

export default Promo;
