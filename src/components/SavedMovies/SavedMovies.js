import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";

const SavedMovies = () => {
    return (
        <Section name="movies-saved">
            <SearchForm />
            <MoviesCardList />
        </Section>
    )
}

export default SavedMovies;
