import './Profile.css';
import Section from "../Section/Section";

const Profile = () => {
    return (
        <Section name="profile">
            <form className="profile__form">
                <h3 className="profile__title">Привет, Виталий!</h3>
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
                           // value="Виталий"
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
                            //value="pochta@yandex.ru"
                        />
                        <span className="profile__input-error"/>
                    </label>
                </fieldset>
            </form>
            <div className="profile__button">
                <button type="submit" className="profile__button_edit link" >Редактировать</button>
                <button type="submit" className="profile__button_signout link" >Выйти из аккаунта</button>
            </div>
        </Section>
    )
}

export default Profile;
