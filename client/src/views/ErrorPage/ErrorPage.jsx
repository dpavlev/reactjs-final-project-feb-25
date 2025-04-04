import { useNavigate } from "react-router";
import FormButton from "../../components/common/FormButton";
import errorStyles from "./ErrorPage.module.css";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <main className={errorStyles.main}>
            <div className={errorStyles.errorContainer}>
                <div className={errorStyles.errorContent}>
                    <div className={errorStyles.errorHeader}>
                        <img src="/images/error.png" alt="error" className={errorStyles.errorImage} />
                        <div>
                            <h1 className={errorStyles.errorHeading}>Error 404</h1>
                            <h2 className={errorStyles.errorSubheading}>Page not found</h2>
                        </div>
                    </div>
                    <p className={errorStyles.errorText}>Sorry, the page you are looking for does not exist or you don't have access to it.</p>
                </div>
                <div className={errorStyles.errorActions}>
                    <FormButton text={"Go to Home"} className={errorStyles.homeButton} onClick={() => navigate("/")} />
                    <FormButton text={"Login"} className={errorStyles.authButton} onClick={() => navigate("/login")} />
                    <FormButton text={"Register"} className={errorStyles.authButton} onClick={() => navigate("/register")} />
                </div>
            </div>
        </main>
    );
}
