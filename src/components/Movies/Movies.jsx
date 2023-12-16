import React, { useState, useContext, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { moviesApi } from '../../utils/MoviesApi';
import filterMovies from '../../utils/filterMovies';
import { mainApi } from '../../utils/TempMainApi';
import { LikesContext } from '../../contexts/LikesContext';
import Preloader from '../Preloader/Preloader';
import { handleError } from '../../utils/handleError';
import {
    MOVIE_API_URL,
    likedMoviesErrors,
    movieDeleteErrors,
    movieLikeErrors,
    movieSearchErrors
} from '../../constants/constatnts';

const Movies = () => {
    const [searchResults, setSearchResults] = useState([]);
    const { likedMovies, setLikedMovies } = useContext(LikesContext);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isShortFilm, setIsShortFilm] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [searchError, setSearchError] = useState('');
    const [originalMovies, setOriginalMovies] = useState([]);
    
    useEffect(() => {
        const fetchLikedMovies = async () => {
            try {
                const likedMoviesFromServer = await mainApi.getSavedMovies();
                setLikedMovies(likedMoviesFromServer);
            } catch (error) {
                const errorMessage = handleError(error, likedMoviesErrors);
                console.log(errorMessage);
            }
        };
        fetchLikedMovies();
    }, []);

    const handleSearchSubmit = async (query) => {
        setIsLoading(true);
        setHasSearched(true);
        setSearchError('');
        setSearchQuery(query.movie);
        setIsShortFilm(query.isShortFilm);
        try {
            const movies = await moviesApi.getInitialMovies();
            setOriginalMovies(movies);
            const filteredMovies = filterMovies(movies, query.movie, query.isShortFilm);
            setSearchResults(filteredMovies);

            localStorage.setItem('searchQuery', query.movie);
            localStorage.setItem('isShortFilm', query.isShortFilm);
            localStorage.setItem('searchResults', JSON.stringify(filteredMovies));

        } catch (error) {
            const errorMessage = handleError(error, movieSearchErrors);
            setSearchError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const onLike = async (movie) => {
        try {
            const movieData = {
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: MOVIE_API_URL + movie.image.url,
                trailerLink: movie.trailerLink,
                thumbnail: MOVIE_API_URL + movie.image.formats.thumbnail.url,
                movieId: movie.id.toString(),
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            };
            const savedMovie = await mainApi.addMovieLike(movieData);
            setLikedMovies([...likedMovies, savedMovie]);
        } catch (error) {
            const errorMessage = handleError(error, movieLikeErrors);
            console.error(errorMessage);
        }
    };

    useEffect(() => {
        const savedSearchQuery = localStorage.getItem('searchQuery');
        const savedIsShortFilm = localStorage.getItem('isShortFilm') === 'true';
    
        if (savedSearchQuery !== null) {
            setSearchQuery(savedSearchQuery);
            setIsShortFilm(savedIsShortFilm);
            const savedSearchResults = JSON.parse(localStorage.getItem('searchResults'));
            if (savedSearchResults) {
                setOriginalMovies(savedSearchResults);
                const reFilteredMovies = filterMovies(savedSearchResults, savedSearchQuery, savedIsShortFilm);
                setSearchResults(reFilteredMovies);
                setHasSearched(true);
            }
        }
    }, []);    
    

    function findSavedMovieById(savedMovies, movieId) {
        const foundMovie = savedMovies.find(movie => movie.movieId.toString() === movieId.toString());
        return foundMovie ? foundMovie._id : null;
    }
    
    const onDelete = async (movie) => {
        const savedMovieId = findSavedMovieById(likedMovies, movie.id);
        if (savedMovieId) {
            try {
                await mainApi.removeMovieLike(savedMovieId);
                setLikedMovies(prevLikedMovies => prevLikedMovies.filter(likedMovie => likedMovie._id !== savedMovieId));
            } catch (error) {
                const errorMessage = handleError(error, movieDeleteErrors);
                console.error(errorMessage);
            }
        } else {
            console.error('Фильм для удаления не найден');
        }
    };    

    const handleFilterChange = (isSorted) => {
        setIsShortFilm(isSorted);
        const reFilteredMovies = filterMovies(originalMovies, searchQuery, isSorted);
        setSearchResults(reFilteredMovies);
    };

    return (
        <main className='main'>
            <SearchForm
                onSubmit={handleSearchSubmit}
                isPreloading={isLoading}
                defaultValue={searchQuery}
                onFilterChange={handleFilterChange}
                isShortFilm={isShortFilm}
            />
            {isLoading && <Preloader />}
            {!isLoading && hasSearched && searchResults.length === 0 && !searchError && <p className='search-form__error'>Ничего не найдено</p>}
            {!isLoading && searchError && <p className='search-form__error'>{searchError}</p>}
            {!isLoading && hasSearched && searchResults.length > 0 && (
                <MoviesCardList
                    movies={searchResults}
                    onLike={onLike}
                    onDelete={onDelete}
                    likedMovies={likedMovies}
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