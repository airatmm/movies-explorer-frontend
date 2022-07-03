import './FilterCheckbox.css';

const FilterCheckbox = () => {
    return (
        <label htmlFor="search__form-checkbox_input" className="search__form-checkbox_label">
        <input
            className="search__form-checkbox_input"
            type="checkbox"
            id="search__form-checkbox_input"
            name="search__form-checkbox_input"
        />
        <span className="search__form-checkbox_switch"/>
        <span className="search__form-checkbox_text">Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;
