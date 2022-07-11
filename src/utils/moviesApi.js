import { MOVIES_API } from "./constants";

// Проверяем на ошибки
// const checkResponse = (res) => {
//     if (res.ok) {
//         return res.json();
//     }
//     return Promise.reject(`Ошибка ${res.status}`);
// };
//
// // Получаем фильмы с сервера
// export const getMovies = () => {
//     return fetch(`${MOVIES_API}/beatfilm-movies`, {
//         method: "GET",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//     }).then(checkResponse);
// };
const getMovies = async () => {
    try {
        const response = await fetch(`${MOVIES_API}/beatfilm-movies`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }
        )
        return await response.json();
    } catch(err) {
        console.log(`Ошибка ${err.status}`);
    }
}

export default getMovies;
