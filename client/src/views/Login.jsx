import FormButton from "../components/common/FormButton";
import { Navigate } from "react-router";
import styles from "./Login.module.css";
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
        <main className={styles.main}>
            <div className={styles.loginContainer}>
                <form action="" className={`${styles.formContent} ${styles.loginForm}`}>
                    <div className={styles.loginType}>
                        <label htmlFor="forUser" className={styles.radioContainer}>
                            <input type="radio" name="loginType" id="forUser" value="forUser" checked={values.loginType === "forUser"} onChange={handleChange} />
                            <span className={styles.radioLabel}>Login for User</span>
                        </label>
                        <label htmlFor="forBusiness" className={styles.radioContainer}>
                            <input type="radio" name="loginType" id="forBusiness" value="forBusiness" checked={values.loginType === "forBusiness"} onChange={handleChange} />
                            <span className={styles.radioLabel}>Login for Studio</span>
                        </label>
                    </div>
                    <input type="text" name="username" id="username" placeholder="Username" className={styles.formDiv} value={values.username} onChange={handleChange} />
                    <input type="password" name="password" id="password" placeholder="Password" className={styles.formDiv} value={values.password} onChange={handleChange} />
                    <FormButton text="Login" />
                </form>
            </div>
        </main>
    );
}
