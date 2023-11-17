import React from 'react';
import PropTypes from 'prop-types'; 
import { useFormAndValidation } from '../../hooks/UseFormAndValidation';
import './AuthForm.css';

function AuthForm({ children, isRegistration, onSubmit }) {
    const { values, handleChange, errors, isValid } = useFormAndValidation();

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
            onSubmit(values);
        }
    }

    return (
        <form className='auth-form__form'
            onSubmit={handleSubmit}
            noValidate
        >
            {isRegistration && (
                <label className='auth-form__label'>
            Имя
                    <input
                        className={`auth-form__input ${errors.username ? 'invalid' : ''}`}
                        id='auth-form-username'
                        type='text'
                        name='username'
                        placeholder='Name'
                        minLength='3'
                        maxLength='30'
                        value={values.username || ''}
                        onChange={handleChange}
                        required
                    />
                    <span 
                        className='auth-form__span' 
                        id='auth-form-username-error'
                    >
                        {errors.username}
                    </span>
                </label>
            )}
            <label className='auth-form__label'>
            Почта
                <input
                    className={`auth-form__input ${errors.email ? 'invalid' : ''}`}
                    id='auth-form-email'
                    type='email'
                    name='email'
                    placeholder='Email'
                    pattern='[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'
                    onChange={handleChange}
                    value={values.email || ''}
                    required
                />
            </label>
            <span
                className='auth-form__span'
                id='auth-form-email-error'>
                {errors.email}
            </span>
            <label className='auth-form__label'>
            Пароль
                <input
                    id='autho-form-password'
                    type='password'
                    name='password'
                    className={`auth-form__input ${errors.password ? 'invalid' : ''}`}
                    placeholder='Password'
                    minLength='6'
                    onChange={handleChange}
                    value={values.password || ''}
                    required
                />
            </label>
            <span 
                className='auth-form__span'
                id='auth-form-password-error'
            >
                {errors.password}
            </span>
            {children}
        </form>
    );
}

AuthForm.propTypes = {
    children: PropTypes.node,
    isRegistration: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired
};

export default AuthForm;
