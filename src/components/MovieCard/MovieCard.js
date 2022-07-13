import './MovieCard.css';
import { TimeConverter } from "../../utils/TimeConverter";
import { useState } from 'react';


const MovieCard = ({ movie }) => {
    const [activeClass, setActiveClass] = useState('movie__button-save link')
    const [likedCard, setLikedCard] = useState(false);
    // const [isLiked, setIsLiked] = useState(false);

    const handleLikedMovie = () => {
        setActiveClass(activeClass === 'movie__button-save link' ? 'movie__button-save_active link' : 'movie__button-save link')
        setLikedCard(!likedCard)
    }

    return (
        <li className="movie__item">
            {activeClass === 'movie__button-save link' ?
                (<button type="button" className={activeClass} aria-label="Сохранить" onClick={handleLikedMovie}>Сохранить</button>)
                : (<button type="button" className={activeClass} aria-label="Сохранить" onClick={handleLikedMovie} />)}
            <a href={movie.trailerLink} className="movie__item_link link" target="_blank" rel="noreferrer">
                <img className="movie__images" src={movie.image} alt={movie.nameRU}/>
            </a>
            <div className="movie__content">
                <h2 className="movie__caption">{movie.nameRU}</h2>
                <p className="movie__duration">{TimeConverter(movie.duration)}</p>
            </div>
        </li>
    )
}

export default MovieCard;
