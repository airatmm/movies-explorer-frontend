import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";


const Movies = ({loggedIn, movies, onSearchSubmit/*, loadingError*/}) => {
    return (
        <Section name="movies">
            <SearchForm onSearch={onSearchSubmit}/>
            <MoviesCardList movies={movies} loggedIn={loggedIn}/>
            {/*{*/}
            {/*    !isLoading*/}
            {/*    && loadingError !== ''*/}
            {/*    && <div className="movies__error">{loadingError}</div>*/}
            {/*}*/}
        </Section>
    )
}

export default Movies;
