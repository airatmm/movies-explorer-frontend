import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import getMovies from '../../utils/moviesApi';
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';
import Preloader from '../Preloader/Preloader'

const MoviesCardList = ({loggedIn}) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [initialMovies, setInitialMovies] = useState(0);
    const [moreMovies, setMoreMovies] = useState(0);

    const handleMoreButtonClick = () => {
        setInitialMovies(initialMovies + moreMovies);
    }

    useEffect(() => {
        if (loggedIn) {
        setIsLoading(true)
        getMovies()
            .then((movies) => {
                setMovies(movies);
                setInitialMovies(12);
                setIsLoading(true)
                setMoreMovies(6);
                setIsLoading(false)
                console.log("Movies loading OK!");
            })
            .catch((err) => console.log(`Ошибка загрузки данных с сервера (movies) ${err}`));
        }

    }, [loggedIn]);

    return (
        <>
            {isLoading ? (<Preloader />) :
            (
                <>
                <ul className="movies__list">
                {movies.slice(0, initialMovies).map((movie, id) => (
                    <MovieCard
                        key={id}
                        movie={movie}
                    />
                ))}
            </ul>
                <MoreButton
                    movies={movies}
                    handleMoreButtonClick={handleMoreButtonClick}
                />
                </>
            )
            }
        </>
    )
}

export default MoviesCardList;
