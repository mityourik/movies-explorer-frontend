import React from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

function SearchForm ({ children, onSort }) {

    const handleSortClick = () => {
        if (onSort) {
            onSort();
        }
    };

    return (
        <div className='search-form__container'>
            <form className='search-form__form'>
                <input className='search-form__input' type='text' placeholder='Фильм'/>
                <button className="search-form__submit-button" type="submit">Найти</button>
                <button className="search-form__sort-button" type="button" onClick={handleSortClick}>
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