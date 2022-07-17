import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {useState, useEffect } from 'react';
import * as  MainApi from '../../utils/MainApi';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import PageNotFound from "../PageNotFound/PageNotFound";
import HeaderFooterLayout from "../HeaderFooterLayout/HeaderFooterLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import getAllMovies from "../../utils/MoviesApi";
import {
    DUPLICATE_ERROR,
    INCORRECT_DATA_LOGIN,
    INCORRECT_DATA_REGISTRATION,
    MOVIES_API,
    NOT_FOUND_ERROR,
    SERVER_ERROR,
    SHORT_MOVIE, SOMETHING_WRONG, USER_UPDATE_MESSAGE
} from "../../utils/constants";

const App = () => {
    const [currentUser, setCurrentUser] = useState({}); // Состояние текущего пользователя
    const [loggedIn, setLoggedIn] = useState(false); // Состояние логина
    const [isLoading, setIsLoading] = useState(false); // процесс загрузки, сохранения и тд (Сохранение...)
    const [errorLogin, setErrorLogin] = useState(''); // Сообщение ошибки логина
    const [errorRegister, setErrorRegister] = useState(''); // Сообщение ошибки регистрации
    const [messageProfile, setMessageProfile] = useState(''); // Сообщение редактирования профиля
    const [loadingError, setLoadingError] = useState('') // Сообщение ошибки Movies
    const [loadingErrorSaved, setLoadingErrorSaved] = useState('') // Сообщение ошибки SavedMovies
    const [allMovies, setAllMovies] = useState([]); // Список всех фильмов
    const [searchMovies, setSearchMovies] = useState([]); // Список выдачи результатов поиска
    const [savedMovies, setSavedMovies] = useState([]); // Список сохраненных фильмов
    const [isCheckboxOnMovies, setIsCheckboxOnMovies] = useState(false); // Состояние чекбокса короткометражек Фильмы
    const [isCheckboxOnSavedMovies, setIsCheckboxOnSavedMovies] = useState(false); // Состояние чекбокса короткометражек СохраненныеФильмы
    const [isSearchedOnSaveMoviesPage, setIsSearchedOnSaveMoviesPage] = useState(false); // Состояние производится ли поиск в сохраненных фильмах
    const [moviesOnSearchPage, setMoviesOnSearchPage] = useState([]); // Список фильмов при поиске в сохраненных фильмах
    const [query, setQuery] = useState(''); // Поисковая фраза

    const location = useLocation();
    const navigate = useNavigate(); // Предоставляет доступ к useNavigate, был UseHistory в v5 Router
    const path = location.pathname;
    const locationMovies = path === "/movies";
    const isLocationSavedMovies = path === "/saved-movies";

    // Клик на чекбокс короткометражек
    const onClickCheckbox = () => {
        locationMovies ?
            setIsCheckboxOnMovies(!isCheckboxOnMovies)
            : setIsCheckboxOnSavedMovies(!isCheckboxOnSavedMovies);
    };


    useEffect(() => {
        setIsCheckboxOnSavedMovies(false);
        setIsSearchedOnSaveMoviesPage(false);
    }, [isLocationSavedMovies]);


    const handleLoggedIn = () => {

        setLoggedIn(true);
        if ((path === '/signin') || (path === '/signup')) {
            navigate("/movies", { replace: true });
        } else {
            navigate(path);
        }
    };

    // Проверка токена (jwt) в cookies
    const checkAuth = () => {
        MainApi.getUserInfo()
            .then((data) => {
                if (data) {
                handleLoggedIn();
                }
            })
            .catch(() => {
                navigate("/", { replace: true });
            });
    };


    useEffect(() => {
        checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

// загрузка информации о пользователе
    useEffect(() => {
        if (loggedIn) {
            MainApi.getUserInfo()
                .then((data) => {
                    if (data) {
                        setCurrentUser(data);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setLoggedIn(false);
                });
        }
    }, [loggedIn]);


    // авторизация // логин
    const handleLogin = (email, password) => {
        setIsLoading(true);
        MainApi.authorize(email, password)
            .then((data) => {
                if (data) {
                    checkAuth();
                }
            })
            .catch((err) => {
                if (err.status === 401) {
                    setErrorLogin(INCORRECT_DATA_LOGIN)
                } else {
                    setErrorLogin(SOMETHING_WRONG);
                }
                setLoggedIn(false);

            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // регистрация
    const handleRegister = (name, email, password) => {
        setIsLoading(true);
        MainApi.register(name, email, password)
            .then((data) => {
                if (data) {
                // checkRes(data)
                handleLogin(email, password);
                }
            })
            .catch((err) => {
                if (err.status === 409) {
                    setErrorRegister( DUPLICATE_ERROR)
                } else {
                    setErrorRegister(INCORRECT_DATA_REGISTRATION);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // выход
    const handleSignOut = () => {
        MainApi.signout();
        localStorage.removeItem('allMovies');
        localStorage.removeItem('savedMovies');
        localStorage.removeItem('isCheckboxOn');
        localStorage.removeItem('searchQuery');
        localStorage.removeItem('isCheckboxOnMovies');
        localStorage.removeItem('searchMovies');
        setAllMovies([]);
        setSearchMovies([]);
        setSavedMovies([]);
        setIsCheckboxOnSavedMovies([]);
        setMoviesOnSearchPage([]);
        setLoadingError('')
        setQuery('')
        setLoggedIn(false);
        setIsCheckboxOnMovies(false);
        setIsCheckboxOnMovies(false);
        navigate("/", { replace: true });
    }

    // обновление юзер инфо, редактирование профиля
    const handleUpdateUser = (data) => {
        setIsLoading(true);
        MainApi.editProfile(data)
            .then((res) => {
                setLoggedIn(true);
                setCurrentUser(res);
                navigate("/profile", { replace: true });
                setTimeout(() => setMessageProfile(USER_UPDATE_MESSAGE), 500);
            })
            .catch(() => setMessageProfile(SOMETHING_WRONG))

            .finally(() => setIsLoading(false));
    }

    // Список всех фильмов, записываем в локалсторидж (передал в useEffect при логине) ~223
    const getAllMoviesData = () => {
        getAllMovies()
            .then((data) => {
                const allMovies = data.map((item) => ({
                    ...item,
                    image: `${MOVIES_API}/${item.image.url}`,
                    thumbnail: `${MOVIES_API}/${item.image.formats.thumbnail.url}`
                }));
                localStorage.setItem('allMovies', JSON.stringify(allMovies))
                setAllMovies(allMovies);
            })
            .catch(() => {
                localStorage.removeItem('allMovies');
                setLoadingError(SERVER_ERROR)
            });
   };

    // Получаем массив сохраненных/избранных фильмов из локалсториджа (передал в useEffect при логине) ~223
    const getSavedMovies = () => {
        MainApi.getSavedMovies()
            .then((data) => {
                const savedMoviesArr = data.map((item) => ({ ...item, id: item.movieId }));
                localStorage.setItem('savedMovies', JSON.stringify(savedMoviesArr))
                setSavedMovies(savedMoviesArr);
            })
            .catch(() => {
                localStorage.removeItem('savedMovies');
                setLoadingError(SERVER_ERROR)
            });
    }

    useEffect(() => {
        if (loggedIn) {
            const allMovies = JSON.parse(localStorage.getItem('allMovies'));
            if (allMovies) {
                setAllMovies(allMovies);
            } else {
                getAllMoviesData();
            }
            const searchMovies = JSON.parse(localStorage.getItem('searchMovies'));
            if (searchMovies) {
                setSearchMovies(searchMovies);
                setLoadingError(false);
            }

            const savedMoviesArr = JSON.parse(localStorage.getItem('savedMovies'));
            if (savedMoviesArr) {
                setSavedMovies(savedMoviesArr);
            } else {
                getSavedMovies();
            }
            const isCheckboxOnMovies = JSON.parse(localStorage.getItem('isCheckboxOnMovies'));
            if (isCheckboxOnMovies) {
                setIsCheckboxOnMovies(isCheckboxOnMovies);
            }

            const searchQuery = JSON.parse(localStorage.getItem('searchQuery'));
            if (searchQuery) {
                setQuery(searchQuery);
            }
        }

    }, [loggedIn]);

    // Добавление в массив сохраненные/избранные
    const addMoviesToSaved = (movie) => {
        MainApi.addMoviesToSaved(movie)
            .then((data) => {
                const trailerLink = data.trailerLink ? data.trailerLink : "https://www.youtube.com";
                setSavedMovies([...savedMovies, { ...data, id: data.movieId, trailerLink: trailerLink }]);
            })
            .catch((err) => console.error(err));
    }

    // Удаление из массива сохраненные/избранные
    const deleteMoviesToSaved = (movie) => {
        const movieId = savedMovies.find((item) => item.id === movie.id);
        MainApi.removeMoviesToSaved(movieId._id)
            .then((data) => {
                if (isSearchedOnSaveMoviesPage) {
                    const newMoviesArrOnSearchPage = moviesOnSearchPage.filter((item) => item.movieId !== data.movieId);
                    setMoviesOnSearchPage(newMoviesArrOnSearchPage);
                }
                const newSavedMoviesArr = savedMovies.filter((item) => item.movieId !== data.movieId);
                setSavedMovies(newSavedMoviesArr)
            })
            .catch((err) => console.error(err));
    }

    // Добавление/Удаление в массив сохраненные/избранные (кнопка лайк/сохранить)
    const handleAddedMoviesToSaved = (movie, isMovieAddedToSave) =>(isMovieAddedToSave ? addMoviesToSaved(movie) : deleteMoviesToSaved(movie));

    // Проверяем есть ли уже фильм в массиве сохраненные/избранные
    const isMovieAddedToSave = (movie) => savedMovies.some(item => item.id === movie.id);

    // фильтр для короткометражек
    const shortMovies= (a) => a.filter((item) => item.duration <= SHORT_MOVIE);



    // Процесс поиска фильмов
    // regex - рег. выражение - искать все совпадения
    // Поиск по RU и EN названиям
    const searchProcess = (data, searchQuery) => {
        if (searchQuery) {
            const regex = new RegExp(searchQuery, 'gi');
            const searchData = data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
            if (searchData) {
                return searchData;
            }
            return [];
        }
    };

    const handleSearch = (searchQuery) => {
        setIsLoading(true);
        setTimeout(() => {
            setQuery(searchQuery);
            const searchData = searchProcess(allMovies, searchQuery);
            if (searchData.length === 0) {
            setLoadingError(NOT_FOUND_ERROR);
            }
            setSearchMovies(searchData);
            setIsLoading(false);
        }, 600);
    };

    // Поиск в сохраненных
    const handleInSavedSearch = (searchQuery) => {
        setIsLoading(true);
        setTimeout(() => {
            const searchData = searchProcess(savedMovies, searchQuery);
            if (searchData.length === 0) {
                setLoadingErrorSaved(NOT_FOUND_ERROR);
            }
            setMoviesOnSearchPage(searchData);
            setIsSearchedOnSaveMoviesPage(true);
            setIsLoading(false);
        }, 600);
    };

    useEffect(() => {
        setMoviesOnSearchPage(moviesOnSearchPage);
    }, [moviesOnSearchPage])

    useEffect(() => {
        if (loggedIn ) {
            localStorage.setItem('searchMovies', JSON.stringify(searchMovies));
            localStorage.setItem('isCheckboxOnMovies', JSON.stringify(isCheckboxOnMovies));
            localStorage.setItem('searchQuery', JSON.stringify(query));
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        }
    }, [loggedIn, query, isCheckboxOnMovies, searchMovies, savedMovies]);



    return (
         <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HeaderFooterLayout loggedIn={loggedIn}/>}>
                        <Route index element={<Main />}/>
                        <Route path="movies" element={
                            <PrivateRoute loggedIn={loggedIn}>
                                <Movies
                                    loggedIn={loggedIn}
                                    isLoading={isLoading}
                                    movies={searchMovies}
                                    shortMovies={shortMovies}
                                    badRequest={loadingError}
                                    onSearchSubmit={handleSearch}
                                    onSavedClick={handleAddedMoviesToSaved}
                                    isMovieAddedToSave={isMovieAddedToSave}
                                    onClickCheckbox={onClickCheckbox}
                                    isCheckboxOnMovies={isCheckboxOnMovies}
                                    query={query}
                                />
                            </PrivateRoute>
                        } />
                        <Route path="saved-movies" element={
                            <PrivateRoute loggedIn={loggedIn}>
                                <SavedMovies
                                    loggedIn={loggedIn}
                                    isLoading={isLoading}
                                    movies={savedMovies}
                                    searchMovies={moviesOnSearchPage}
                                    shortMovies={shortMovies}
                                    isSearchedOnSaveMoviesPage={isSearchedOnSaveMoviesPage}
                                    badRequest={loadingErrorSaved}
                                    onSearchSubmit={handleInSavedSearch}
                                    onSavedClick={handleAddedMoviesToSaved}
                                    isMovieAddedToSave={isMovieAddedToSave}
                                    onClickCheckbox={onClickCheckbox}
                                    isCheckboxOnSavedMovies={isCheckboxOnSavedMovies}
                                />
                            </PrivateRoute>
                        }/>
                        <Route path="profile" element={
                            <PrivateRoute loggedIn={loggedIn}>
                                <Profile
                                    onSignOut={handleSignOut}
                                    onUpdateUser={handleUpdateUser}
                                    message={messageProfile}
                                    loggedIn={loggedIn}
                                />
                            </PrivateRoute>
                        }/>
                    </Route>

                    <Route path="/signin" element={
                        <Login
                            onLogin={handleLogin}
                            isLoading={isLoading}
                            badRequest={errorLogin}
                        />
                    }/>
                    <Route path="/signup" element={
                        <Register
                            onRegister={handleRegister}
                            isLoading={isLoading}
                            badRequest={errorRegister}
                        />
                    }/>
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
            </div>
         </CurrentUserContext.Provider>
)
}

export default App;
