import React from 'react';
import PropTypes from 'prop-types'; 
import './ProfileForm.css';
import { useFormAndValidation } from '../../hooks/UseFormAndValidation';

function ProfileForm ({ children, isEditing }) {
    const { values, handleChange, errors } = useFormAndValidation();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className='profile-form'
            onSubmit={handleSubmit}
            noValidate
        >
            <label className='profile-form__label'>
            Имя
                <input
                    className={`profile-form__input ${errors.username ? 'invalid' : ''}`}
                    id='profile-form-username'
                    type='text'
                    name='username'
                    placeholder='Name'
                    minLength='3'
                    maxLength='30'
                    disabled={!isEditing}
                    value={values.username || ''}
                    onChange={handleChange}
                    required
                />
            </label>
            <span 
                className='profile-form__span' 
                id='profile-form-username-error'
            >
                {errors.username}
            </span>
            <label className='profile-form__label'>
            Email
                <input
                    className={`profile-form__input ${errors.email ? 'invalid' : ''}`}
                    id='profile-form-email'
                    type='email'
                    name='email'
                    placeholder='Email'
                    pattern='[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'
                    disabled={!isEditing}
                    onChange={handleChange}
                    value={values.email || ''}
                    required
                />
            </label>
            <span
                className='profile-form__span'
                id='profile-form-email-error'>
                {errors.email}
            </span>
            {children}
        </form>
    );
}

ProfileForm.propTypes = {
    children: PropTypes.node,
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
};

export default ProfileForm;