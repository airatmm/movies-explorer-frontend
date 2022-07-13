import './MoviesCardList.css';
// import { useState, useEffect } from 'react';
//
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';
import Preloader from '../Preloader/Preloader'

const MoviesCardList = (
    {
        isLoading,
        // savedMovies,
        movies,
        // onBookmarkClick,
        // isMovieAdded,
}) => {
    // const [moviesList, setMoviesList] = useState([]);

    // const [initialMovies, setInitialMovies] = useState(0);
    // const [moreMovies, setMoreMovies] = useState(0);
    //
    //
    // const handleMoreButtonClick = () => {
    //     setInitialMovies(initialMovies + moreMovies);
    // }

    return (
        <>
            {isLoading ? (<Preloader />) :
            (
                <>
                <ul className="movies__list">
                {movies.map((movie, id) => (
                    <MovieCard
                        key={id}
                        movie={movie}
                    />
                ))}
            </ul>
                <MoreButton
                    // movies={movies}
                    // handleMoreButtonClick={handleMoreButtonClick}
                />
                </>
            )
            }
        </>
    )
}

export default MoviesCardList;
