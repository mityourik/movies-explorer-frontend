function filterMovies(movies, query, isShortFilm) {
    return movies.filter(movie => {
        const matchesQuery = movie.nameRU.toLowerCase().includes(query.toLowerCase());
        const isShort = movie.duration <= 40;
        return isShortFilm ? matchesQuery && isShort : matchesQuery;
    });
}

export default filterMovies;
