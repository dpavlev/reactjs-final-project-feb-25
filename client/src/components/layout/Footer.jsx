import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-info-container">
                <div className="footer-item">
                    <Link to="/" className="header-logo-background">
                        <img src="/images/logo_rectangle.png" alt="StyleGo" className="header-logo-size" />
                    </Link>
                    <a href="#" className="new-salon-btn">
                        Добави салон
                    </a>
                </div>
                <div className="footer-item-ul">
                    <h2>Бързи линкове</h2>
                    <ul>
                        <li>
                            <Link to="/login" className="footer-link">
                                Вход
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="footer-link">
                                Регистрация
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Повече информация
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2025 StyleGo Изготвено от Димитър Павлев (dimitar557) </p>
            </div>
        </footer>
    );
}
