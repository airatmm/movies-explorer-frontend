import './Profile.css';
import { useEffect, useState } from 'react';
import Section from "../Section/Section";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({/*name,/* email, */currentUser, onSignOut }) => {
    // console.log(currentUser);
    //const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value);
    }
    return (
        <Section name="profile">
            <form className="profile__form">
                <h3 className="profile__title">
                    Привет, {currentUser.name}!
                </h3>
                <fieldset className="profile__fieldset">
                    <label className="profile__label">
                        <span className="profile__text">Имя</span>
                        <input
                            className="profile__input"
                            type="text"
                            minLength="2"
                            maxLength="30"
                            name="name"
                            id="input-profile"
                            required
                            value={currentUser.name}
                            onChange={handleNameChange}
                        />
                        <span className="profile__input-error"/>
                    </label>
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
                            value={currentUser.email}
                            onChange={handleEmailChange}
                        />
                        <span className="profile__input-error"/>
                    </label>
                </fieldset>
            </form>
            <div className="profile__button">
                <button type="submit" className="profile__button_edit link" >Редактировать</button>
                <button onClick={onSignOut} type="submit" className="profile__button_signout link" >Выйти из аккаунта</button>
            </div>
        </Section>
    )
}

export default Profile;
