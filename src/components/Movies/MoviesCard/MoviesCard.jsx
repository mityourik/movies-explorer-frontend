import React, { useState } from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';
import { moviesApiUrl } from '../../../constants/constatnts';

function MoviesCard({ movie, isSavedPage, onLike, onDelete }) {

    const isMovieSaved = () => {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
        return savedMovies.some(savedMovie => savedMovie.id === movie.id);
    };

    const [isLiked, setIsLiked] = useState(isMovieSaved());

    const imageUrl = movie.image.formats ? moviesApiUrl + movie.image.url : movie.image;

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        onLike(movie);
    };

    const handleDeleteClick = () => {
        setIsLiked(false);
        onDelete(movie);
    };

    return (
        <li className='movies-card'>
            <img
                className='movies-card__image'
                src={imageUrl}
                alt={`Заставка ролика ${movie.nameRU}`}
            />
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
        id: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        image: PropTypes.object.isRequired,
    }).isRequired,
    isSavedPage: PropTypes.bool,
    onLike: PropTypes.func,
    onDelete: PropTypes.func,
};

export default MoviesCard;