import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {useState, useEffect} from 'react';
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
import { MOVIES_API } from "../../utils/constants";


const App = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // процесс загрузки, сохранения и тд (Сохранение...)
    const [errorLogin, setErrorLogin] = useState(''); // ошибка при логине
    const [errorRegister, setErrorRegister] = useState(''); // ошибка при регистрации
    const [messageProfile, setMessageProfile] = useState(''); // при редактировании профиля
    const [loadingError, setLoadingError] = useState('')
    const [query, setQuery] = useState('');

    const [allMovies, setAllMovies] = useState([]); // список всех фильмов
    const [searchMovies, setSearchMovies] = useState([]); // Список выдачи результатов
    // const [savedMovies, setSavedMovies] = useState([]); // Список сохраненных фильмов
    // const [savedSearchMovies, setSavedSearchMovies] = useState(favoriteMovies); // Поиск в сохраненных??

    const location = useLocation();
    const navigate = useNavigate(); // предоставляет доступ к useNavigate, используем для навигации (React Router)

    const handleLoggedIn = () => {
        const path = location.pathname;
        setLoggedIn(true);
        if ((path === '/signin') || (path === '/signup')) {
            navigate("/movies", { replace: true });
        } else {
            navigate(path);
        }
    };

    const checkAuth = () => {
        MainApi.getUserInfo()
            .then((data) => {
                if (data) {
                handleLoggedIn();
                }
            })
            .catch((err) => {
                console.log(`Пользователь не авторизован ${err}`);
                navigate("/signin", { replace: true });
            });
    };

    useEffect(() => {
        checkAuth();
    }, []);


    useEffect(() => {
        //if (loggedIn) {
            MainApi.getUserInfo()
                .then((data) => {
                    if (data) {
                        setCurrentUser(data);
                        getAllMoviesData();
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setLoggedIn(false);
                });
        //}
    }, [loggedIn]);


    // авторизация // логин
    const handleLogin = (email, password) => {
        setIsLoading(true);
        MainApi.authorize(email, password)
            .then((data) => {
                if (data) {
                    checkAuth();
                    getAllMoviesData();
                }
            })
            .catch((err) => {
                if (err.status === 401) {
                    setErrorLogin("Неправильные почта или пароль")
                } else {
                    setErrorLogin("Что-то пошло не так. Попробуйте еще раз");
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
                    setErrorRegister( "Пользователь с таким email уже существует")
                } else {
                    setErrorRegister("Переданы некорректные данные при создании пользователя");
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // выход
    const handleSignOut = () => {
        localStorage.removeItem('allMovies');
        MainApi.signout();
        setLoggedIn(false);
        navigate("/signin", { replace: true });
    }

    // обновление юзер инфо, редактирование профиля
    const handleUpdateUser = (data) => {
        console.log(data, "136 App");
        setIsLoading(true);
        MainApi.editProfile(data)
            .then((res) => {
                console.log(res, "143 App");
                setLoggedIn(true);
                setCurrentUser(res);
                navigate("/profile", { replace: true });
                setTimeout(() => setMessageProfile("Данные успешно изменены"), 500);
            })
            .catch(() => setMessageProfile("Что-то пошло не так. Попробуйте еще раз"))

            .finally(() => setIsLoading(false));
    }

    // Список всех фильмов, записываем в локалсторидж (передал в useEffect при логине)
    const getAllMoviesData = () => {
        // setIsLoading(true)
        getAllMovies()
            .then((data) => {
                const allMovies = data.map((item) => {
                    return {
                        ...item,
                        image: `${MOVIES_API}/${item.image.url}`,
                    };
                });
                localStorage.setItem('allMovies', JSON.stringify(allMovies))
                setAllMovies(allMovies);
                console.log("Movies loading OK!");
            })
            .catch(() => {
                localStorage.removeItem('allMovies');
                setLoadingError(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`)
            });
            //.finally(() => setIsLoading(false));
    };

    const searchProcess = (data, searchQuery) => {
        if (searchQuery) {
            const regex = new RegExp(searchQuery, 'gi');
            const filterData = data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
            if (filterData.length === 0) {
                setLoadingError('Ничего не найдено');
            } else {
                setLoadingError('');
            }
            return filterData;
        }
        return [];
    };

    const handleSearch = (searchQuery) => {
        setIsLoading(true);
        setTimeout(() => {
            setQuery(searchQuery);
            setSearchMovies(searchProcess(allMovies, searchQuery));
            setIsLoading(false);
        }, 600);
    };

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
                                    loadingError={loadingError}
                                    onSearchSubmit={handleSearch}
                                    // savedMovies={false}
                                    // movies={filterMovies}
                                    // onBookmarkClick={bookmarkHandler}
                                    // isMovieAdded={isMovieAdded}
                                />
                            </PrivateRoute>
                        } />
                        <Route path="saved-movies" element={
                            <PrivateRoute loggedIn={loggedIn}>
                                <SavedMovies loggedIn={loggedIn}
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
