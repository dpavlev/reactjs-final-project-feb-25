import formsStyles from "../../styles/Forms.module.css";

export default function FormButton({ text, className, onClick, disabled }) {
    return (
        <button
            className={`${formsStyles.formSubmitBtn} ${className || ""}`}
            onClick={onClick ? onClick : null}
            disabled={disabled ? disabled : false}
        >
            {text}
        </button>
    );
}
