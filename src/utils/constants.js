const { NODE_ENV } = process.env
export const MOVIES_API = 'https://api.nomoreparties.co';
export const BASE_URL = (NODE_ENV === 'production') ? 'https://api.movies.explorer.nomoreparties.sbs' : 'http://localhost:3000';

export const SHORT_MOVIE = 40;
export const DESKTOP = 1280;
export const MIDDLE = 768;
export const MOBILE = 320;
