import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {useState} from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from "../Header/Header";
import Main from '../Main/Main';

const App = () => {
    // const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(true);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    return (
        // <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
            <Header
                loggedIn={loggedIn}
            />
            <Main />
            <Routes>
                <Route path="/" element={<AboutProject />}/>
                <Route path="/movies" element={<Movies />}/>
                <Route path="/saved-movies" element={<SavedMovies />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/signin" element={<Login onLogin={handleLogin} />}/>
                <Route path="/signup" element={<Register />}/>
            </Routes>
        </div>
    // </CurrentUserContext.Provider>
)
}

export default App;
