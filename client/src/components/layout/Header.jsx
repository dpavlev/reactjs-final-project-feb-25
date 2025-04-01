import { Link } from "react-router";

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header-logo-background">
                <img src="/images/logo_rectangle.png" alt="StyleGo" className="header-logo-size" />
            </Link>
            <nav className="nav hide-on-small">
                <Link to="/dashboard" className="button">
                    Dashboard
                </Link>
                {id ? (
                    <>
                        {isStudio ? (
                            <Link to="/studioView" className="button">
                                Studio Profile
                            </Link>
                        ) : (
                            <Link to="/userProfile" className="button">
                                Profile
                            </Link>
                        )}
                        <Link to="/logout" className="button">
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="button">
                            Login
                        </Link>
                        <Link to="/register" className="button">
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}
