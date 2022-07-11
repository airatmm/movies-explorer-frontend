import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';
import Section from "../Section/Section";

const PageNotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
            navigate(-1);
    }
    return (
        <Section name="page-not-found">
            <div className="page-not-found__content">
                <p className="page-not-found__status">404</p>
                <p className="page-not-found__text">Страница не найдена</p>
            </div>
            <button className="page-not-found__button link" onClick={handleGoBack}>Назад</button>
        </Section>
    )
}

export default PageNotFound;
