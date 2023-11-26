import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

const SavedMovies = () => {
    return (
        <main className='main'>
            <SearchForm />
            <MoviesCardList />
        </main>
    );
};

export default SavedMovies;