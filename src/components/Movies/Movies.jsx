import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

const Movies = () => {
    return (
        <main className='main'>
            <SearchForm />
            <MoviesCardList />
        </main>
    );
};

export default Movies;
