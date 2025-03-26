import styles from "../../views/AuthPages.module.css";

export default function RegisterUser({ values, handleChange }) {
    return (
        <>
            <input type="text" name="firstName" id="firstName" placeholder="First name..." className={styles.formDiv} value={values.firstName} onChange={handleChange} />
            <input type="text" name="lastName" id="lastName" placeholder="Last name..." className={styles.formDiv} value={values.lastName} onChange={handleChange} />
            <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone number: +359 8..." className={styles.formDiv} value={values.phoneNumber} onChange={handleChange} />
            <input type="email" name="email" id="email" placeholder="Email..." className={styles.formDiv} value={values.email} onChange={handleChange} />
            <input type="password" name="password" id="password" placeholder="Password..." className={styles.formDiv} value={values.password} onChange={handleChange} />
            <input type="password" name="rePassword" id="rePassword" placeholder="Repeat password..." className={styles.formDiv} value={values.rePassword} onChange={handleChange} />
        </>
    );
}
