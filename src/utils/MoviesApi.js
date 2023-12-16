import { BEATFILM_MOVIE_API_URL } from '../constants/constatnts';

class MoviesApi {
    constructor(config) {// конструктор принимает объект конфигурации API
        this._url = config.url;
        this._headers = config.headers;
    }
  
    async _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        const errorMessage = await res.text();
        const error = new Error(errorMessage);
        error.status = res.status;
        throw error;
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
    url: BEATFILM_MOVIE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});
  