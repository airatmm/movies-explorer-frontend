import './Navigation.css';

const Navigation = (
    {
        name,
        children
    }
) => {
    return (
        <nav className={`${name} navigation`}>
            {children}
        </nav>
    );
}
export default Navigation;
