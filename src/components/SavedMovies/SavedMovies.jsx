import React, { useContext, useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import { mainApi } from '../../utils/TempMainApi';
import { LikesContext } from '../../contexts/LikesContext';
import filterMovies from '../../utils/filterMovies';
import Preloader from '../Preloader/Preloader';

const SavedMovies = () => {
    const [savedMovies, setSavedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShortFilmOnly, setIsShortFilmOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchError, setSearchError] = useState('');
    const { likedMovies, setLikedMovies } = useContext(LikesContext);

    useEffect(() => {
        setIsLoading(true);
        mainApi.getSavedMovies()
            .then(movies => {
                setSavedMovies(movies);
            })
            .catch(error => {
                console.error('Ошибка при загрузке сохраненных фильмов:', error);
                setSearchError('Ошибка при загрузке сохраненных фильмов.');
            })
            .finally(() => {
                setIsLoading(false);
            });

        setSearchQuery('');
        setIsShortFilmOnly(false);
    }, []);

    const handleFilterChange = (isSorted) => {
        setIsShortFilmOnly(isSorted);
    };

    const handleSubmit = (query) => {
        setIsLoading(true);
        setSearchQuery(query.movie.toLowerCase());
        setIsShortFilmOnly(query.isShortFilm);
        setIsLoading(false);
    };

    const handleDelete = (movie) => {
        mainApi.removeMovieLike(movie._id)
            .then(() => {
                const updatedSavedMovies = savedMovies.filter(savedMovie => savedMovie.movieId !== movie.movieId);
                setSavedMovies(updatedSavedMovies);
    
                setLikedMovies((prevLikedMovies) => prevLikedMovies.filter(likedMovie => likedMovie.movieId !== movie.movieId));
            })
            .catch(error => {
                console.error('Ошибка при удалении фильма:', error);
            });
    };       

    const filteredMovies = filterMovies(savedMovies, searchQuery, isShortFilmOnly);

    return (
        <main className='main'>
            <SearchForm
                onSubmit={handleSubmit}
                onFilterChange={handleFilterChange}
                isPreloading={isLoading}
                isShortFilm={isShortFilmOnly}
                defaultValue={searchQuery}
            />
            {isLoading && <Preloader />}
            {!isLoading && filteredMovies.length === 0 && !searchError && <p className='search-form__error'>Ничего не найдено</p>}
            {!isLoading && searchError && <p className='search-form__error'>{searchError}</p>}
            <MoviesCardList
                movies={filteredMovies}
                onDelete={handleDelete}
                likedMovies={likedMovies}
            />
        </main>
    );
};

export default SavedMovies;
