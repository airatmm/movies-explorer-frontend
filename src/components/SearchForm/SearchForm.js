import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
    return (
        <section className="search__section">
            <form className="search__form" noValidate>
                <fieldset className="search__form-fieldset">
                <input
                    className="search__form-input"
                    type="search"
                    minLength="1"
                    name="search"
                    placeholder="Фильм"
                    // autofocus={true}
                    id="search__form"
                    required
                    // onChange={handleNameChange}
                />
                <button type="submit" className="search__button"><i className="fa fa-search"/></button>
                </fieldset>
                <FilterCheckbox />
            </form>
        </section>

    )
}

export default SearchForm;
