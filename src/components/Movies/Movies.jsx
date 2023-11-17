import React, { useState } from 'react';
import './Movies.css';
import moviesArray from '../../constants/moviesList';
import MoviesCard from './MoviesCard/MoviesCard';
import SearchForm from './SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
    const initialVisibleCount = 16;
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

    const visibleMovies = moviesArray.slice(0, visibleCount);

    const handleLoadMoreClick = () => {
        setVisibleCount(visibleCount + 16);
    };

    return (
        <>
            <Header />
            <SearchForm />
            <section className='movies'>
                <ul className='movies__container'>
                    {visibleMovies.map((movie) => (
                        <MoviesCard key={movie.id} movie={movie} />
                    ))}
                </ul>
                {visibleCount < moviesArray.length && (
                    <button
                        className='movies__more-button'
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

export default Movies;