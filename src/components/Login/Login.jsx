import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import PropTypes from 'prop-types';
import AuthNav from '../AuthNav/AuthNav';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import loginLogo from '../../images/header__logo.svg';
import './Login.css';

function Login({ onLogin, isPreloading, errorMessage }) {
    const [formIsValid, setFormIsValid] = useState(false);

    function handleValidChange(isValid) {
        setFormIsValid(isValid);
    }

    function handleSubmit(values) {
        const { email, password } = values;
        onLogin(password, email);
    }

    return (
        <main className='main'>
            <div className='login'>
                <div className='login__container'>
                    <img
                        className='login__logo'
                        src={loginLogo} />
                    <h1
                        className='login__title'>
                        Рады видеть!</h1>
                    <AuthForm
                        onSubmit={handleSubmit}
                        onValidChange={handleValidChange}
                    >
                        <SubmitFormButton
                            buttonText='Войти'
                            isPreloading={isPreloading}
                            isFormValid={formIsValid}
                            errorMessage={errorMessage}
                        />
                    </AuthForm>
                    <AuthNav
                        questionText='Еще не зарегистрированы?'
                        linkText='Регистрация'
                        linkTo='/signup'
                    />
                </div>
            </div>
        </main>
    );
}

Login.propTypes = {
    onLogin: PropTypes.func,
    isPreloading: PropTypes.bool,
    errorMessage: PropTypes.string
};

export default Login;