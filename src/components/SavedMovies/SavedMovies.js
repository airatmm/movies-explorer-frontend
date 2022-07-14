import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import { SHORT_MOVIE } from "../../utils/constants";

const SavedMovies = (
    {
        loggedIn,
        movies,
        loadingError,
        isLoading,
        onSavedClick,
        isMovieAddedToSave
    }
    ) => {
    const [isCheckboxOn, setIsCheckboxOn] = useState(false);
    const [moviesOnSearchPage, setMoviesOnSearchPage] = useState([]);
    const shortMovies= (a) => a.filter((item) => item.duration <= SHORT_MOVIE);

    const onClickCheckbox = () => {
        setIsCheckboxOn(!isCheckboxOn);
    };

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
            <SearchForm onClickCheckbox={onClickCheckbox} onSearch={handleSearch}/>

            {isLoading && <Preloader />}

            <MoviesCardList
                loggedIn={loggedIn}
                movies={isCheckboxOn ? shortMovies(moviesOnSearchPage) : moviesOnSearchPage}
                isMovieAddedToSave={isMovieAddedToSave}
                onSavedClick={onSavedClick}
            />

        <div className="movies__error">{loadingError}</div>

        </Section>
    )
}

export default SavedMovies;
