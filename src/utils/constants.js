const { NODE_ENV } = process.env
export const MOVIES_API = 'https://api.nomoreparties.co';
export const BASE_URL = (NODE_ENV === 'production') ? 'https://api.movies.explorer.nomoreparties.sbs' : 'http://localhost:3000';
