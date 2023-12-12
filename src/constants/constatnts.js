export const moviesApiUrl = 'https://api.nomoreparties.co';

export const loginErrors = {
    409: 'Вы ввели неправильный логин или пароль.',
    400: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
    401: 'При авторизации произошла ошибка. Переданный токен некорректен',
};

export const registerErrors = {
    409: 'Пользователь с таким email уже существует.',
    500: 'При регистрации пользователя произошла ошибка',
};

export const profileErrors = {
    409: 'Пользователь с таким email уже существует.',
    500: 'При обновлении профиля произошла ошибка.',
};

export const serverErrors = {
    500: '500 На сервере произошла ошибка.',
    404: '404 Страница по указанному маршруту не найдена.',
};