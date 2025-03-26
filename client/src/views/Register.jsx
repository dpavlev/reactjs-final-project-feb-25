import FormButton from "../components/common/FormButton";
import { Navigate } from "react-router";
import styles from "./AuthPages.module.css";
import { useState } from "react";
import RegisterUser from "../components/features/RegisterUser";
import RegisterStudio from "../components/features/RegisterStudio";

export default function Register() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        rePassword: "",
        loginType: "forUser"
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

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
                            <span className={styles.radioLabel}>Register User</span>
                        </label>
                        <label htmlFor="forBusiness" className={styles.radioContainer}>
                            <input type="radio" name="loginType" id="forBusiness" value="forBusiness" checked={values.loginType === "forBusiness"} onChange={handleChange} />
                            <span className={styles.radioLabel}>Register Studio</span>
                        </label>
                    </div>
                    {values.loginType === "forUser" ? <RegisterUser values={values} handleChange={handleChange} /> : <RegisterStudio values={values} handleChange={handleChange} />}
                    <FormButton text="Register" />
                </form>
            </div>
        </main>
    );
}
