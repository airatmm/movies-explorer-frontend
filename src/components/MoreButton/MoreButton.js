import './MoreButton.css';

const MoreButton = ({onClick}) => {
    return (
        <button
            className="movies__button-more"
            onClick={onClick}
        >
            Еще
        </button>
    )
}

export default MoreButton;
