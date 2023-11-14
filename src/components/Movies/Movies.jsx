import React, { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';

function Movies() {
    const [savedMovies, setSavedMovies] = useState([]);
    const [likedMovies, setLikedMovies] = useState([]);

    const handleSavedMovie = (movie) => {
        if (!likedMovies.some(m => m.id === movie.id)) {
            setLikedMovies([...likedMovies, movie]);
            setSavedMovies([...savedMovies, movie]);
        }
    };

    const handleRemoveMovie = (movieId) => {
        const updatedLikedMovies = likedMovies.filter((movie) => movie.id !== movieId);
        setLikedMovies(updatedLikedMovies);
        setSavedMovies(updatedLikedMovies);
    };

    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList
                onLike={handleSavedMovie}
                likedMovies={likedMovies}
                onRemoveMovie={handleRemoveMovie}
            />
            <SavedMovies
                savedMovies={savedMovies}
                onRemoveMovie={handleRemoveMovie}
                onLike={handleSavedMovie}
                likedMovies={likedMovies}
            />
        </section>
    );
}

export default Movies;