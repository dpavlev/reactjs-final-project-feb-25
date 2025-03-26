import styles from "../../views/AuthPages.module.css";

export default function RegisterStudio({ values, handleChange }) {
    return (
        <>
            <input type="email" name="email" id="email" placeholder="Email..." className={styles.formDiv} value={values.email} onChange={handleChange} />
            <input type="password" name="password" id="password" placeholder="Password..." className={styles.formDiv} value={values.password} onChange={handleChange} />
            <input type="password" name="rePassword" id="rePassword" placeholder="Repeat password..." className={styles.formDiv} value={values.rePassword} onChange={handleChange} />
            <span className={styles.infoHeadingWrapper}>
                <h3 className={styles.infoHeading}>You can create your studio page after registration</h3>
            </span>
        </>
    );
}
