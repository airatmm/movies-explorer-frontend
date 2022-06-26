import React from 'react';

const Login = ({onLogin}) => {
    const handleSubmit = () => {
        onLogin();
    }
    return (
        <div onSubmit={handleSubmit} className="login">
            Login page
        </div>
    )
}

export default Login;
