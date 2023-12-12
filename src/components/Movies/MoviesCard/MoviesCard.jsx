import React, { useState } from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';
import { moviesApiUrl } from '../../../constants/constatnts';

function MoviesCard({ movie, isSavedPage, onLike, onDelete, likedMovies }) {

    const isMovieLiked = likedMovies && likedMovies.some(likedMovie => likedMovie.movieId === movie.id);

    const [isLiked, setIsLiked] = useState(isMovieLiked);

    const imageUrl = typeof movie.image === 'string' 
        ? movie.image 
        : moviesApiUrl + movie.image.url;

    const handleLikeClick = () => {
        if (isLiked) {
            if (!isSavedPage && onDelete) {
                onDelete(movie);
            }
        } else {
            onLike(movie);
        }
        setIsLiked(!isLiked);
    };       

    const handleDeleteClick = () => {
        setIsLiked(false);
        onDelete(movie);
    };

    return (
        <li className='movies-card'>
            <a className='movies-card__movie-link' href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img
                    className='movies-card__image'
                    src={imageUrl}
                    alt={`Заставка ролика ${movie.nameRU}`}
                />
            </a>
            <div className='movies-card__group'>
                <h2 className='movies-card__name'>{movie.nameRU}</h2>
                {isSavedPage ? (
                    <button
                        className='movies-card__button movies-card__button_delete'
                        onClick={handleDeleteClick}
                        type='button'
                    />
                ) : (
                    <button
                        className={`movies-card__button ${isLiked ? 'movies-card__button_liked' : ''}`}
                        onClick={handleLikeClick}
                        type='button'
                    />
                )}
            </div>
            <p className='movies-card__duration'>{`Длительность: ${movie.duration} мин.`}</p>
        </li>
    );
}

MoviesCard.propTypes = {
    movie: PropTypes.shape({
        nameRU: PropTypes.string.isRequired,
        id: PropTypes.number,
        duration: PropTypes.number.isRequired,
        image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
        trailerLink: PropTypes.string.isRequired,
    }).isRequired,
    isSavedPage: PropTypes.bool,
    onLike: PropTypes.func,
    onDelete: PropTypes.func,
    likedMovies: PropTypes.array,
};

export default MoviesCard;