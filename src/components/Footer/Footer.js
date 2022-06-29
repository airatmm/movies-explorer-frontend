import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__content">
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <ul className="footer__links">
                    <li className="footer__links-item"><a className="footer__link link" target="_blank" rel="noreferrer"  href="https://practicum.yandex.ru">Яндекс.Практикум</a></li>
                    <li className="footer__links-item"><a className="footer__link link" target="_blank" rel="noreferrer"  href="https://github.com/airatmm">Github</a></li>
                    <li className="footer__links-item"><a className="footer__link link" target="_blank" rel="noreferrer"  href="https://ru-ru.facebook.com">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
