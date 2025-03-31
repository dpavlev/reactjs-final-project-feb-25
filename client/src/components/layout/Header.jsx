import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
    const { id, isStudio } = useContext(UserContext);
    return (
        <header className="header">
            <Link to="/" className="header-logo-background">
                <img src="/images/logo_rectangle.png" alt="StyleGo" className="header-logo-size" />
            </Link>
            <nav className="nav hide-on-small">
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
