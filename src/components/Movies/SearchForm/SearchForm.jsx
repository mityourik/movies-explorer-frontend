import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';
import Switch from '../Switch/Switch';
import { useFormAndValidation } from '../../../hooks/UseFormAndValidation';

function SearchForm({ onSubmit, onFilterChange, onValidChange, isPreloading }) {
    const [isSorted, setIsSorted] = useState(false);
    const { values, handleChange, errors, isValid } = useFormAndValidation();
    const buttonClass = `search-form__submit-button ${!isValid ? 'search-form__submit-button_invalid' : ''}`;

    useEffect(() => {
        if (onValidChange) {
            onValidChange(isValid);
        }
    }, [isValid, onValidChange]);

    const handleSortClick = () => {
        const newIsSorted = !isSorted;
        setIsSorted(newIsSorted);
        onFilterChange(newIsSorted);
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!isValid) return;
        onSubmit({ ...values, isShortFilm: isSorted });
    } 

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
                        minLength='1'
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
                <Switch
                    onSortClick={handleSortClick}
                    isChecked={isSorted}
                />
            </form>
        </section>
    );
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onFilterChange: PropTypes.func,
    onValidChange: PropTypes.func,
    isPreloading: PropTypes.bool
};

export default SearchForm;
