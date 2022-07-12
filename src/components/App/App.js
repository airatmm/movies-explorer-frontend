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


const App = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // процесс загрузки, сохранения и тд (Сохранение...)
    // const [data, setData] = useState({
    //     email: ""
    // });
    const [errorLogin, setErrorLogin] = useState('');
    const [errorRegister, setErrorRegister] = useState('');
    const [messageProfile, setMessageProfile] = useState('');

    const location = useLocation();
    const navigate = useNavigate(); // предоставляет доступ к useNavigate, используем для навигации (React Router)

    console.log(loggedIn, "App 27");
    console.log(location.pathname, "App 28");

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
                // setData({
                //     email: data.email
                // });
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
                    checkAuth()
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
        MainApi.signout();
        setLoggedIn(false);
        // setData({
        //     email: ""
        // });
        //removeToken();
        navigate("/signin", { replace: true });
    }

    // обновление юзер инфо, редактирование профиля
    const handleUpdateUser = (data) => {
        setIsLoading(true);
        MainApi.editProfile(data)
            .then((res) => {
                setLoggedIn(true);
                setCurrentUser(res);
                navigate("/profile", { replace: true });
                setTimeout(() => setMessageProfile("Данные успешно изменены"), 500);
            })
            .catch(() => setMessageProfile("Что-то пошло не так. Попробуйте еще раз"))
            .finally(() => setIsLoading(false));
    }

    return (
         <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HeaderFooterLayout loggedIn={loggedIn}/>}>
                        <Route index element={<Main />}/>
                        <Route path="movies" element={<PrivateRoute loggedIn={loggedIn}><Movies loggedIn={loggedIn} /></PrivateRoute>} />
                        <Route path="saved-movies" element={<PrivateRoute loggedIn={loggedIn}><SavedMovies loggedIn={loggedIn} /></PrivateRoute>}/>
                        <Route
                            path="profile"
                            element={<PrivateRoute loggedIn={loggedIn}>
                            <Profile
                                onSignOut={handleSignOut}
                                onUpdateUser={handleUpdateUser}
                                message={messageProfile}
                                loggedIn={loggedIn}
                                // currentUser={currentUser}
                            /></PrivateRoute>}
                        />
                    </Route>
                    <Route
                        path="/signin"
                        element=
                            {
                        <Login
                            onLogin={handleLogin}
                            isLoading={isLoading}
                            badRequest={errorLogin}
                        />
                    }
                    />
                    <Route
                        path="/signup"
                        element={
                            <Register
                                onRegister={handleRegister}
                                isLoading={isLoading}
                                badRequest={errorRegister}
                            />
                        }
                    />
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
            </div>
         </CurrentUserContext.Provider>
)
}

export default App;
