const filterMovies2 = (movies, query, isShortFilm) => {
    const queryLower = query ? query.toLowerCase() : '';
    return movies.filter(movie => {
        const matchesQuery = queryLower
            ? movie.nameRU.toLowerCase().includes(queryLower) || movie.nameEN.toLowerCase().includes(queryLower)
            : true;
        const isShort = isShortFilm ? movie.duration <= 40 : true;
        return matchesQuery && isShort;
    });
};

export default filterMovies2;
