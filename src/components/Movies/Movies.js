import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";
import { SHORT_MOVIE } from "../../utils/constants";

const Movies = (
        {
            loggedIn,
            movies,
            onSearchSubmit,
            loadingError,
            isLoading,
            onSavedClick,
            isMovieAddedToSave
        }
    ) => {

    const [isCheckboxOn, setIsCheckboxOn] = useState(false);
    const shortMovies= (a) => a.filter((item) => item.duration <= SHORT_MOVIE);

    const onClickCheckbox = () => {
        setIsCheckboxOn(!isCheckboxOn);
    };

    return (
        <Section name="movies">
            <SearchForm onClickCheckbox={onClickCheckbox} onSearch={onSearchSubmit}/>

            {isLoading && <Preloader />}

            <MoviesCardList
                movies={isCheckboxOn ? shortMovies(movies) : movies}
                isMovieAddedToSave={isMovieAddedToSave}
                loggedIn={loggedIn}
                onSavedClick={onSavedClick}
            />

            <div className="movies__error">{loadingError}</div>
        </Section>
    )
}

export default Movies;
