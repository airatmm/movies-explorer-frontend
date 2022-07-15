import { BASE_URL } from './constants';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({name, email, password}),
    })
        .then(checkResponse);
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({email, password}),
    })
        .then(checkResponse)
    // .then((data) => {
    //     if (data.token) {
    //         //localStorage.setItem('jwt', data.token);
    //         return data;
    //     }
    // })
};

export const signout = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'include',
    }).then(checkResponse);
};

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'include',
    })
        .then(checkResponse);
};

// редактирование профиля
export const editProfile = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            name,
            email
        ),
        credentials: 'include',
    })
        .then(checkResponse);
}

// /saved-movies
export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        credentials: 'include',
    })
        .then(checkResponse);
}

export const addMoviesToSaved = (data) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            country: data.country ? data.country : "Нет данных о стране",
            director: data.director ? data.director : "Нет данных о режиссёре",
            duration: data.duration ? data.duration : "Нет данных о длительности",
            year: data.year ? data.year : "Нет данных о годе выхода",
            description: data.description ? data.description : "Нет данных об описании",
            image: data.image ? data.image : "Нет данных об изображении",
            trailerLink: data.trailerLink ? data.trailerLink : "Нет данных о трейлере",
            thumbnail: data.thumbnail ? data.thumbnail : "Нет данных",
            movieId: data.id,
            nameRU: data.nameRU ? data.nameRU : "Нет названия на русском языке",
            nameEN: data.nameEN ? data.nameEN : "Нет названия на английском языке",

        }),
    })
        .then(checkResponse);
}

export const removeMoviesToSaved = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        credentials: 'include',
    })
        .then(checkResponse);
}

// //Bearer - предоставить доступ носителю этого токена
