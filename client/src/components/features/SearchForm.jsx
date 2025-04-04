import { useState } from "react";
import FormButton from "../common/FormButton";
import DatetimePicker from "../common/DatetimePicker";
import getInitialDate from "../../utils/getInitialDate";
import { createSearchParams, useNavigate } from "react-router";
import validateForm from "../../validators/formValidator";
import Notification from "../layout/Notification";

export default function SearchForm() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [values, setValues] = useState({
        city: "",
        service: "",
        date: getInitialDate()
    });

    function valuesChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();
        try {
            validateForm(values);
            const parsedDate = Date.parse(values.date);
            const query = new URLSearchParams({ ...values, date: parsedDate }).toString();
            navigate({
                pathname: "/dashboard",
                search: createSearchParams(query).toString()
            });
        } catch (err) {
            setMessage(err.message);
        }
    }

    return (
        <>
            <Notification message={message} onClose={() => setMessage("")} />
            <form onSubmit={onSubmit} className="form-content">
                <h1 className="form-header">Book an appointment</h1>
                <div className="form-div">
                    <i className="fa-solid fa-location-dot form-ico"></i>
                    <select className="form-selector" name="city" id="city" value={values.city} onChange={valuesChange}>
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
                    <select className="form-selector" name="service" id="service" value={values.service} onChange={valuesChange}>
                        <option value="" disabled hidden>
                            Choose a service
                        </option>
                        <option value="maleHaircut">Male haircut</option>
                        <option value="femaleHaircut">Female haircut</option>
                        <option value="beardTrim">Beard Trim</option>
                        <option value="" disabled>
                            Expect more soon...
                        </option>
                    </select>
                </div>
                <DatetimePicker onChange={valuesChange} />
                <FormButton text="Show salons" />
            </form>
        </>
    );
}
