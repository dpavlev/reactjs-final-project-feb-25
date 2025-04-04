import { Link } from "react-router";
import styles from "./Footer.module.css";
import { headerLogoSize, headerLogoBackground } from "../Header/Header.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfoContainer}>
                <div className={styles.footerItem}>
                    <Link to="/" className={headerLogoBackground}>
                        <img src="/images/logo_rectangle.png" alt="StyleGo" className={headerLogoSize} />
                    </Link>
                    <Link to="/addStudio" className={styles.newSalonBtn}>
                        Add Studio
                    </Link>
                </div>
                <div className={styles.footerItemUl}>
                    <h2>Fast Links</h2>
                    <ul>
                        <li>
                            <Link to="/login" className={styles.footerLink}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className={styles.footerLink}>
                                Registration
                            </Link>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>
                                More Info
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; 2025 StyleGo Изготвено от Димитър Павлев (dimitar557) </p>
            </div>
        </footer>
    );
}
