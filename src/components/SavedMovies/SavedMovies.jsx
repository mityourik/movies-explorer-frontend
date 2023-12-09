import React, { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

const SHORT_FILM_DURATION = 40;

const SavedMovies = () => {
    const [savedMovies, setSavedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShortFilmOnly, setIsShortFilmOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
        setSavedMovies(loadedMovies);
    }, []);

    const handleFilterChange = (isSorted) => {
        setIsShortFilmOnly(isSorted);
    };

    const handleSubmit = (searchQuery) => {
        setIsLoading(true);
        setSearchQuery(searchQuery.movie.toLowerCase());
        setIsLoading(false);
    };

    const onDelete = (movie) => {
        const updatedSavedMovies = savedMovies.filter(savedMovie => savedMovie.id !== movie.id);
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        setSavedMovies(updatedSavedMovies);
    };

    const filteredMovies = savedMovies.filter(movie => {
        return movie.nameRU.toLowerCase().includes(searchQuery) &&
               (isShortFilmOnly ? movie.duration <= SHORT_FILM_DURATION : true);
    });

    return (
        <main className='main'>
            <SearchForm
                onSubmit={handleSubmit}
                onFilterChange={handleFilterChange}
                isPreloading={isLoading}
            />
            <MoviesCardList
                movies={filteredMovies}
                onDelete={onDelete}
            />
        </main>
    );
};

export default SavedMovies;
