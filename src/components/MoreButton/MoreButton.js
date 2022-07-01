import './MoreButton.css';

const MoreButton = ({handleMoreButtonClick}) => {
    return (
        <button
            className="movies__button-more"
            onClick={handleMoreButtonClick}
        >
            Еще
        </button>
    )
}

export default MoreButton;
