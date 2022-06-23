import React /*{ useState } */ from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import AboutProject from '../AboutProject/AboutProject';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from "../Header/Header";


const App = () => {
  // const [currentUser, setCurrentUser] = useState({});

return (
    // <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
          <Header />
          <Routes>
              <Route path="/" element={<AboutProject />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Register />} />
          </Routes>
      </div>
    // </CurrentUserContext.Provider>
)
}

export default App;
