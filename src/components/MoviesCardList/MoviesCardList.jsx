import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesCardList = ({ movies, onLike, onDelete, likedMovies }) => {
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';
    
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

    const visibleMovies = movies.slice(0, visibleCount);

    const handleLoadMoreClick = () => {
        setVisibleCount(prevCount => prevCount + calculateVisibleMovies(window.innerWidth));
    };

    return (
        <section className='movies'>
            <ul className='movies__container'>
                {visibleMovies.map((movie) => (
                    <MoviesCard
                        key={isSavedMoviesPage ? movie._id : movie.id}
                        movie={movie}
                        isSavedPage={isSavedMoviesPage}
                        onLike={isSavedMoviesPage ? null : onLike}
                        onDelete={isSavedMoviesPage ? onDelete : null}
                        isLiked={likedMovies && (isSavedMoviesPage 
                            ? likedMovies.some(likedMovie => likedMovie._id === movie._id)
                            : likedMovies.some(likedMovie => likedMovie.movieId === movie.id.toString()))}
                        likedMovies={likedMovies}
                    />
                ))}
            </ul>
            {visibleCount < movies.length && (
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

MoviesCardList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    onLike: PropTypes.func,
    onDelete: PropTypes.func.isRequired,
    likedMovies: PropTypes.array
};

export default MoviesCardList;
