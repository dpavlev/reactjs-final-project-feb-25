import { useState } from "react";
import FormButton from "../common/FormButton";
import DatetimePicker from "../common/DatetimePicker";

export default function SearchForm() {
    const getInitialDate = () => {
        let date = new Date(Date.now());
        date.setHours(date.getHours() + 4);
        let minutes = date.getMinutes();
        minutes = Math.round(minutes / 10) * 10;
        date.setMinutes(minutes);
        return date.toISOString().slice(0, 16);
    };

    const [values, setValues] = useState({
        city: "",
        service: "",
        date: getInitialDate()
    });

    function valuesChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <form className="form-content">
            <h1 className="form-header">Запази час за красота</h1>
            <div className="form-div">
                <i className="fa-solid fa-location-dot form-ico"></i>
                <select className="form-selector" name="city" value={values.city} onChange={valuesChange}>
                    <option value="" disabled hidden>
                        Избери град
                    </option>
                    <option value="sofia">София</option>
                    <option value="plovdiv">Пловдив</option>
                    <option value="varna">Варна</option>
                    <option value="burgas">Бургас</option>
                    <option value="" disabled>
                        Очаквайте още скоро...
                    </option>
                </select>
            </div>
            <div className="form-div">
                <i className="fa-solid fa-spa form-ico"></i>
                <select className="form-selector" name="service" value={values.service} onChange={valuesChange}>
                    <option value="" disabled hidden>
                        Избери услуга
                    </option>
                    <option value="maleHaircut">Мъжко подстригване</option>
                    <option value="femaleHaircut">Женско подстригване</option>
                    <option value="nailPolish">Лакиране на нокти</option>
                    <option value="" disabled>
                        Очаквайте още скоро...
                    </option>
                </select>
            </div>
            <DatetimePicker onChange={valuesChange} />
            <FormButton text="Покажи салоните" />
        </form>
    );
}
