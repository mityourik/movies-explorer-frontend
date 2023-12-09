class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            credentials: 'include',
            headers: this._headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    updateUser({ name, email }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({ name, email }),
        }).then(this._checkResponse);
    }

    addMovieLike(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify(movie),
        }).then(this._checkResponse);
    }

    removeMovieLike(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._headers,
        }).then(this._checkResponse);
    }

    _checkResponse(res) {
        console.log('Response from server on add like:', res);
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const mainApi = new MainApi({
    baseUrl: 'https://api.diploma.nomoredomainsmonster.ru',
    headers: {
        'Content-Type': 'application/json',
    },
});


// export const addMovie = (
//     nameRU,
//     nameEN, country,
//     director, duration,
//     year, description,
//     image, trailerLink,
//     thumbnail,
//     movieId) => {
//     return fetch(`${baseUrl}/movies`, {
//         method: 'POST',
//         credentials: 'include',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }, body: JSON.stringify(
//             nameRU,
//             nameEN,
//             country,
//             director,
//             duration,
//             year,
//             description,
//             image,
//             trailerLink,
//             thumbnail,
//             movieId)
//     }).then(this._checkResponse);
// };

// body: JSON.stringify({
//     country: movie.country,
//     director: movie.director,
//     duration: movie.duration,
//     year: movie.year,
//     description: movie.description,
//     image: `https://api.nomoreparties.co${movie.image.url}`,
//     trailerLink: movie.trailerLink,
//     thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
//     movieId: movie.id.toString(),
//     nameRU: movie.nameRU,
//     nameEN: movie.nameEN,