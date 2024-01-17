import React from 'react';
import './Switch.css';
import PropTypes from 'prop-types';

function Switch1 ({ onSortClick, isChecked }) {
    return (
        <label className='switch'>
            <input
                className='switch__input'
                type='checkbox'
                id='filter-checkbox'
                onChange={onSortClick}
                checked={isChecked}
            />
            <span className='switch__slider' />
            <span className='switch__text'>Короткометражки</span>
        </label>
    );
}

Switch1.propTypes = {
    onSortClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool,
};

export default Switch1;
