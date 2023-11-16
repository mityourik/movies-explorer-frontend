import React, { useState } from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';

function MoviesCard({ movie, isSavedPage, onLike, onDelete }) {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        if (onLike) {
            onLike(movie);
        }
    };

    const handleDeleteClick = () => {
        if (onDelete) {
            onDelete(movie);
        }
    };

    return (
        <li className='movies-card'>
            <img
                className='movies-card__image'
                src={movie.image}
                alt={`Заставка ролика ${movie.name}`}
            />
            <div className='movies-card__group'>
                <h2 className='movies-card__name'>{movie.name}</h2>
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
            <p className='movies-card__duration'>{movie.time}</p>
        </li>
    );
}

MoviesCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    isSavedPage: PropTypes.bool,
    onLike: PropTypes.func,
    onDelete: PropTypes.func,
};

export default MoviesCard;
