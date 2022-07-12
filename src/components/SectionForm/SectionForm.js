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
        formLinkText,
        handleSubmit,
        disabled,
        submitButtonClassName,
        badRequest

    }
    ) => {

  return (
      <main className="main">
          <section className={`section__form section__form_${name}`}>
              <form className="form__content" name={name} onSubmit={handleSubmit}>
                  <div className="form__wrap">
                      <Logo/>
                      <h3 className="form__title">{title}</h3>
                      <fieldset className="form__fieldset">
                          {children}
                      </fieldset>
                      {badRequest && <span className="form__input-error">{badRequest}</span>}
                  </div>
                  <div className="form__sign">
                      <button disabled={disabled} type="submit" className={submitButtonClassName}/*"form__sign-button link"*/>{buttonText}</button>
                      <span className="form__text">{formText}&nbsp;
                          <Link to={url} className="form_link link">{formLinkText}</Link>
                </span>
                  </div>
              </form>
          </section>
      </main>
  )
}

export default SectionForm;
