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
                    id="search__form"
                    required
                    // onChange={handleShortMovieChange}
                />
                <button type="submit" className="search__button link"><i className="fa fa-search"/></button>
                </fieldset>
                <FilterCheckbox />
            </form>
        </section>

    )
}

export default SearchForm;
