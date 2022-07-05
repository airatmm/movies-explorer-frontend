import SectionForm from "../SectionForm/SectionForm";

const Login = () => {

    return (
            <SectionForm
                name="login"
                title="Рады видеть!"
                buttonText="Войти"
                formText="Ещё не зарегистрированы?"
                url="/signup"
                formLinkText="Регистрация"
            >
                <label className="form__label">E-mail</label>
                <input
                    className="form__input form__input-email"
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

export default Login;
