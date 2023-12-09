import React from 'react';
import PropTypes from 'prop-types';
import './SubmitFormButton.css';
import { useLocation } from 'react-router-dom';

function SubmitFormButton ({ isPreloading, buttonText, isFormValid, errorMessage }) {
    const location = useLocation();
    const isErrorSpanSignin = location.pathname === '/signin';

    const buttonClass = `submit-form-button__button ${!isFormValid ? 'submit-form-button__button_invalid' : ''}`;


    return (
        <>
            <span
                className={isErrorSpanSignin ? 'submit-form-button__span-error_signin' : 'submit-form-button__span-error'}>
                {errorMessage} {/*  тут <--------------------------------- */}
            </span>
            <button
                className={buttonClass}
                type='submit'
                disabled={!isFormValid || isPreloading}
            >
                {isPreloading ? 'Загрузка...' : buttonText}
            </button>
        </>
    );
}

SubmitFormButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    isPreloading: PropTypes.bool,
    isFormValid: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
};

export default SubmitFormButton;