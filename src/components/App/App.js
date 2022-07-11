import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
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


const App = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // процесс загрузки, сохранения и тд (Сохранение...)
    const [data, setData] = useState({
        // name: "",
        email: ""
    });

    const navigate = useNavigate(); // предоставляет доступ к useNavigate, используем для навигации (React Router)

    // useEffect(() => {
    //     console.log(loggedIn, "App 28");
    //     if (loggedIn) {
    //         MainApi.getUserInfo()
    //             .then((info) => {
    //                 console.log(info, "App 32 info");
    //                 setCurrentUser(info);
    //             })
    //             .catch((err) => console.log(`Ошибка загрузки данных с сервера getUserInfo ${err}`));
    //     }
    // }, [loggedIn]);


    useEffect(() => {
        if (loggedIn) {
            MainApi.getUserInfo()
                .then((data) => {
                    setCurrentUser(data);
                    console.log(data)
                    if (data) {
                        setLoggedIn(true);
                        navigate("/movies", { replace: true });
                        checkRes(data);
                    }
                    else {
                        setLoggedIn(false);
                        navigate("/signin", { replace: true });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setLoggedIn(false);
                    // setData({
                    //     name: "",
                    //     email: ""
                    // });
                });
        }
    }, [loggedIn, navigate]); // зависимость от хистори-navigate и loggedIn



    const checkRes = (data) => {
        if (data) {
            //setToken(res.jwt);
            setData({
                // name: data.name,
                email: data.email
            });
            // setLoggedIn(true);
            // history.replace({pathname: "/"});
        }
    };


    // авторизация // логин
    const handleLogin = (email, password) => {
        setIsLoading(true);
        MainApi.authorize(email, password)
            .then((data) => {
                console.log(data, " handleLogin app 86");
                checkRes(data)
                setLoggedIn(true);
                navigate("/movies", { replace: true });
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
                checkRes(data)
                navigate("/signin", { replace: true });
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
            // name: "",
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
                        <Route path="movies" element={<Movies />} />
                        <Route path="saved-movies" element={<SavedMovies />}/>
                        <Route
                            path="profile"
                            element=
                                {
                            <Profile
                                name={data.name}
                                email={data.email}
                                onSignOut={handleSignOut}
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
