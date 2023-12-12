import React, { useContext, useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import { mainApi } from '../../utils/TempMainApi';
import { LikesContext } from '../../contexts/LikesContext';

const SHORT_FILM_DURATION = 40;

const SavedMovies = () => {
    const [savedMovies, setSavedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShortFilmOnly, setIsShortFilmOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { likedMovies, setLikedMovies } = useContext(LikesContext);

    useEffect(() => {
        const savedIsShortFilmOnly = sessionStorage.getItem('isShortFilmOnly');
        if (savedIsShortFilmOnly !== null) {
            setIsShortFilmOnly(savedIsShortFilmOnly === 'true');
        }
        setIsLoading(true);
        mainApi.getSavedMovies()
            .then(movies => {
                setSavedMovies(movies);
            })
            .catch(error => {
                console.error('Ошибка при загрузке сохраненных фильмов:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleFilterChange = (isSorted) => {
        setIsShortFilmOnly(isSorted);
        sessionStorage.setItem('isShortFilmOnly', isSorted);
    };

    const handleSubmit = (searchQuery) => {
        setIsLoading(true);
        setSearchQuery(searchQuery.movie.toLowerCase());
        setIsLoading(false);
    };

    const onDelete = (movie) => {
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
                isShortFilm={isShortFilmOnly}
            />
            <MoviesCardList
                movies={filteredMovies}
                onDelete={onDelete}
                likedMovies={likedMovies}
            />
        </main>
    );
};

export default SavedMovies;
