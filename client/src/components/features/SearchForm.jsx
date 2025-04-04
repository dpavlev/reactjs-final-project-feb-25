import { useEffect, useState } from "react";
import FormButton from "../common/FormButton";
import { createSearchParams, useNavigate } from "react-router";
import Notification from "../layout/Notification";
import formStyle from "../../styles/Forms.module.css";
import { useStudioApi } from "../../api/studioApi";

export default function SearchForm() {
    const [cities, setCities] = useState([]);
    const { getAllStudios } = useStudioApi();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [values, setValues] = useState({
        city: ""
    });

    useEffect(() => {
        async function fetchCities() {
            try {
                const data = await getAllStudios();
                const uniqueCities = [...new Set(data.map((studio) => studio.studioCity.toLowerCase()))].sort((a, b) => a.localeCompare(b));
                setCities(uniqueCities);
            } catch (err) {
                setMessage(err.message);
            }
        }
        if (!cities.length) fetchCities();
    }, [getAllStudios, cities]);

    function valuesChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();
        try {
            const query = new URLSearchParams({ ...values }).toString();
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
            <form onSubmit={onSubmit} className={formStyle.searchFormContent}>
                <h1 className={formStyle.formHeader}>Search studios by city</h1>
                <div className={formStyle.formDiv}>
                    <i className={`fa-solid fa-location-dot ${formStyle.formIco}`}></i>
                    <select className={formStyle.formSelector} name="city" id="city" value={values.city} onChange={valuesChange}>
                        <option value="" disabled hidden>
                            Choose a city
                        </option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city.charAt(0).toUpperCase() + city.slice(1)}
                            </option>
                        ))}
                        {/* <option value="sofia">Sofia</option>
                        <option value="plovdiv">Plovdiv</option>
                        <option value="varna">Varna</option>
                        <option value="burgas">Burgas</option> */}
                        <option value="" disabled>
                            Expect more soon...
                        </option>
                    </select>
                </div>
                {/* <div className={formStyle.formDiv}>
                    <i className={`fa-solid fa-spa ${formStyle.formIco}`}></i>
                    <select className={formStyle.formSelector} name="service" id="service" value={values.service} onChange={valuesChange}>
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
                <DatetimePicker onChange={valuesChange} /> */}
                <FormButton text="Show salons" />
            </form>
        </>
    );
}
