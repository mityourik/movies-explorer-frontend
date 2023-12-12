import React, { useContext, useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import PropTypes from 'prop-types';
import AuthNav from '../AuthNav/AuthNav';
import registerLogo from '../../images/header__logo.svg';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import './Register.css';
import { register } from '../../utils/Auth';
import { registerErrors } from '../../constants/constatnts';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Register () {
    const [formIsValid, setFormIsValid] = useState(false);
    const [isPreloading, setIsPreloading] = useState(false);
    const [serverError, setServerError] = useState('');
    const { setLoggedIn } = useContext(CurrentUserContext);

    const navigate = useNavigate(); 

    function handleValidChange(isValid) {
        setFormIsValid(isValid);
    }

    function handleRegister(name, email, password) {
        setIsPreloading(true);
        register(name, email, password)
            .then(() => {
                setLoggedIn(true);
                navigate('/movies');

            })
            .catch(err => {
                let errorMessage = 'Произошла неизвестная ошибка.';
                if (registerErrors[err.status]) {
                    errorMessage = registerErrors[err.status];
                }
    
                setServerError(errorMessage);
            })
            .finally(() => setIsPreloading(false));
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
                        onSubmit={handleRegister}
                        isRegistration={true}
                        onValidChange={handleValidChange}
                    >
                        <SubmitFormButton
                            buttonText='Зарегистрироваться'
                            isPreloading={isPreloading}
                            isFormValid={formIsValid}
                            errorMessage={serverError}
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