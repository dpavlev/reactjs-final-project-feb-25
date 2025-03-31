import formsStyles from "../../styles/Forms.module.css";
import authStyles from "../../styles/AuthPages.module.css";

export default function RegisterStudio({ values, handleChange }) {
    return (
        <>
            <input type="email" name="email" id="email" placeholder="Email..." className={formsStyles.formDiv} value={values.email} onChange={handleChange} />
            <input type="password" name="password" id="password" placeholder="Password..." className={formsStyles.formDiv} value={values.password} onChange={handleChange} />
            <input type="password" name="rePassword" id="rePassword" placeholder="Repeat password..." className={formsStyles.formDiv} value={values.rePassword} onChange={handleChange} />
            <span className={authStyles.infoHeadingWrapper}>
                <h3 className={authStyles.infoHeading}>You can create your studio page after registration</h3>
            </span>
        </>
    );
}
