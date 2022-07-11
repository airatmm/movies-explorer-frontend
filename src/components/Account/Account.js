import './Account.css';
import { Link } from "react-router-dom";
import accountIcon from "../../images/accountIcon.svg";

const Account = ({ onClose}) => {
    return (
        <Link onClick={onClose} to="/profile" className="account link">
            <img className="account-icon" src={accountIcon} alt="Аккаунт"/>
            <span className="account-text">Аккаунт</span>
        </Link>
    )
}

export default Account;
