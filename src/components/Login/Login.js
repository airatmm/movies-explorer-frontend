import SectionForm from "../SectionForm/SectionForm";
import useFormWithValidation from '../../hooks/useForm';

const Login = ({onLogin, isLoading, badRequest }) => {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const {email, password} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password || !email) {
            return;
        }
        onLogin(email, password);
    }

    const submitButtonClassName = `${!isValid ? "form__sign-button form__submit-button_disabled" : "form__sign-button link"}`;

    return (
            <SectionForm
                name="login"
                title="Рады видеть!"
                buttonText={isLoading ? 'Вход...' : 'Войти'}
                formText="Ещё не зарегистрированы?"
                url="/signup"
                formLinkText="Регистрация"
                handleSubmit={handleSubmit}
                submitButtonClassName={submitButtonClassName}
                badRequest={badRequest}
            >
                <label className="form__label">E-mail</label>
                <input
                    className={errors.email ? "form__input form__input-email form__input_not-valid" : "form__input form__input-email"}
                    type="email"
                    minLength="3"
                    maxLength="50"
                    name="email"
                    id="input-email"
                    required
                    pattern="([^@\s]+@[^@\s]+\.[^@\s])+[A-Za-z]+"
                    value={values.email || ""}
                    onChange={handleChange}
                />
                <span className="form__input-error" id="input-email-error">{errors.email || ""}</span>

                <label className="form__label">Пароль</label>
                <input
                    className={errors.password ? "form__input form__input-password form__input_not-valid" : "form__input form__input-email"}
                    type="password"
                    minLength="6"
                    maxLength="50"
                    name="password"
                    id="input-password"
                    required
                    value={values.password || ""}
                    onChange={handleChange}
                />
                <span className="form__input-error" id="input-password-error">{errors.password || ""}</span>
            </SectionForm>
    )
}

export default Login;
