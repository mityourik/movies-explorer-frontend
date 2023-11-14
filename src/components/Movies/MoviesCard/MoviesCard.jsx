import React from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';

function MoviesCard (props) {
    const { movie, onLike, onRemoveMovie, likedMovies } = props;
    const isLiked = likedMovies.some((likedMovie) => likedMovie.id === movie.id);

    const handleClickLike = () => {
        if (isLiked) {
            onRemoveMovie(movie.id);
        } else {
            onLike(movie);
        }
    };

    const likeMovieButton = `movies-card__button ${isLiked ? 'movies-card__button_liked' : ''}`;

    return (
        <li className='movies-card'>
            <img
                className='movies-card__image'
                src={movie.image}
                alt={`Заставка ролика ${movie.name}`}
            />
            <div className='movies-card__group'>
                <h2 className='movies-card__name'>{movie.name}</h2>
                <button
                    className={likeMovieButton}
                    onClick={handleClickLike}
                    type='button'
                />
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
        image: PropTypes.string.isRequired
    }).isRequired,
    onLike: PropTypes.func.isRequired,
    onRemoveMovie: PropTypes.func.isRequired,
    likedMovies: PropTypes.array.isRequired,
};

export default MoviesCard;
