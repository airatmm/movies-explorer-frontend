import './Register.css';
import SectionForm from "../SectionForm/SectionForm";
import useFormWithValidation from '../../hooks/useForm';

const Register = ({ onRegister, isLoading, badRequest }) => {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.password || !values.email || !values.name) {
            return;
        }
        const {name, email, password} = values;
        onRegister(name, email, password);
    }

    const submitButtonClassName = `${!isValid ? "form__sign-button form__submit-button_disabled" : "form__sign-button link"}`;

    return (
        <SectionForm
            name="register"
            title="Добро пожаловать!"
            buttonText={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
            formText="Уже зарегистрированы?"
            url="/signin"
            formLinkText="Войти"
            handleSubmit={handleSubmit}
            submitButtonClassName={submitButtonClassName}
            badRequest={badRequest}
        >
            <label className="form__label">Имя</label>
            <input
                className={errors.name ? "form__input form__input-name form__input_not-valid" : "form__input form__input-email"}
                type="text"
                minLength="2"
                maxLength="30"
                name="name"
                id="input-name"
                required
                value={values.name || ""}
                onChange={handleChange}
            />
            <span className="form__input-error" id="input-name-error">{errors.name || ""}</span>

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

export default Register;
