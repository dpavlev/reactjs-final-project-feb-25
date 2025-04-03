import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-info-container">
                <div className="footer-item">
                    <Link to="/" className="header-logo-background">
                        <img src="/images/logo_rectangle.png" alt="StyleGo" className="header-logo-size" />
                    </Link>
                    <Link to="/addStudio" className="new-salon-btn">
                        Add Studio
                    </Link>
                </div>
                <div className="footer-item-ul">
                    <h2>Fast Links</h2>
                    <ul>
                        <li>
                            <Link to="/login" className="footer-link">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="footer-link">
                                Registration
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                More Info
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
