// export const BASE_URL = "http://localhost:3000";
export const BASE_URL = 'https://api.diploma.nomoredomainsmonster.ru';

async function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    const errorMessage = await res.text();

    const error = new Error(errorMessage);
    error.status = res.status;
    throw error;
}

export const register = async (name, email, password) => {//функция для регистрации
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name, email, password)
    });
    return checkResponse(response); 
};

export const authorize = async (password, email) => {//функция для авторизации
    const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(password, email)
    });
    return checkResponse(response);
};

export const getContent = async () => {//функция для получения контента пользователя <-----убрал token из аргумента
    const response = await fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return checkResponse(response);
};