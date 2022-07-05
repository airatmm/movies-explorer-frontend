import './Register.css';
import SectionForm from "../SectionForm/SectionForm";

const Register = () => {
    return (
        <SectionForm
            name="register"
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            formText="Уже зарегистрированы?"
            url="/signin"
            formLinkText="Войти"
        >
            <label className="form__label">Имя</label>
            <input
                className="form__input"
                type="text"
                minLength="2"
                maxLength="30"
                name="name"
                id="input-form"
                required
                // value="Виталий"
            />
            <span className="form__input-error"/>

        <label className="form__label">E-mail</label>
            <input
                className="form__input"
                type="email"
                minLength="3"
                maxLength="50"
                name="email"
                id="input-email"
                required
                //value="pochta@yandex.ru"
            />
            <span className="form__input-error"/>

            <label className="form__label">Пароль</label>
                <input
                    className="form__input"
                    type="password"
                    minLength="3"
                    maxLength="50"
                    name="password"
                    id="input-password"
                    required
                    //value="pochta@yandex.ru"
                />
                <span className="form__input-error"/>
        </SectionForm>
    )
}

export default Register;
