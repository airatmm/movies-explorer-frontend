import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

const FilterCheckbox = ({ onClickCheckbox, isCheckboxOnMovies, isCheckboxOnSavedMovies }) => {

    const location = useLocation();
    const path = location.pathname;
    const locationMovies = path === "/movies";

    const handleClickCheckbox = () => {
        onClickCheckbox();
    }

    return (
            <label htmlFor="search-form-checkbox" className="search__form-checkbox_label link">
            <input
                className="search__form-checkbox_input"
                type="checkbox"
                id="search-form-checkbox"
                name="search-form-checkbox"
                onChange={handleClickCheckbox}
                checked={locationMovies ? isCheckboxOnMovies : isCheckboxOnSavedMovies}
            />
            <span className="search__form-checkbox_switch"/>
            </label>
    )
}

export default FilterCheckbox;
