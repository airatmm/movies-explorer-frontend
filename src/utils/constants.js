const { NODE_ENV } = process.env
export const MOVIES_API = 'https://api.nomoreparties.co';
export const BASE_URL = (NODE_ENV === 'production') ? 'https://api.movies.explorer.nomoreparties.sbs' : 'http://localhost:3000';

export const SHORT_MOVIE = 40;
export const DESKTOP = 1280;
export const MIDDLE = 768;
export const MOBILE = 320;

export const DUPLICATE_ERROR = 'Пользователь с таким email уже существует';
export const INCORRECT_DATA_REGISTRATION = 'Переданы некорректные данные при создании пользователя';
export const INCORRECT_DATA_LOGIN = 'Неправильные почта или пароль';
export const SOMETHING_WRONG = 'Что-то пошло не так. Попробуйте еще раз';
export const USER_UPDATE_MESSAGE = 'Данные успешно изменены';
export const NOT_FOUND_ERROR = 'Ничего не найдено';
export const SERVER_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
