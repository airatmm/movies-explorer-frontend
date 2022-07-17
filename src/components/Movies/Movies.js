import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";
import Preloader from "../Preloader/Preloader";

const Movies = (
        {
            loggedIn,
            movies,
            onSearchSubmit,
            badRequest,
            isLoading,
            onSavedClick,
            isMovieAddedToSave,
            onClickCheckbox,
            isCheckboxOnMovies,
            shortMovies,
            query
        }
    ) => {


    return (
        <Section name="movies">
            <SearchForm
                onClickCheckbox={onClickCheckbox}
                onSearch={onSearchSubmit}
                isCheckboxOnMovies={isCheckboxOnMovies}
                query={query}
            />

            {isLoading && <Preloader />}
            <div className="movies__error">{badRequest}</div>
            <MoviesCardList
                movies={isCheckboxOnMovies ? shortMovies(movies) : movies}
                isMovieAddedToSave={isMovieAddedToSave}
                loggedIn={loggedIn}
                onSavedClick={onSavedClick}
            />



        </Section>
    )
}

export default Movies;
