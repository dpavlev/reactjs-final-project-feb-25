import { Link } from "react-router";
import userProfileStyles from "./userProfile.module.css";
import formsStyles from "./Forms.module.css";
import FormButton from "../components/common/FormButton";

export default function UserProfile() {
    return (
        <main className={formsStyles.main}>
            <div className={formsStyles.loginContainer}>
                <form action="" className={`${formsStyles.formContent} ${formsStyles.loginForm}`}>
                    <div className={userProfileStyles.nameContainer}>
                        <span>
                            <label htmlFor="firstName">First name</label>
                            <input type="text" name="firstName" id="firstName" placeholder="Your name goes here..." className={formsStyles.formDiv} />
                        </span>
                        <span>
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" name="lastName" id="lastName" placeholder="Your name goes here..." className={formsStyles.formDiv} />
                        </span>
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="+359 8..." className={formsStyles.formDiv} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="john@example.com" className={formsStyles.formDiv} />
                    </div>
                    <div className={userProfileStyles.buttons}>
                        <FormButton text="Save" className={userProfileStyles.formSubmitBtn} />
                        <Link to="/" className={`${formsStyles.formSubmitBtn} ${userProfileStyles.backBtn} ${userProfileStyles.formSubmitBtn}`}>
                            Back
                        </Link>
                    </div>
                    <div className={userProfileStyles.deleteProfile}>
                        <a href="#">Изтриване на профила</a>
                    </div>
                </form>
            </div>
        </main>
    );
}
