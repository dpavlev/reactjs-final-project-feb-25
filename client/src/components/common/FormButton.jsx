import formsStyles from "../../views/Forms.module.css";

export default function FormButton({ text, className }) {
    return <button className={`${formsStyles.formSubmitBtn} ${className || ""}`}>{text}</button>;
}
