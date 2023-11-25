import React from 'react';
import './Switch.css';
import PropTypes from 'prop-types';

function Switch ({ onSortClick }) {
    return (
        <label className='switch' onClick={onSortClick}>
            <input className='switch__input' type='checkbox' id='filter-checkbox' />
            <span className='switch__slider' />
            <span className='switch__text'>Короткометражки</span>
        </label>
    );
}

Switch.propTypes = {
    onSortClick: PropTypes.func.isRequired,
};

export default Switch;