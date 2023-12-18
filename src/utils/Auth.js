import { BASE_URL } from '../constants/constatnts';

async function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    const errorMessage = await res.text();

    const error = new Error(errorMessage);
    error.status = res.status;
    throw error;
}

export const register = async (name, email, password) => {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });
    const result = await checkResponse(response);
    return result;
};

export const authorize = async (email, password) => {
    const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
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
  