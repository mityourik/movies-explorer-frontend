import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { moviesApi } from '../../utils/MoviesApi';
import filterMovies from '../../utils/filterMovies';
import Preloader from './Preloader/Preloader';

const Movies = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isShortFilm, setIsShortFilm] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [searchError, setSearchError] = useState('');

    const handleSearchSubmit = async (query) => {
        setIsLoading(true);
        setHasSearched(true);
        setSearchError('');
        setSearchQuery(query.movie);
        setIsShortFilm(query.isShortFilm);
        try {
            const movies = await moviesApi.getInitialMovies();
            const filteredMovies = filterMovies(movies, query.movie, query.isShortFilm);
            setSearchResults(filteredMovies);
        } catch (error) {
            console.error(error);
            setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const savedSearchQuery = localStorage.getItem('searchQuery');
        const savedIsShortFilm = localStorage.getItem('isShortFilm') === 'true';
        const savedSearchResults = JSON.parse(localStorage.getItem('searchResults'));
    
        if (savedSearchQuery !== null) {
            setSearchQuery(savedSearchQuery);
            setIsShortFilm(savedIsShortFilm);
            if (savedSearchResults) {
                setSearchResults(savedSearchResults);
                setHasSearched(true);
            }
        }
    }, []);    

    useEffect(() => {
        if (searchQuery) {
            const refilterMovies = async () => {
                setIsLoading(true);
                try {
                    const movies = await moviesApi.getInitialMovies();
                    const filteredMovies = filterMovies(movies, searchQuery, isShortFilm);
                    setSearchResults(filteredMovies);
                } catch (error) {
                    console.error(error);
                } finally {
                    setIsLoading(false);
                }
            };

            refilterMovies();
        }
    }, [searchQuery, isShortFilm]);

    const onLike = (movie) => {
        let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
        const isMovieSaved = savedMovies.some(savedMovie => savedMovie.id === movie.id);
    
        if (isMovieSaved) {
            savedMovies = savedMovies.filter(savedMovie => savedMovie.id !== movie.id);
        } else {
            savedMovies.push(movie);
        }
    
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    };
    
    const onDelete = (movie) => {
        let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
        savedMovies = savedMovies.filter(savedMovie => savedMovie.id !== movie.id);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    };

    const handleFilterChange = (isSorted) => {
        setIsShortFilm(isSorted);
    };
    
    return (
        <main className='main'>
            <SearchForm
                onSubmit={handleSearchSubmit}
                isPreloading={isLoading}
                defaultValue={searchQuery}
                onFilterChange={handleFilterChange}
            />
            {isLoading && <Preloader />}
            {!isLoading && hasSearched && searchResults.length === 0 && !searchError && <p className='search-form__error'>Ничего не найдено</p>}
            {!isLoading && searchError && <p className='search-form__error'>{searchError}</p>}
            {!isLoading && hasSearched && searchResults.length > 0 && (
                <MoviesCardList
                    movies={searchResults}
                    onLike={onLike}
                    onDelete={onDelete}
                />
            )}
            {!isLoading && !hasSearched &&
            <span className='wide-open-space'>
                Введите поисковый запрос
            </span>}
        </main>
    );
};

export default Movies;
