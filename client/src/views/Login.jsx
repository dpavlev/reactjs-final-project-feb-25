import FormButton from "../components/common/FormButton";
import { Navigate } from "react-router";
import authStyles from "./AuthPages.module.css";
import formsStyles from "./Forms.module.css";
import { useState } from "react";

export default function Login() {
    const [values, setValues] = useState({
        username: "",
        password: "",
        loginType: "forUser"
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    // If user is already logged in, redirect to home page
    if (localStorage.getItem("token")) {
        return <Navigate to="/" />;
    }

    return (
        <main className={formsStyles.main}>
            <div className={formsStyles.loginContainer}>
                <form action="" className={`${formsStyles.formContent} ${formsStyles.loginForm}`}>
                    <div className={authStyles.loginType}>
                        <label htmlFor="forUser" className={authStyles.radioContainer}>
                            <input type="radio" name="loginType" id="forUser" value="forUser" checked={values.loginType === "forUser"} onChange={handleChange} />
                            <span className={authStyles.radioLabel}>Login for User</span>
                        </label>
                        <label htmlFor="forBusiness" className={authStyles.radioContainer}>
                            <input type="radio" name="loginType" id="forBusiness" value="forBusiness" checked={values.loginType === "forBusiness"} onChange={handleChange} />
                            <span className={authStyles.radioLabel}>Login for Studio</span>
                        </label>
                    </div>
                    <input type="text" name="username" id="username" placeholder="Username" className={formsStyles.formDiv} value={values.username} onChange={handleChange} />
                    <input type="password" name="password" id="password" placeholder="Password" className={formsStyles.formDiv} value={values.password} onChange={handleChange} />
                    <FormButton text="Login" />
                </form>
            </div>
        </main>
    );
}
