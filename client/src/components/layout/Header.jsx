import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useStudioApi } from "../../api/studioApi";

export default function Header() {
    const { id, isStudio, hasStudio } = useContext(UserContext);
    const { getOwner } = useStudioApi();
    const [studioId, setStudioId] = useState("none");

    useEffect(() => {
        if (id && isStudio) {
            getOwner(id).then((data) => {
                if (data.studio) {
                    setStudioId(data.studio);
                } else {
                    setStudioId("none");
                }
            });
        }
    }, [id, isStudio, getOwner, hasStudio]);

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
                            <Link to={`/studioView/${studioId}`} className="button">
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
