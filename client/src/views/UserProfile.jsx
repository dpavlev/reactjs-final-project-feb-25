import { Link, Navigate } from "react-router";
import userProfileStyles from "../styles/userProfile.module.css";
import formsStyles from "../styles/Forms.module.css";
import FormButton from "../components/common/FormButton";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Notification from "../components/layout/Notification";
import { useFindUser, useUpdateUser } from "../api/userApi";

export default function UserProfile() {
    const { id } = useContext(UserContext);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
    });
    const [message, setMessage] = useState(null);
    const { userData } = useFindUser(id);
    const { update } = useUpdateUser(id);

    useEffect(() => {
        if (userData) {
            setValues({
                firstName: userData.firstName || "",
                lastName: userData.lastName || "",
                phoneNumber: userData.phoneNumber || "",
                email: userData.email || ""
            });
        }
    }, [userData]);

    async function submitForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const errMessage = await update(data);
        if (errMessage) {
            setMessage(errMessage);
            return;
        } else {
            setMessage("Profile updated successfully!");
        }
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Notification message={message} onClose={() => setMessage(null)} />
            <main className={formsStyles.main}>
                <div className={formsStyles.loginContainer}>
                    <form onSubmit={submitForm} className={`${formsStyles.formContent} ${formsStyles.loginForm}`}>
                        <div className={userProfileStyles.nameContainer}>
                            <span>
                                <label htmlFor="firstName">First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First name..."
                                    className={formsStyles.formDiv}
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                            </span>
                            <span>
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last name..."
                                    className={formsStyles.formDiv}
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                            </span>
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="+359 8..."
                                className={formsStyles.formDiv}
                                value={values.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="john@example.com"
                                className={formsStyles.formDiv}
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={userProfileStyles.buttons}>
                            <FormButton text="Save" className={userProfileStyles.formSubmitBtn} />
                            <Link to="/" className={`${formsStyles.formSubmitBtn} ${userProfileStyles.backBtn} ${userProfileStyles.formSubmitBtn}`}>
                                Back
                            </Link>
                        </div>
                        <div className={userProfileStyles.deleteProfile}>
                            <Link to={`/deleteUser/${id}`}>Delete profile...</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
