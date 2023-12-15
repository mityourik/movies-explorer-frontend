class MoviesApi {
    constructor(config) {// конструктор принимает объект конфигурации API
        this._url = config.url;
        this._headers = config.headers;
    }
  
    async _handleResponse(res) {// Метод обработки ответа сервера
        if (res.ok) {
            return res.json();
        }
        throw new Error(`Ошибка ${res.status}`);
    }
  
    async _fetchData(url, options) {
        try {
            const response = await fetch(url, options);
            if (response.ok && response.status !== 204) { // проверка, что не пустой прежде чем преобразовать в json
                return response.json();
            } else if (response.ok && response.status === 204) {
                return {}; // просто возвращаем пустой объект
            } else {
                throw new Error(`Ошибка ${response.status}`);
            }
        } catch (error) {
            throw new Error('Ошибка сети');
        }
    }
  
    async getInitialMovies() {//метод для получения карточек с сервера
        return this._fetchData(this._url, {
            headers: this._headers
        });
    }
}
  
//класс для апи
export const moviesApi = new MoviesApi({
    // url: 'http://localhost:3001/',
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    }
});
  