import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useStudioApi } from "../../../api/studioApi";
import styles from "./Header.module.css";

export default function Header() {
    const { id, isStudio } = useContext(UserContext);
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
    }, [id, isStudio, getOwner]);

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.headerLogoBackground}>
                <img src="/images/logo_rectangle.png" alt="StyleGo" className={styles.headerLogoSize} />
            </Link>
            <nav className={`${styles.nav} ${styles.hideOnSmall}`}>
                <Link to="/dashboard" className={styles.button}>
                    Dashboard
                </Link>
                {id ? (
                    <>
                        {isStudio ? (
                            <Link to={`/studioView/${studioId}`} className={styles.button}>
                                Studio Profile
                            </Link>
                        ) : (
                            <Link to="/userProfile" className={styles.button}>
                                Profile
                            </Link>
                        )}
                        <Link to="/logout" className={styles.button}>
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className={styles.button}>
                            Login
                        </Link>
                        <Link to="/register" className={styles.button}>
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}
