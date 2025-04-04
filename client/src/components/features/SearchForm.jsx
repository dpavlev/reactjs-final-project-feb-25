import { useState } from "react";
import FormButton from "../common/FormButton";
import DatetimePicker from "../common/DatetimePicker";
import getInitialDate from "../../utils/getInitialDate";

export default function SearchForm() {
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
            <h1 className="form-header">Book an appointment</h1>
            <div className="form-div">
                <i className="fa-solid fa-location-dot form-ico"></i>
                <select className="form-selector" name="city" value={values.city} onChange={valuesChange}>
                    <option value="" disabled hidden>
                        Choose a city
                    </option>
                    <option value="sofia">Sofia</option>
                    <option value="plovdiv">Plovdiv</option>
                    <option value="varna">Varna</option>
                    <option value="burgas">Burgas</option>
                    <option value="" disabled>
                        Expect more soon...
                    </option>
                </select>
            </div>
            <div className="form-div">
                <i className="fa-solid fa-spa form-ico"></i>
                <select className="form-selector" name="service" value={values.service} onChange={valuesChange}>
                    <option value="" disabled hidden>
                        Choose a service
                    </option>
                    <option value="maleHaircut">Male haircut</option>
                    <option value="femaleHaircut">Female haircut</option>
                    <option value="nailPolish">Nail polish</option>
                    <option value="" disabled>
                        Expect more soon...
                    </option>
                </select>
            </div>
            <DatetimePicker onChange={valuesChange} />
            <FormButton text="Show salons" />
        </form>
    );
}
