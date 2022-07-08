import './FilterCheckbox.css';

const FilterCheckbox = () => {
    return (
            <label htmlFor="search-form-checkbox" className="search__form-checkbox_label link">
            <input
                className="search__form-checkbox_input"
                type="checkbox"
                id="search-form-checkbox"
                name="search-form-checkbox"
            />
            <span className="search__form-checkbox_switch"/>
            </label>
    )
}

export default FilterCheckbox;
