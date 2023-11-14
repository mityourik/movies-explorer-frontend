import React from 'react';
// import './SavedMovies.css';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import PropTypes from 'prop-types';

function SavedMovies ({ savedMovies, onRemoveMovie, onLike, likedMovies }) {
    return (
        <ul className='movies-list'>
            {savedMovies.map((movie) => (
                <MoviesCard
                    key={movie.id}
                    movie={movie}
                    likedMovies={likedMovies}
                    onRemoveMovie={onRemoveMovie}
                    onLike={onLike}
                />
            ))}
        </ul>
    );
}

SavedMovies.propTypes = {
    savedMovies: PropTypes.array.isRequired,
    onRemoveMovie: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
    likedMovies: PropTypes.array.isRequired,
};

export default SavedMovies;
