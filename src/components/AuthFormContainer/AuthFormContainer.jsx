import React from 'react';
import PropTypes from 'prop-types';
import './AuthFormContainer.css';

function AuthFormContainer (props) {
    return (
        <div className='auth-form__container'>
            {props.children}
        </div>
    );
}

AuthFormContainer.propTypes = {
    children: PropTypes.node,
};

export default AuthFormContainer;