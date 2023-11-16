import React from 'react';
import './Register.css';
import registerLogo from '../../images/header__logo.svg';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import PropTypes from 'prop-types';

function Register ({ onRegister, isPreloading }) {

    function handleSubmit(values) {
        const { email, password } = values;
        onRegister(password, email);
    }

    return (
        <section className='register'>
            <div className='register__container'>
                <img
                    className='register__logo'
                    src={registerLogo}
                />
                <AuthForm
                    title='Добро пожаловать!'
                    onSubmit={handleSubmit}
                    buttonText='Зарегистрироваться'
                    isPreloading={isPreloading}
                    isRegistration={true}
                >
                    <div className='register__nav-container'>
                        <p
                            className='register__paragraph'>
            Уже зарегистрированы?&nbsp;
                        </p>
                        <Link
                            className='register__link'
                            to='/signin'
                        >
            Войти
                        </Link>
                    </div>
                </AuthForm>
            </div>
        </section>
    );
}

Register.propTypes = {
    onRegister: PropTypes.func.isRequired,
    isPreloading: PropTypes.bool,
};

export default Register;