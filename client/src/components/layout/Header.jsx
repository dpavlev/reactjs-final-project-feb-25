import { Link } from "react-router";

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header-logo-background">
                <img src="/images/logo_rectangle.png" alt="StyleGo" className="header-logo-size" />
            </Link>
            <nav className="nav hide-on-small">
                {/* <div className="searchbar-container">
                    <i className="fa-solid fa-magnifying-glass magglass"></i>
                    <input className="searchbar" type="search" name="search" placeholder="Search" />
                </div> */}
                <Link to="/login" className="button">
                    Login
                </Link>
                <Link to="/register" className="button">
                    Register
                </Link>
                <Link to="/userProfile" className="button">
                    Profile
                </Link>
                <Link to="/logout" className="button">
                    Logout
                </Link>
            </nav>
        </header>
    );
}
