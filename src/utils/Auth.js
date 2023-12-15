// export const BASE_URL = 'http://localhost:3001';
export const BASE_URL = 'https://api.sha.nomoredomainsmonster.ru';

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

export const getContent = async () => {
    const response = await fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return checkResponse(response);
};

export const signOut = async () => {
    const response = await fetch(`${BASE_URL}/signout`, {
        method: 'GET',
        credentials: 'include'
    });
    return checkResponse(response); 
};
  