import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import moviesList from '../../../constants/moviesList';
import PropTypes from 'prop-types';

function MoviesCardList({ onLike, likedMovies, onRemoveMovie }) {
    return (
        <ul className='movies-list'>
            {moviesList.map((movie) => (
                <MoviesCard
                    key={movie.id}
                    movie={movie}
                    onLike={onLike}
                    likedMovies={likedMovies}
                    onRemoveMovie={onRemoveMovie}
                />
            ))}
        </ul>
    );
}

MoviesCardList.propTypes = {
    onLike: PropTypes.func.isRequired,
    likedMovies: PropTypes.array.isRequired,
    onRemoveMovie: PropTypes.func.isRequired,
};

export default MoviesCardList;
