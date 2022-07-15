import './FilterCheckbox.css';

const FilterCheckbox = ({ onClickCheckbox, isCheckboxOn }) => {
    return (
            <label htmlFor="search-form-checkbox" className="search__form-checkbox_label link">
            <input
                className="search__form-checkbox_input"
                type="checkbox"
                id="search-form-checkbox"
                name="search-form-checkbox"
                onClick={onClickCheckbox}
                defaultChecked={isCheckboxOn}
            />
            <span className="search__form-checkbox_switch"/>
            </label>
    )
}

export default FilterCheckbox;
