import './SectionForm.css';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const SectionForm = ({name, title, children}) => {
  return (
      <section className={`section__form section__form_${name}`}>
        <form className="form__content">
            <Link to="/" className="header__logo-link">
                <img className="header__logo" src={logo} alt="Логотип"/>
            </Link>
            <h3 className="form__title">{title}</h3>
            <fieldset className="form__fieldset">
                {children}
            </fieldset>
        </form>
      </section>
  )
}

export default SectionForm;
