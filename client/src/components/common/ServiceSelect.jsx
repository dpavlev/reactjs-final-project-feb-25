import studioStyles from "../../styles/StudioView.module.css";

export default function Service({ name, price }) {
    return (
        <li>
            <span>{name}</span>
            <div>
                <span>{price} lv.&nbsp;</span>
                <label htmlFor={name.split(" ").join("").toLowerCase()} className={studioStyles.radioContainer}>
                    <input type="checkbox" name={name.split(" ").join("").toLowerCase()} id={name.split(" ").join("").toLowerCase()} />
                    <span className={studioStyles.radioLabel}>Select</span>
                </label>
            </div>
        </li>
    );
}
