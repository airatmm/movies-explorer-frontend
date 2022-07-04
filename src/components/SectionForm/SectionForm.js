import './SectionForm.css';

const SectionForm = ({title}) => {
  return (
      <section className={`section__form section__form_${name}`}>
        <form className="form__content">
        <h3 className="form__title">{title}</h3>
        </form>
      </section>
  )
}

export default SectionForm;
