import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import getMovies from '../../utils/moviesApi';
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';

const MoviesCardList = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [initialMovies, setInitialMovies] = useState(0);
    const [moreMovies, setMoreMovies] = useState(0);

    const handleMoreButtonClick = () => {
        setInitialMovies(initialMovies + moreMovies);
    }

    useEffect(() => {
        setIsLoading(true)
        getMovies()
            .then((movies) => {
                setMovies(movies);
                setInitialMovies(12);
                setMoreMovies(6);
                setIsLoading(false)
                console.log("Movies loading OK!");
            })
            .catch((err) => console.log(`Ошибка загрузки данных с сервера (movies) ${err}`));

    }, []);

    return (
        <>
            {isLoading ? ('Loading.....') :
            (
                <>
                <ul className="movies__list">
                {movies.slice(0, initialMovies).map((movie, id) => (
                    <MovieCard
                        key={id}
                        movie={movie}
                    />
                    // <li key={movies._id} {movie={movie}} />
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
