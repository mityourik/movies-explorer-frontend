import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import cardsArrayMovies from '../../constants/moviesList';
import cardsArraySavedMovies from '../../constants/moviesList';
import { useLocation } from 'react-router-dom';

const MoviesCardList = () => {
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';
    
    const [savedMovies, setSavedMovies] = useState(cardsArraySavedMovies);
    const [visibleCount, setVisibleCount] = useState(16);

    const calculateVisibleMovies = (windowWidth) => {
        if (windowWidth > 1279) {
            return 16;
        } else if (windowWidth >= 989 && windowWidth <= 1279) {
            return 12;
        } else if (windowWidth >= 767 && windowWidth < 1099) {
            return 8;
        } else if (windowWidth <= 850) {
            return 5;
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const newVisibleCount = calculateVisibleMovies(window.innerWidth);
            setVisibleCount(newVisibleCount);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const currentMoviesArray = isSavedMoviesPage ? savedMovies : cardsArrayMovies;
    const visibleCurrentMovies = currentMoviesArray.slice(0, visibleCount);

    const handleLoadMoreClick = () => {
        const newVisibleCount = calculateVisibleMovies(window.innerWidth);
        setVisibleCount(visibleCount + newVisibleCount);
    };

    const handleDeleteMovie = (movieToDelete) => {
        const updatedSavedMoviesList = savedMovies.filter((movie) => movie.id !== movieToDelete.id);
        setSavedMovies(updatedSavedMoviesList);
    };

    return (
        <section className='movies'>
            <ul className='movies__container'>
                {visibleCurrentMovies.map((movie) => (
                    <MoviesCard
                        key={movie.id}
                        movie={movie}
                        isSavedPage={isSavedMoviesPage}
                        onDelete={isSavedMoviesPage ? handleDeleteMovie : undefined}
                    />
                ))}
            </ul>
            {visibleCount < currentMoviesArray.length && (
                <div className='movies__button-container'>
                    <button
                        className='movies__more-button'
                        onClick={handleLoadMoreClick}
                    >
                        Еще
                    </button>
                </div>
            )}
        </section>
    );
};

export default MoviesCardList;