import './Movies.css';
// import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Section from "../Section/Section";


const Movies = () => {
    return (
        <Section name="movies">
            <SearchForm />
            <MoviesCardList />
        </Section>
    )
}

export default Movies;
