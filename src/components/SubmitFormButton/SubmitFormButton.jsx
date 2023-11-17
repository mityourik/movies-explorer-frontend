import React from 'react';
import PropTypes from 'prop-types';
import './SubmitFormButton.css';

function SubmitFormButton ({ isPreloading, buttonText }) {
    return (
        <button
            className='submit-form-button__button'
            type='submit'
        >
            {isPreloading ? 'Загрузка...' : buttonText}
        </button>
    );
}

SubmitFormButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    isPreloading: PropTypes.bool,
};

export default SubmitFormButton;