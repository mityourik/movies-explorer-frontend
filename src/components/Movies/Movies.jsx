import React, { useState, useContext, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { moviesApi } from '../../utils/MoviesApi';
import filterMovies from '../../utils/filterMovies';
import Preloader from './Preloader/Preloader';
import { mainApi } from '../../utils/TempMainApi';
import { LikesContext } from '../../contexts/LikesContext';

const Movies = () => {
    const [searchResults, setSearchResults] = useState([]);
    const { likedMovies, setLikedMovies } = useContext(LikesContext);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isShortFilm, setIsShortFilm] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [searchError, setSearchError] = useState('');

    useEffect(() => {
        const fetchLikedMovies = async () => {
            try {
                const likedMoviesFromServer = await mainApi.getSavedMovies();
                setLikedMovies(likedMoviesFromServer);
            } catch (error) {
                console.error('Ошибка при получении лайкнутых фильмов:', error);
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
            const filteredMovies = filterMovies(movies, query.movie, isShortFilm);
            setSearchResults(filteredMovies);

            sessionStorage.setItem('searchQuery', query.movie);
            sessionStorage.setItem('isShortFilm', isShortFilm);
            sessionStorage.setItem('searchResults', JSON.stringify(filteredMovies));

        } catch (error) {
            console.error(error);
            setSearchError('Во время запроса произошла ошибка.');
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
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id.toString(),
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            };
            const savedMovie = await mainApi.addMovieLike(movieData);
            setLikedMovies([...likedMovies, savedMovie]);
        } catch (error) {
            console.error('Ошибка при лайке фильма:', error);
        }
    };

    useEffect(() => {
        const savedSearchQuery = sessionStorage.getItem('searchQuery');
        const savedIsShortFilm = sessionStorage.getItem('isShortFilm') === 'true';
    
        if (savedSearchQuery !== null) {
            setSearchQuery(savedSearchQuery);
        }
    
        if (savedIsShortFilm !== null) {
            setIsShortFilm(savedIsShortFilm);
        }
    
        const savedSearchResults = JSON.parse(sessionStorage.getItem('searchResults'));
        if (savedSearchResults) {
            setSearchResults(savedSearchResults);
            setHasSearched(true);
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
                console.error('Ошибка при удалении фильма:', error);
            }
        } else {
            console.error('Фильм для удаления не найден');
        }
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