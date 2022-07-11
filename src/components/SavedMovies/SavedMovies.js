import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";

const SavedMovies = ({loggedIn}) => {
    return (
        <Section name="movies-saved">
            <SearchForm />
            <MoviesCardList loggedIn={loggedIn}/>
        </Section>
    )
}

export default SavedMovies;
