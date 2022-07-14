import './ButtonDeleteToSave.css';

const ButtonDeleteToSave = ({onClick}) => {
    return (
        <button
            type="button"
            className="movie__button-save_active link"
            aria-label="Сохранить"
            onClick={onClick}
        />
    )
}

export default ButtonDeleteToSave;
