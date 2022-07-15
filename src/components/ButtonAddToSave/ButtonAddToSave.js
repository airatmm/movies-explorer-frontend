import './ButtonAddToSave.css';

const ButtonAddToSave = ({ isAddedToSave, onClick }) => {
    return (
        <button
            type="button"
            className={isAddedToSave ? "movie__button-save_active link" : "movie__button-save link" }
            aria-label="Сохранить"
            onClick={onClick}
        >
            Сохранить
        </button>
    )
}

export default ButtonAddToSave;
