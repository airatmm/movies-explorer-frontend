import './MoviesSection.css';

const MoviesSection = ({ name }) => {
    return (
        <nav className={`section__movies ${name}`}>
            {children}
        </nav>
    );
}
export default MoviesSection;
