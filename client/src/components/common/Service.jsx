import studioStyles from "../../styles/StudioView.module.css";

export default function Service() {
    return (
        <li>
            <span>Test Service</span>
            <div>
                <span>Price&nbsp;</span>
                <label htmlFor="selectService1" className={studioStyles.radioContainer}>
                    <input type="checkbox" name="selectService1" id="selectService1" />
                    <span className={studioStyles.radioLabel}>Select</span>
                </label>
            </div>
        </li>
    );
}
