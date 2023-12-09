import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import PropTypes from 'prop-types';
import AuthNav from '../AuthNav/AuthNav';
import registerLogo from '../../images/header__logo.svg';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import './Register.css';

function Register ({ onRegister, isPreloading, errorMessage }) {
    const [formIsValid, setFormIsValid] = useState(false);

    function handleValidChange(isValid) {
        setFormIsValid(isValid);
    }

    function handleSubmit(values) {
        const { name, email, password } = values;
        onRegister(name, email, password);
    }

    return (
        <main className='main'>
            <section className='register'>
                <div
                    className='register__container'>
                    <img
                        className='register__logo'
                        alt='Логотип сайта'
                        src={registerLogo} />
                    <h1
                        className='register__title'>
                            Добро пожаловать!</h1>
                    <AuthForm
                        onSubmit={handleSubmit}
                        isRegistration={true}
                        onValidChange={handleValidChange}
                    >
                        <SubmitFormButton
                            buttonText='Зарегистрироваться'
                            isPreloading={isPreloading}
                            isFormValid={formIsValid}
                            errorMessage={errorMessage}
                        />
                    </AuthForm>
                    <AuthNav
                        questionText='Уже зарегистрированы?'
                        linkText='Войти'
                        linkTo='/signin'
                    />
                </div>
            </section>
        </main>
    );
}

Register.propTypes = {
    onRegister: PropTypes.func,
    isPreloading: PropTypes.bool,
    errorMessage: PropTypes.string,
};

export default Register;