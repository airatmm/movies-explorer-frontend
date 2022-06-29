import './Movies.css';
import { useState, useEffect } from 'react';
import * as  apiMovies from '../../utils/moviesApi';
import MovieCard from "../MovieCard/MovieCard";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        apiMovies.getMovies()
                .then((movies) => {
                    setMovies(movies);
                    console.log("Movies loading OK!");
                })
                .catch((err) => console.log(`Ошибка загрузки данных с сервера (movies) ${err}`));

    }, []);

    return (
        <section className="movies">
            <ul className="movies__list">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                    // <li key={movies._id} {movie={movie}} />
                ))}
            </ul>
        </section>
    )
}

export default Movies;
