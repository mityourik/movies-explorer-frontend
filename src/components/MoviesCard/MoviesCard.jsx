import React from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';
import { MOVIE_API_URL } from '../../constants/constatnts';
import { formatDuration } from '../../utils/durationFormatter';

function MoviesCard({ movie, isSavedPage, onLike, onDelete, likedMovies }) {
    const isMovieLiked = likedMovies && likedMovies.some(likedMovie => likedMovie.movieId === movie.id);

    const imageUrl = typeof movie.image === 'string' 
        ? movie.image 
        : MOVIE_API_URL + movie.image.url;

    const handleLikeClick = async () => {
        try {
            if (isMovieLiked) {
                if (!isSavedPage) {
                    await onDelete(movie);
                }
            } else {
                if (onLike) {
                    await onLike(movie);
                }
            }
        } catch (error) {
            console.error('Ошибка при обработке лайка:', error);
        }
    };  

    const handleDeleteClick = () => {
        if (isSavedPage) {
            onDelete(movie);
        }
    };

    return (
        <li className='movies-card'>
            <a className='movies-card__movie-link' href={movie.trailerLink} target='_blank' rel='noopener noreferrer'>
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
                        className={`movies-card__button ${isMovieLiked ? 'movies-card__button_liked' : ''}`}
                        onClick={handleLikeClick}
                        type='button'
                    />
                )}
            </div>
            <p className='movies-card__duration'>{formatDuration(movie.duration)}</p>
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
