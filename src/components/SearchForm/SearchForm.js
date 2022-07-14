import './SearchForm.css';
import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../../hooks/useForm';

const SearchForm = ({ isLoading, onSearch, onClickCheckbox }) => {
    const { values, handleChange, isValid, resetForm } = useFormWithValidation();
    const [error, setError] = useState('');

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.search) {
            setError('Необходимо написать запрос');
            // setTimeout(() => {
            //     setError('');
            // }, 5000);
        } else {
            onSearch(values.search);
            resetForm();
        }
    }
    const submitButtonClassName = `${!isValid ? "search__button search__button_disabled" : "search__button link"}`;

    return (
        <section className="section__search">
            <form className="search__form" onSubmit={handleSubmit}>
                <fieldset className="search__form-fieldset">
                <input
                    className="search__form-input"
                    type="search"
                    minLength="1"
                    name="search"
                    placeholder="Фильм"
                    id="search__form"
                    autoComplete="off"
                    autoFocus={true}
                    onChange={handleChange}
                    required
                    value={values.search || ''}
                    disabled={isLoading}
                />
                <button type="submit" disabled={!isValid} className={submitButtonClassName} />
                </fieldset>
                {error && <span className="search__form_error">{error}</span>}
                <div className="search__form_short">
                <FilterCheckbox onClickCheckbox={onClickCheckbox}/>
                    <p className="search__form_text">Короткометражки</p>
                </div>
            </form>
        </section>

    )
}

export default SearchForm;
