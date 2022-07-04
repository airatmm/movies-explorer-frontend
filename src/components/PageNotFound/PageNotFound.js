import './PageNotFound.css';
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
            navigate(-1);
    }
    return (
        <section className="page-not-found">
            <div className="page-not-found__content">
                <p className="page-not-found__status">404</p>
                <p className="page-not-found__text">Страница не найдена</p>
                    <button className="page-not-found__link link" onClick={handleGoBack}>Назад</button>
            </div>
        </section>
    )
}

export default PageNotFound;
