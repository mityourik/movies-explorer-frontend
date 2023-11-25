import React, { useState } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';
import Switch from '../Switch/Switch';

function SearchForm({ children, onSort }) {
    const [isSorted, setIsSorted] = useState(false);

    const handleSortClick = () => {
        setIsSorted(!isSorted);
        if (onSort) {
            onSort(!isSorted);
        }
    };

    return (
        <section className='search-form'>
            <form className='search-form__form'>
                <label className='search-form__label' htmlFor='movieInput'>
                    <input id='movieInput' className='search-form__input' type='text' placeholder='Фильм' />
                    <button className='search-form__submit-button' type='submit'>Найти</button>
                </label>
                <Switch onSortClick={handleSortClick}/>
                {children}
            </form>
        </section>
    );
}

SearchForm.propTypes = {
    children: PropTypes.node,
    onSort: PropTypes.bool,
};

export default SearchForm;
