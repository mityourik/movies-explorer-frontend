import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';
import Switch from '../Switch/Switch';
import { useFormAndValidation } from '../../../hooks/UseFormAndValidation';

function SearchForm({ children, onSort, onSubmit, onValidChange, isPreloading }) {
    const [isSorted, setIsSorted] = useState(false);
    const { values, handleChange, errors, isValid } = useFormAndValidation();
    const buttonClass = `search-form__submit-button ${!isValid ? 'search-form__submit-button_invalid' : ''}`;

    useEffect(() => {
        if (onValidChange) {
            onValidChange(isValid);
        }
    }, [isValid, onValidChange]);

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
            console.log('Sbmit from searchForm');
            onSubmit(values);
        }
    }

    const handleSortClick = () => {
        setIsSorted(!isSorted);
        if (onSort) {
            onSort(!isSorted);
        }
    };

    return (
        <section className='search-form'>
            <form className='search-form__form' onSubmit={handleSubmit} noValidate>
                <label className='search-form__label' htmlFor='movie-input'>
                    <input
                        id='movie-input'
                        className={`search-form__input ${errors.movie ? 'invalid' : ''}`}
                        type='text'
                        placeholder='Фильм'
                        name='movie'
                        minLength='3'
                        maxLength='30'
                        value={values.movie || ''}
                        onChange={handleChange}
                        required
                    />
                    <button
                        className={buttonClass}
                        disabled={!isValid || isPreloading}
                        type='submit'>Найти
                    </button>
                </label>
                <span className='search-form__span' id='movie-input-error'>
                    {errors.movie}
                </span>
                <Switch onSortClick={handleSortClick}/>
                {children}
            </form>
        </section>
    );
}

SearchForm.propTypes = {
    children: PropTypes.node,
    onSort: PropTypes.func,
    onSubmit: PropTypes.func,
    onValidChange: PropTypes.func,
    isPreloading: PropTypes.bool,
};

export default SearchForm;
