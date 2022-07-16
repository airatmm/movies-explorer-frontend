import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";
import Preloader from "../Preloader/Preloader";

const SavedMovies = (
    {
        loggedIn,
        movies,
        loadingError,
        isLoading,
        onSavedClick,
        isMovieAddedToSave,
        onSearchSubmit,
        onClickCheckbox,
        isCheckboxOn,
        isSearchedOnSaveMoviesPage,
        searchMovies
    }
    ) => {

    return (
        <Section name="movies-saved">
            <SearchForm
                isCheckboxOn={isCheckboxOn}
                onClickCheckbox={onClickCheckbox}
                onSearch={onSearchSubmit}/>

            {isLoading && <Preloader />}

            <MoviesCardList
                loggedIn={loggedIn}
                movies={isSearchedOnSaveMoviesPage ? searchMovies: movies}
                isMovieAddedToSave={isMovieAddedToSave}
                onSavedClick={onSavedClick}
            />

        <div className="movies__error">{loadingError}</div>

        </Section>
    )
}

export default SavedMovies;
