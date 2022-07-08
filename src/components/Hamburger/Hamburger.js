import './Hamburger.css';

const Hamburger = ({ isOpen, onHamburgerClick }) => {
    const hamburgerClassName =
        `hamburger
    ${isOpen
            ? 'hamburger_opened'
            : 'hamburger_closed'}`;

    return (
        <button
            className={hamburgerClassName}
            onClick={onHamburgerClick}
        >
            <span/>
        </button>
    )
}

export default Hamburger;
