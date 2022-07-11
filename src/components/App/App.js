import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
    const [data, setData] = useState({
        email: ""
    });
    // const location = useLocation();
    const navigate = useNavigate(); // предоставляет доступ к useNavigate, используем для навигации (React Router)

    const handleLoggedIn = () => {
        setLoggedIn(true);
    };

    const checkAuth = () => {
        // const path = location.pathname;
        MainApi.getUserInfo()
            .then((data) => {
                if (data) {
                    setData({
                        email: data.email
                    });
                    handleLoggedIn();
                    // navigate(path);
                }
               //  navigate("/movies", { replace: true });
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
                    checkAuth();
                    navigate("/movies", { replace: true });
                }
            })
            .catch((err) => {
                console.error(err)

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
                console.error(err)
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // выход
    const handleSignOut = () => {
        MainApi.signout();
        setLoggedIn(false);
        setData({
            email: ""
        });
        //removeToken();
        navigate("/signin", { replace: true });
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
                            element=
                                {
                            <Profile
                                name={data.name}
                                email={data.email}
                                onSignOut={handleSignOut}
                                currentUser={currentUser}
                            />
                        }
                        />
                    </Route>
                    <Route
                        path="/signin"
                        element=
                            {
                        <Login
                            onLogin={handleLogin}
                            isLoading={isLoading}
                        />
                    }
                    />
                    <Route
                        path="/signup"
                        element={
                            <Register
                                onRegister={handleRegister}
                                isLoading={isLoading}
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
