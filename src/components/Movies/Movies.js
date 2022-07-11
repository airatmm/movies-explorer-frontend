import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";


const Movies = ({loggedIn}) => {
    return (
        <Section name="movies">
            <SearchForm />
            <MoviesCardList loggedIn={loggedIn}/>
        </Section>
    )
}

export default Movies;
