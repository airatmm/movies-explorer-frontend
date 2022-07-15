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
            loadingError,
            isLoading,
            onSavedClick,
            isMovieAddedToSave,
            onClickCheckbox,
            isCheckboxOn
        }
    ) => {


    return (
        <Section name="movies">
            <SearchForm
                isCheckboxOn={isCheckboxOn}
                onClickCheckbox={onClickCheckbox}
                onSearch={onSearchSubmit}
            />

            {isLoading && <Preloader />}

            <MoviesCardList
                movies={movies}
                isMovieAddedToSave={isMovieAddedToSave}
                loggedIn={loggedIn}
                onSavedClick={onSavedClick}
            />

            <div className="movies__error">{loadingError}</div>
        </Section>
    )
}

export default Movies;
