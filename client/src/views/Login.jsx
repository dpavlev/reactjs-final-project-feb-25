import { useState } from "react";
import { Navigate } from "react-router";
import FormButton from "../components/common/FormButton";
import authStyles from "../styles/AuthPages.module.css";
import formsStyles from "../styles/Forms.module.css";
import { useLogin } from "../api/authApi";
import Notification from "../components/layout/Notification";

export default function Login() {
    const [message, setMessage] = useState("");
    const [values, setValues] = useState({
        email: "",
        password: "",
        loginType: "forUser"
    });
    const { login } = useLogin();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    async function submitForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const errMessage = await login(data);
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
                                <input
                                    type="radio"
                                    name="loginType"
                                    id="forUser"
                                    value="forUser"
                                    checked={values.loginType === "forUser"}
                                    onChange={handleChange}
                                />
                                <span className={authStyles.radioLabel}>Login for User</span>
                            </label>
                            <label htmlFor="forBusiness" className={authStyles.radioContainer}>
                                <input
                                    type="radio"
                                    name="loginType"
                                    id="forBusiness"
                                    value="forBusiness"
                                    checked={values.loginType === "forBusiness"}
                                    onChange={handleChange}
                                />
                                <span className={authStyles.radioLabel}>Login for Studio</span>
                            </label>
                        </div>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className={formsStyles.formDiv}
                            value={values.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className={formsStyles.formDiv}
                            value={values.password}
                            onChange={handleChange}
                        />
                        <FormButton text="Login" disabled={!!message} />
                    </form>
                </div>
            </main>
        </>
    );
}
