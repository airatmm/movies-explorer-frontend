import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";
import Preloader from "../Preloader/Preloader";

const SavedMovies = (
    {
        loggedIn,
        movies,
        badRequest,
        isLoading,
        onSavedClick,
        isMovieAddedToSave,
        onSearchSubmit,
        onClickCheckbox,
        isSearchedOnSaveMoviesPage,
        searchMovies,
        isCheckboxOnSavedMovies,
        shortMovies
    }
    ) => {

    const moviesChoice = isSearchedOnSaveMoviesPage ? searchMovies: movies;

    return (
        <Section name="movies-saved">
            <SearchForm
                onClickCheckbox={onClickCheckbox}
                onSearch={onSearchSubmit}
                isCheckboxOnSavedMovies={isCheckboxOnSavedMovies}
            />


            {isLoading && <Preloader />}

            <div className="movies__error">{badRequest}</div>

            <MoviesCardList
                loggedIn={loggedIn}
                movies={isCheckboxOnSavedMovies ? shortMovies(moviesChoice) : moviesChoice}
                isMovieAddedToSave={isMovieAddedToSave}
                onSavedClick={onSavedClick}

            />

        </Section>
    )
}

export default SavedMovies;
