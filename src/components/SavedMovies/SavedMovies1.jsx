/* eslint-disable react/prop-types */
import React from 'react';
import MoviesCardList1 from '../MoviesCardList/MoviesCardList';
import SearchForm1 from '../SearchForm/SearchForm';

const SavedMovies1 = ({
    movies,
    onSearchSubmit,
    onMovieDelete,
    isPreloading,
    isSucceeded,
    errorMessage,
    onCheckboxFilter, }) => {

    return (
        <main className='main'>
            <SearchForm1
                onSearchSubmit={onSearchSubmit}
                onCheckboxFilter={onCheckboxFilter}
                isLoading={isPreloading}
                errorMessage={errorMessage}
            />
            <MoviesCardList1
                movies={movies}
                onMovieDelete={onMovieDelete}
                isLoading={isPreloading}
                isSucceeded={isSucceeded}
                errorMessage={errorMessage}
            />
        </main>
    );
};

export default SavedMovies1;
