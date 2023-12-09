import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; 
import { useFormAndValidation } from '../../hooks/UseFormAndValidation';
import './AuthForm.css';

function AuthForm({ children, isRegistration, onSubmit, onValidChange }) {
    const { values, handleChange, errors, isValid } = useFormAndValidation();

    useEffect(() => {
        onValidChange(isValid);
    }, [isValid, onValidChange]);

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
            onSubmit(values);
        }
    }

    return (
        <form
            className='auth-form'
            onSubmit={handleSubmit}
            noValidate>
            {isRegistration && (
                <label
                    className='auth-form__label'>
            Имя
                    <input
                        className={`auth-form__input ${errors.name ? 'invalid' : ''}`}
                        id='auth-form-name'
                        type='text'
                        name='name'
                        placeholder='Name'
                        maxLength='30'
                        value={values.name || ''}
                        onChange={handleChange}
                        required
                    />
                    <span 
                        className='auth-form__span' 
                        id='auth-form-name-error'
                    >
                        {errors.name}
                    </span>
                </label>
            )}
            <label
                className='auth-form__label'>
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
            <label
                className='auth-form__label'>
            Пароль
                <input
                    id='auth-form-password'
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
    onSubmit: PropTypes.func.isRequired,
    onValidChange: PropTypes.func.isRequired
};

export default AuthForm;
