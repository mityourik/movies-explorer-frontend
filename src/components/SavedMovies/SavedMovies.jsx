import React, { useState } from 'react';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import savedMoviesList from '../../constants/savedMoviesList';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies () {
    const initialVisibleCount = 16;
    const [savedMovies, setSavedMovies] = useState(savedMoviesList);
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

    const handleDeleteMovie = (movieToDelete) => {
        console.log('trying to del');
        const updatedMoviesList = savedMovies.filter((movie) => movie.id !== movieToDelete.id);
        setSavedMovies(updatedMoviesList);
    };

    const visibleMovies = savedMoviesList.slice(0, visibleCount);

    const handleLoadMoreClick = () => {
        setVisibleCount(visibleCount + 16);
    };

    return (
        <>
            <Header />
            <SearchForm />
            <section className='saved-movies'>
                <ul className='saved-movies__container'>
                    {visibleMovies.map((movie) => (
                        <MoviesCard
                            key={movie.id}
                            movie={movie}
                            isSavedPage={true}
                            onDelete={handleDeleteMovie}
                        />
                    ))}
                </ul>
                {visibleCount < savedMoviesList.length && (
                    <button
                        className='saved-movies__more-button'
                        onClick={handleLoadMoreClick}
                    >
            Еще
                    </button>
                )}
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;
