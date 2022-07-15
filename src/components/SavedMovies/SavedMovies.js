import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";

const SavedMovies = (
    {
        loggedIn,
        movies,
        loadingError,
        isLoading,
        onSavedClick,
        isMovieAddedToSave,
        onClickCheckbox,
        isCheckboxOn
    }
    ) => {

    const [moviesOnSearchPage, setMoviesOnSearchPage] = useState([]);

    const searchProcess = (data, searchQuery) => {
        if (searchQuery) {
            const regex = new RegExp(searchQuery, 'gi');
            return data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
        }
        return [];
    };

    const handleSearch = (searchQuery) => {
         setMoviesOnSearchPage(searchProcess(movies, searchQuery));
    };

    useEffect(() => {
        setMoviesOnSearchPage(movies);
    }, [movies])

    return (
        <Section name="movies-saved">
            <SearchForm
                isCheckboxOn={isCheckboxOn}
                onClickCheckbox={onClickCheckbox}
                onSearch={handleSearch}/>

            {isLoading && <Preloader />}

            <MoviesCardList
                loggedIn={loggedIn}
                movies={moviesOnSearchPage}
                isMovieAddedToSave={isMovieAddedToSave}
                onSavedClick={onSavedClick}
            />

        <div className="movies__error">{loadingError}</div>

        </Section>
    )
}

export default SavedMovies;
