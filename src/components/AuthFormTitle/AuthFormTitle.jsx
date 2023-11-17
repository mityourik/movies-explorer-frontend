import React from 'react';
import PropTypes from 'prop-types';
import './AuthFormTitle.css';

function AuthFormTitle ({ title }) {
    return (
        <h2 className='auth-form__title'>{title}</h2>
    );
}

AuthFormTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default AuthFormTitle;