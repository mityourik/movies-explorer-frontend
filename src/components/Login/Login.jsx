import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import PropTypes from 'prop-types';

function Login({ onLogin, isPreloading }) {

    function handleSubmit(values) {
        const { email, password } = values;
        onLogin(password, email);
    }

    return (
        <AuthForm
            title='Рады видеть!'
            onSubmit={handleSubmit}
            buttonText='Войти'
            isPreloading={isPreloading}
        />
    );
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
    isPreloading: PropTypes.bool,
};

export default Login;