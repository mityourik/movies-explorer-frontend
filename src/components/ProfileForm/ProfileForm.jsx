import React from 'react';
import PropTypes from 'prop-types'; 
import './ProfileForm.css';

function ProfileForm({ children, isEditing, onSubmit, handleChange, errors, values }) {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(values);
    }

    return (
        <form className='profile-form' onSubmit={handleSubmit} noValidate>
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
                <span className='profile-form__span' id='profile-form-username-error'>
                    {errors.username}
                </span>
            </label>
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
                    value={values.email || ''}
                    onChange={handleChange}
                    required
                />
                <span className='profile-form__span' id='profile-form-email-error'>
                    {errors.email}
                </span>
            </label>
            {children}
        </form>
    );
}

ProfileForm.propTypes = {
    children: PropTypes.node,
    onSubmit: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    values: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
};

export default ProfileForm;