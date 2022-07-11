import SectionForm from "../SectionForm/SectionForm";
import { useState } from 'react';

const Login = ({onLogin, isLoading}) => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.email || !data.password) {
            console.log(data.email)
            console.log(data.password)
            return;
        }
        const {email, password} = data;
        onLogin(email, password);
    }

    return (
            <SectionForm
                name="login"
                title="Рады видеть!"
                buttonText={isLoading ? 'Вход...' : 'Войти'}
                formText="Ещё не зарегистрированы?"
                url="/signup"
                formLinkText="Регистрация"
                handleSubmit={handleSubmit}
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
                    value={data.email}
                    onChange={handleChange}
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
                    value={data.password}
                    onChange={handleChange}
                />
                <span className="form__input-error"/>
            </SectionForm>
    )
}

export default Login;
