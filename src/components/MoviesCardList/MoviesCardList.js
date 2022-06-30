import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import getMovies from '../../utils/moviesApi';
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';

const MoviesCardList = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getMovies()
            .then((movies) => {

                setMovies(movies);
                setIsLoading(false)
                console.log("Movies loading OK!");
            })
            .catch((err) => console.log(`Ошибка загрузки данных с сервера (movies) ${err}`));

    }, []);

    return (
        <>
            {isLoading ? ('Loading.....') :
            (
                <ul className="movies__list">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                    // <li key={movies._id} {movie={movie}} />
                ))}
            </ul>
            )
            }
            <MoreButton />
        </>
    )
}

export default MoviesCardList;
