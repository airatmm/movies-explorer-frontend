import './SectionForm.css';
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const SectionForm = (
    {
        children,
        name,
        title,
        buttonText,
        formText,
        url,
        formLinkText

    }
    ) => {
  return (
      <section className={`section__form section__form_${name}`}>
        <form className="form__content">
            <Logo />
            <h3 className="form__title">{title}</h3>
            <fieldset className="form__fieldset">
                {children}
            </fieldset>
            <button type="submit" className="form__sign-button link">{buttonText}</button>
            <span className="form__text">{formText}&nbsp;
                <Link to={url} className="form_link link">{formLinkText}</Link>
            </span>
        </form>
      </section>
  )
}

export default SectionForm;
