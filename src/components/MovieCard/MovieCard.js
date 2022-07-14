import './MovieCard.css';
import { TimeConverter } from "../../utils/TimeConverter";
import ButtonAddToSave from '../ButtonAddToSave/ButtonAddToSave';
import ButtonDeleteToSave from "../ButtonDeleteToSave/ButtonDeleteToSave";


const MovieCard = ({ movie, onSavedClick, isMovieAddedToSave }) => {

    const isAddedToSave = isMovieAddedToSave(movie)

    const handleSaveMovieClick = (e) => {
        e.preventDefault();
        onSavedClick(movie, !isAddedToSave);
    }

    const handleDeleteSaveMovieClick = (e) => {
        e.preventDefault();
        onSavedClick(movie, false);
    }

    return (
        <li className="movie__item">
            {!isAddedToSave ?
                <ButtonAddToSave onClick={handleSaveMovieClick}/>
                : <ButtonDeleteToSave onClick={handleDeleteSaveMovieClick}/>}
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
