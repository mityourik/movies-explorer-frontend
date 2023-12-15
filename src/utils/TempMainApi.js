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
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const mainApi = new MainApi({
    baseUrl: 'https://api.sha.nomoredomainsmonster.ru',
    // baseUrl: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
});