const filterMovies = (movies, query, isShortFilm) => {
    const SHORT_FILM_DURATION = 40;
    return movies.filter(movie => {
        const matchesQuery = movie.nameRU.toLowerCase().includes(query.toLowerCase());
        const isShort = movie.duration <= SHORT_FILM_DURATION;
        return matchesQuery && (isShortFilm ? isShort : true);
    });
};

export default filterMovies;
