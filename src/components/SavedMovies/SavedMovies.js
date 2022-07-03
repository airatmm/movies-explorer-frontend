import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = () => {
    return (
        <section className="movies movies__saved">
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}

export default SavedMovies;
