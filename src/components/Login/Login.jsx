import React, { useContext, useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import PropTypes from 'prop-types';
import AuthNav from '../AuthNav/AuthNav';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import loginLogo from '../../images/header__logo.svg';
import './Login.css';
import { authorize, getContent } from '../../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { loginErrors, registerErrors, profileErrors } from '../../constants/constatnts';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Login() {
    const [formIsValid, setFormIsValid] = useState(false);
    const [isPreloading, setIsPreloading] = useState(false);
    const [serverError, setServerError] = useState('');
    const { setLoggedIn } = useContext(CurrentUserContext);

    const navigate = useNavigate(); 

    function handleValidChange(isValid) {
        setFormIsValid(isValid);
    }

    function handleLogin(password, email) {
        setIsPreloading(true);
        authorize(password, email)
            .then(res => {
                localStorage.setItem('jwt', res._id);
                getContent();
                setLoggedIn(true); 
                navigate('/movies');
            })
            .catch(err => {
                let errorMessage = 'Произошла неизвестная ошибка.';
                if (loginErrors[err.status]) {
                    errorMessage = loginErrors[err.status];
                } else if (registerErrors[err.status]) {
                    errorMessage = registerErrors[err.status];
                } else if (profileErrors[err.status]) {
                    errorMessage = profileErrors[err.status];
                }
                setServerError(errorMessage);
            })
            .finally(() => setIsPreloading(false));
    }    

    return (
        <main className='main'>
            <div className='login'>
                <div className='login__container'>
                    <img
                        className='login__logo'
                        src={loginLogo}
                        alt='Лого сайта'
                    />
                    <h1
                        className='login__title'>
                        Рады видеть!</h1>
                    <AuthForm
                        onSubmit={handleLogin}
                        onValidChange={handleValidChange}
                    >
                        <SubmitFormButton
                            buttonText='Войти'
                            isPreloading={isPreloading}
                            isFormValid={formIsValid}
                            errorMessage={serverError}
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
    serverError: PropTypes.string
};

export default Login;