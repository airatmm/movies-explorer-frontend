import './MovieCard.css';
import { MOVIES_API } from "../../utils/constants";
import { TimeConverter } from "../../utils/TimeConverter";

const MovieCard = ({ movie }) => {
    return (
        <li className="movie__item">
            <button type="button" className="movie__button-save link" aria-label="Сохранить"/*onClick={handleDeleteClick}*/>Сохранить</button>
            <img className="movie__images" src={`${MOVIES_API}/${movie.image.url}`} alt={movie.nameRU}/>
            <div className="movie__content">
                <h2 className="movie__caption">{movie.nameRU}</h2>
                <p className="movie__duration">{TimeConverter(movie.duration)}</p>
            </div>
        </li>
    )
}

export default MovieCard;
