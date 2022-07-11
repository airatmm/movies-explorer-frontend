import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {useState} from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import PageNotFound from "../PageNotFound/PageNotFound";
import HeaderFooterLayout from "../HeaderFooterLayout/HeaderFooterLayout";

const App = () => {
    // const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(true);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    return (
        // <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HeaderFooterLayout loggedIn={loggedIn}/>}>
                        <Route index element={<Main />}/>
                        <Route path="movies" element={<Movies />} />
                        <Route path="saved-movies" element={<SavedMovies />}/>
                        <Route path="profile" element={<Profile />}/>
                    </Route>
                    <Route path="/signin" element={<Login onLogin={handleLogin} />}/>
                    <Route path="/signup" element={<Register />}/>
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
            </div>
        // </CurrentUserContext.Provider>
)
}

export default App;
