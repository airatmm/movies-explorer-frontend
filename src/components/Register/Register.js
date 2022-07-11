import './Register.css';
import { useState } from 'react';
import SectionForm from "../SectionForm/SectionForm";

const Register = ({onRegister, isLoading}) => {
    const [data, setData] = useState({
        name:"",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, password} = data;
        onRegister(name, email, password);
        setData({ name: '', email: '', password: '' });

    }

    return (
        <SectionForm
            name="register"
            title="Добро пожаловать!"
            buttonText={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
            formText="Уже зарегистрированы?"
            url="/signin"
            formLinkText="Войти"
            handleSubmit={handleSubmit}
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
                value={data.name}
                onChange={handleChange}
            />
            <span className="form__input-error"/>

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

export default Register;
