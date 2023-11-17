import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import PropTypes from 'prop-types';
import AuthFormContainer from '../AuthFormContainer/AuthFormContainer';
import AuthFormTitle from '../AuthFormTitle/AuthFormTitle';
import AuthNav from '../AuthNav/AuthNav';
import Logo from '../Logo/Logo';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';

function Login({ onLogin, isPreloading }) {

    function handleSubmit(values) {
        const { email, password } = values;
        onLogin(password, email);
    }

    return (
        <AuthFormContainer>
            <Logo />
            <AuthFormTitle
                title='Рады снова видеть!'
            />
            <AuthForm
                onSubmit={handleSubmit}
            >
                <SubmitFormButton
                    buttonText='Войти'
                    isPreloading={isPreloading}
                />
            </AuthForm>
            <AuthNav
                questionText='Еще не зарегистрированы?'
                linkText='Регистрация'
                linkTo='/signup'
            />
        </AuthFormContainer>
    );
}

Login.propTypes = {
    onLogin: PropTypes.func,
    isPreloading: PropTypes.bool,
};

export default Login;