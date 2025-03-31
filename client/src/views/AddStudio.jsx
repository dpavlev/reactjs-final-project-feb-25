import { useState } from "react";
import FormButton from "../components/common/FormButton";
import formsStyles from "./Forms.module.css";
import validateForm from "../validators/formValidator";

export default function AddStudio() {
    // TODO: Add validation to the form
    // TODO: Check if you can export the logic to a separate file
    const [message, setMessage] = useState("");
    const [values, setValues] = useState({
        studioName: "",
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

    const submitAction = () => {
        // TODO: Send the data to the server
        try {
            validateForm(values);
        } catch (error) {
            setMessage(error.message);
            setTimeout(() => {
                setMessage("");
            }, 3000);
            return;
        }
    };

    return (
        <>
            <Notification message={message} />
            <main className={formsStyles.main}>
                <div className={formsStyles.loginContainer}>
                    <form action={submitAction} className={`${formsStyles.formContent} ${formsStyles.loginForm}`}>
                        <input type="text" name="studioName" id="studioName" placeholder="Име на студиото..." className={formsStyles.formDiv} value={values.studioName} onChange={updateServices} />
                        <input type="text" name="studioAddress" id="studioAddress" placeholder="Адрес..." className={formsStyles.formDiv} value={values.studioAddress} onChange={updateServices} />
                        <input type="tel" name="studioPhone" id="studioPhone" placeholder="Телефон: +359 8..." className={formsStyles.formDiv} value={values.studioPhone} onChange={updateServices} />
                        <textarea name="studioDescription" id="description" placeholder="Описание..." className={`${formsStyles.formDiv} ${formsStyles.formTextarea}`} value={values.studioDescription} onChange={updateServices}></textarea>
                        <input type="url" name="studioImg" id="studioImg" placeholder="Image URL..." className={formsStyles.formDiv} value={values.studioImg} onChange={updateServices} />
                        <input type="number" name="qtyServices" id="qtyServices" min="1" className={formsStyles.formDiv} value={values.qtyServices} onChange={handleQtyChange} />
                        <div className={formsStyles.servicesContainer}>
                            {Array.from({ length: values.qtyServices }, (_, index) => (
                                <div key={index} className={formsStyles.servicesInput}>
                                    <input type="text" className={formsStyles.formDiv} placeholder={`Service ${index + 1} name...`} value={values.services[index]?.name || ""} onChange={(e) => handleServiceUpdate(index, "name", e.target.value)} />
                                    <input type="number" className={formsStyles.formDiv} placeholder="Price..." min="0" step="0.01" value={values.services[index]?.price || 0} onChange={(e) => handleServiceUpdate(index, "price", e.target.value)} />
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
