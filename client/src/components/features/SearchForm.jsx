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
        if (values.city === "") {
            setMessage("Please select a city.");
            return;
        }
        if (values.city === "all") {
            navigate("/dashboard");
            return;
        }
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
                        <option value="all">Show All</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city.charAt(0).toUpperCase() + city.slice(1)}
                            </option>
                        ))}
                        <option value="" disabled>
                            Expect more soon...
                        </option>
                    </select>
                </div>
                <FormButton text="Show salons" disabled={!!message} />
            </form>
        </>
    );
}
