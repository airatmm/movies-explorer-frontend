import './Profile.css';
import { useEffect, useState, useContext } from 'react';
import Section from "../Section/Section";
import CurrentUserContext  from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useForm';

const Profile = ({ onSignOut, onUpdateUser, message }) => {
    // console.log(currentUser);
    // const currentUser = useContext(CurrentUserContext);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    //
    // useEffect(() => {
    //     setName(currentUser.name);
    //     setEmail(currentUser.email);
    // }, [currentUser]);
    //
    // const handleNameChange = (evt) => {
    //     setName(evt.target.value);
    // }
    //
    // const handleEmailChange = (evt) => {
    //     setEmail(evt.target.value);
    // }
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, errors, setValues, isValid } = useFormWithValidation();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        const disabled = !isValid
        setDisabled(disabled);
    }, [isValid]);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     props.onUpdateUser({
    //         name: values.name || currentUser.name,
    //         email: values.email || currentUser.email,
    //     });
    // }

    const handleSubmit = (e) => {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        const {name, email} = values;
        onUpdateUser({
            name: name,
            email: email
        });
        // setValues(values);
    }
    // props.onUpdateUser({
    //     name: values.name || currentUser.name,
    //     email: values.email || currentUser.email,
    // });

    const submitButtonClassName = `${disabled ? "profile__button_edit profile__button_edit_disabled" : "profile__button_edit link"}`

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
                            value={values.name || currentUser.name || ""}
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
                            value={values.email || currentUser.email || ""}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </label>
                        <span className="profile__input-error" id="input-email-error">{errors.email || ""}</span>
                </fieldset>
                <span className="profile__input-error">{message}</span>
                <div className="profile__button">
                    <button type="submit" disabled={disabled} className={submitButtonClassName}>Редактировать</button>
                    <button onClick={onSignOut} type="submit" className="profile__button_signout link" >Выйти из аккаунта</button>
                </div>
            </form>

        </Section>
    )
}

export default Profile;
