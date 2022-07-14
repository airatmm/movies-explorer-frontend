import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DESKTOP, MIDDLE, MOBILE } from '../../utils/constants';

const MoviesCardList = ({ movies, onSavedClick, isMovieAddedToSave }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [moviesCount, setMoviesCount] = useState(0);
    const [extraCount, setExtraCount] = useState(0);

    const updateWidth = () => {
        setTimeout(() => {
            setWidth(window.innerWidth);
        }, 500)
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        if(width >= DESKTOP) {
            setMoviesCount(12);
            setExtraCount(3);
        }
        if(width >= MIDDLE && width < DESKTOP) {
            setMoviesCount(8);
            setExtraCount(2);
        }
        if(width >= MOBILE && width < MIDDLE) {
            setMoviesCount(5);
            setExtraCount(2);
        }
        return () => window.removeEventListener('resize', updateWidth)
    }, [width]);

    const handleMoreButtonClick = () => {
        setMoviesCount(moviesCount + extraCount);
    }

    const resMovies = movies.slice(0, moviesCount);

    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <ul className="movies__list">
            {resMovies.map((movie, id) => (
                <MovieCard
                    key={id}
                    movie={movie}
                    onSavedClick={onSavedClick}
                    isMovieAddedToSave={isMovieAddedToSave}
                />
            ))}
            </ul>

            {path === "/saved-movies" ? "" : moviesCount < movies.length && <MoreButton onClick={handleMoreButtonClick} />}

        </>
    )
}

export default MoviesCardList;
