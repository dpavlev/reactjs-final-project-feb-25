import { Navigate } from "react-router";
import { useState } from "react";
import Notification from "../components/layout/Notification";
import RegisterStudio from "../components/features/RegisterStudio";
import RegisterUser from "../components/features/RegisterUser";
import FormButton from "../components/common/FormButton";
import authStyles from "../styles/AuthPages.module.css";
import formsStyles from "../styles/Forms.module.css";
import { useRegister } from "../api/authApi";
// import validateForm from "../validators/formValidator";
// import { useRegister } from "../api/authApi";

export default function Register() {
    const [message, setMessage] = useState("");
    const [loginType, setLoginType] = useState("forUser");
    const [userValues, setUserValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        rePassword: ""
    });
    const [studioValues, setStudioValues] = useState({
        email: "",
        password: "",
        rePassword: ""
    });
    const { register } = useRegister();

    const handleChange = (e) => {
        if (e.target.name === "loginType") {
            setLoginType(e.target.value);
        }
        if (loginType === "forUser") {
            setUserValues({
                ...userValues,
                [e.target.name]: e.target.value
            });
        } else {
            setStudioValues({
                ...studioValues,
                [e.target.name]: e.target.value
            });
        }
    };

    async function submitForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const errMessage = await register(data);
        if (errMessage) {
            setMessage(errMessage);
            return;
        }
    }

    if (localStorage.getItem("id")) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <Notification message={message} onClose={() => setMessage("")} />
            <main className={formsStyles.main}>
                <div className={formsStyles.loginContainer}>
                    <form onSubmit={submitForm} className={`${formsStyles.formContent} ${formsStyles.loginForm}`}>
                        <div className={authStyles.loginType}>
                            <label htmlFor="forUser" className={authStyles.radioContainer}>
                                <input type="radio" name="loginType" id="forUser" value="forUser" checked={loginType === "forUser"} onChange={handleChange} />
                                <span className={authStyles.radioLabel}>Register User</span>
                            </label>
                            <label htmlFor="forBusiness" className={authStyles.radioContainer}>
                                <input type="radio" name="loginType" id="forBusiness" value="forBusiness" checked={loginType === "forBusiness"} onChange={handleChange} />
                                <span className={authStyles.radioLabel}>Register Studio</span>
                            </label>
                        </div>
                        {loginType === "forUser" ? <RegisterUser values={userValues} handleChange={handleChange} /> : <RegisterStudio values={studioValues} handleChange={handleChange} />}
                        <FormButton text="Register" />
                    </form>
                </div>
            </main>
        </>
    );
}
