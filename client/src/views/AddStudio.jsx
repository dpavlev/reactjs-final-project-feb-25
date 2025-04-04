import { useContext, useState } from "react";
import FormButton from "../components/common/FormButton";
import formsStyles from "../styles/Forms.module.css";
import Notification from "../components/layout/Notification";
import { useStudioApi } from "../api/studioApi";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router";

export default function AddStudio() {
    const { createStudio } = useStudioApi();
    const { id, addMoreAuthData } = useContext(UserContext);
    const [message, setMessage] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [studioId, setStudioId] = useState(null);
    const [values, setValues] = useState({
        studioName: "",
        studioCity: "",
        studioAddress: "",
        studioPhone: "",
        studioDescription: "",
        studioImg: "",
        qtyServices: 0,
        services: []
    });

    const updateServices = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleQtyChange = (e) => {
        const qty = Number(e.target.value);
        setValues((state) => ({
            ...state,
            qtyServices: qty,
            services: Array(qty)
                .fill()
                .map(() => ({ name: "", price: 0 }))
        }));
    };

    const handleServiceUpdate = (index, field, value) => {
        setValues((state) => ({
            ...state,
            services: state.services.map((service, i) => (i === index ? { ...service, [field]: value } : service))
        }));
    };

    const submitAction = async (e) => {
        e.preventDefault();
        try {
            const newStudio = await createStudio({ ...values, studioAcc: id });
            setStudioId(newStudio._id);
            addMoreAuthData({ hasStudio: true });
            localStorage.setItem("hasStudio", true);
            setRedirect(true);
        } catch (err) {
            setMessage(err.message);
        }
    };

    if (redirect && studioId) {
        return <Navigate to={`/studioView/${studioId}`} />;
    }

    return (
        <>
            <Notification message={message} onClose={() => setMessage("")} />
            <main className={formsStyles.main}>
                <div className={formsStyles.loginContainer}>
                    <form onSubmit={submitAction} className={`${formsStyles.formContent} ${formsStyles.loginForm}`}>
                        <input
                            type="text"
                            name="studioName"
                            id="studioName"
                            placeholder="Studio name..."
                            className={formsStyles.formDiv}
                            value={values.studioName}
                            onChange={updateServices}
                        />
                        <input
                            type="text"
                            name="studioCity"
                            id="studioCity"
                            placeholder="City..."
                            className={formsStyles.formDiv}
                            value={values.studioCity}
                            onChange={updateServices}
                        />
                        <input
                            type="text"
                            name="studioAddress"
                            id="studioAddress"
                            placeholder="Address..."
                            className={formsStyles.formDiv}
                            value={values.studioAddress}
                            onChange={updateServices}
                        />
                        <input
                            type="tel"
                            name="studioPhone"
                            id="studioPhone"
                            placeholder="Phone number: +359 8..."
                            className={formsStyles.formDiv}
                            value={values.studioPhone}
                            onChange={updateServices}
                        />
                        <textarea
                            name="studioDescription"
                            id="description"
                            placeholder="Description..."
                            className={`${formsStyles.formDiv} ${formsStyles.formTextarea}`}
                            value={values.studioDescription}
                            onChange={updateServices}
                        ></textarea>
                        <input
                            type="url"
                            name="studioImg"
                            id="studioImg"
                            placeholder="Image URL..."
                            className={formsStyles.formDiv}
                            value={values.studioImg}
                            onChange={updateServices}
                        />
                        <input
                            type="number"
                            name="qtyServices"
                            id="qtyServices"
                            min="1"
                            className={formsStyles.formDiv}
                            value={values.qtyServices}
                            onChange={handleQtyChange}
                        />
                        <div className={formsStyles.servicesContainer}>
                            {Array.from({ length: values.qtyServices }, (_, index) => (
                                <div key={index} className={formsStyles.servicesInput}>
                                    <input
                                        type="text"
                                        className={formsStyles.formDiv}
                                        placeholder={`Service ${index + 1} name...`}
                                        value={values.services[index]?.name || ""}
                                        onChange={(e) => handleServiceUpdate(index, "name", e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        className={formsStyles.formDiv}
                                        placeholder="Price..."
                                        min="0"
                                        step="0.01"
                                        value={values.services[index]?.price || 0}
                                        onChange={(e) => handleServiceUpdate(index, "price", e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                        <FormButton text="Add Studio" />
                    </form>
                </div>
            </main>
        </>
    );
}
