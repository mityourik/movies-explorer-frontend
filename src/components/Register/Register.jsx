import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import PropTypes from 'prop-types';
import AuthFormContainer from '../AuthFormContainer/AuthFormContainer';
import AuthFormTitle from '../AuthFormTitle/AuthFormTitle';
import AuthNav from '../AuthNav/AuthNav';
import Logo from '../Logo/Logo';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';

function Register ({ onRegister, isPreloading }) {

    function handleSubmit(values) {
        const { email, password } = values;
        onRegister(password, email);
    }

    return (
        <AuthFormContainer>
            <Logo />
            <AuthFormTitle
                title='Добро пожаловать!'
            />
            <AuthForm
                onSubmit={handleSubmit}
                isRegistration={true}
            >
                <SubmitFormButton
                    buttonText='Зарегистрироваться'
                    isPreloading={isPreloading}
                />
            </AuthForm>
            <AuthNav
                questionText='Уже зарегистрированы?'
                linkText='Войти'
                linkTo='/signin'
            />
        </AuthFormContainer>
    );
}

Register.propTypes = {
    onRegister: PropTypes.func,
    isPreloading: PropTypes.bool,
};

export default Register;