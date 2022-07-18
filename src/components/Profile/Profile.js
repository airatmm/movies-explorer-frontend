import './Profile.css';
import { useEffect, useState, useContext } from 'react';
import Section from "../Section/Section";
import CurrentUserContext  from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useForm';

const Profile = ({ onSignOut, onUpdateUser, message }) => {

    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const [matchedValues, setMatchedValues] = useState(false);

    const checkInputValues = () => {
        if (currentUser.email === values.email ||
            currentUser.name === values.name) {
            setMatchedValues(false);
        } else {
            setMatchedValues(true);
        }
    }

    useEffect(() => {
        checkInputValues();
    },[currentUser, handleChange, values, isValid, matchedValues])



    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser({
            name: values.name || currentUser.name,
            email: values.email || currentUser.email,
        });
        checkInputValues();
    }


    const submitButtonClassName = `${!isValid ? "profile__button_edit profile__button_edit_disabled" : "profile__button_edit link"}`

    return (
        <Section name="profile">
            <h3 className="profile__title">
                Привет, {currentUser.name}!
            </h3>
            <form className="profile__form" name="profile" onSubmit={handleSubmit}>
                <fieldset className="profile__fieldset">
                    <label className="profile__label">
                        <span className="profile__text">Имя</span>
                        <input
                            className="profile__input"
                            type="text"
                            minLength="2"
                            maxLength="30"
                            name="name"
                            id="input-name"
                            required
                            defaultValue={currentUser.name || ""}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </label>
                    <span className="profile__input-error" id="input-name-error">{errors.name}</span>
                    <span className="form__line" />

                    <label className="profile__label">
                        <span className="profile__text">E-mail</span>
                        <input
                            className="profile__input"
                            type="email"
                            minLength="3"
                            maxLength="50"
                            name="email"
                            id="input-email"
                            required
                            defaultValue={currentUser.email || ""}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </label>
                        <span className="profile__input-error" id="input-email-error">{errors.email || ""}</span>
                </fieldset>
                <span className="profile__input-error">{message}</span>
                <div className="profile__button">
                    <button type="submit" disabled={!matchedValues || !isValid} className={submitButtonClassName}>Редактировать</button>
                    <button onClick={onSignOut} type="submit" className="profile__button_signout link" >Выйти из аккаунта</button>
                </div>
            </form>

        </Section>
    )
}

export default Profile;
