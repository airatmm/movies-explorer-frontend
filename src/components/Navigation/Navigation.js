import './Navigation.css';

const Navigation = (
    {
        name,
        children
    }
) => {
    return (
        <nav className={`navigation ${name}`}>
            {children}
        </nav>
    );
}
export default Navigation;
