import { Navigate } from 'react-router-dom';

const PrivateRoute = ({loggedIn, children}) => {
    return loggedIn ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;
