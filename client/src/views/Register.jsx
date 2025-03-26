import FormButton from "../components/common/FormButton";
import { Navigate } from "react-router";
import authStyles from "./AuthPages.module.css";
import formsStyles from "./Forms.module.css";
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
        <main className={formsStyles.main}>
            <div className={formsStyles.loginContainer}>
                <form action="" className={`${formsStyles.formContent} ${formsStyles.loginForm}`}>
                    <div className={authStyles.loginType}>
                        <label htmlFor="forUser" className={authStyles.radioContainer}>
                            <input type="radio" name="loginType" id="forUser" value="forUser" checked={values.loginType === "forUser"} onChange={handleChange} />
                            <span className={authStyles.radioLabel}>Register User</span>
                        </label>
                        <label htmlFor="forBusiness" className={authStyles.radioContainer}>
                            <input type="radio" name="loginType" id="forBusiness" value="forBusiness" checked={values.loginType === "forBusiness"} onChange={handleChange} />
                            <span className={authStyles.radioLabel}>Register Studio</span>
                        </label>
                    </div>
                    {values.loginType === "forUser" ? <RegisterUser values={values} handleChange={handleChange} /> : <RegisterStudio values={values} handleChange={handleChange} />}
                    <FormButton text="Register" />
                </form>
            </div>
        </main>
    );
}
