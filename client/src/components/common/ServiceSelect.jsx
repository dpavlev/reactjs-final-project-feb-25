import studioStyles from "../../styles/StudioView.module.css";

export default function Service({ i, name, price }) {
    return (
        <li>
            <span>{name}</span>
            <div>
                <span>{price}&nbsp;</span>
                <label htmlFor={`selectService${i}`} className={studioStyles.radioContainer}>
                    <input type="checkbox" name={`selectService${i}`} id={`selectService${i}`} />
                    <span className={studioStyles.radioLabel}>Select</span>
                </label>
            </div>
        </li>
    );
}
