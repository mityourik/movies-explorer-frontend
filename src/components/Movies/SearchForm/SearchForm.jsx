import React, { useState } from 'react';
import './SearchForm.css';
import sortButtonEnabled from '../../../images/search-form__sort-button_enabled.svg';
import sortButtonDisabled from '../../../images/search-form__sort-button_disabled.svg';
import PropTypes from 'prop-types';

function SearchForm ({ children, onSort }) {
    const [isSorted, setIsSorted] = useState(false);

    const handleSortClick = () => {
        setIsSorted(!isSorted);
        if (onSort) {
            onSort(!isSorted);
        }
    };

    return (
        <div className='search-form__container'>
            <form className='search-form__form'>
                <input className='search-form__input' type='text' placeholder='Фильм'/>
                <button className='search-form__submit-button' type='submit'>Найти</button>
                <button className='search-form__sort-button' type='button' onClick={handleSortClick}>
                    <img 
                        src={isSorted ? sortButtonEnabled : sortButtonDisabled}
                        alt='Кнопка сортировки'
                        className={`search-form__sort-icon ${isSorted ? 'search-form__sort-icon_sorted' : ''}`}/>
                    Короткометражки
                </button>
                {children}
            </form>
        </div>
    );
}

SearchForm.propTypes = {
    children: PropTypes.node,
    onSort: PropTypes.bool,
};

export default SearchForm;