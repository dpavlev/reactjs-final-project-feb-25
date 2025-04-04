import studioStyles from "../styles/StudioView.module.css";
import ServiceSelect from "../components/common/ServiceSelect";
import FormButton from "../components/common/FormButton";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate, useParams } from "react-router";
import { useStudioApi } from "../api/studioApi";
import Notification from "../components/layout/Notification";

export default function StudioView() {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const { isStudio, email } = useContext(UserContext);
    const { id } = useParams();
    const { getOneStudio, getOwner } = useStudioApi();
    const [ownerEmail, setOwnerEmail] = useState("");
    const [message, setMessage] = useState("");
    const [values, setValues] = useState({
        studioName: "",
        studioCity: "",
        studioAddress: "",
        studioPhone: "",
        studioDescription: "",
        studioImg: null,
        services: [],
        ownerId: ""
    });

    useEffect(() => {
        if (!values.studioName && id)
            getOneStudio(id)
                .then((data) => {
                    setValues({
                        ...data,
                        services: data.services.map((service) => ({
                            name: service.name,
                            price: service.price
                        })),
                        ownerId: data.studioAcc
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
    }, [id, getOneStudio, values]);

    useEffect(() => {
        if (!values.ownerId || ownerEmail) return;
        getOwner(values.ownerId)
            .then((data) => {
                setOwnerEmail(data.email);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [values.ownerId, getOwner, ownerEmail]);

    function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const selectedServices = Array.from(formData.entries());
        if (selectedServices.length === 0) {
            setMessage("Please select at least one service.");
            return;
        }
        navigate("/bookOnline", {
            state: { studioId: id, services: selectedServices.map((item) => item[0]) }
        });
    }

    function bookBtnHandler() {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        }
    }

    return (
        <>
            <Notification message={message} onClose={() => setMessage("")} />
            <main className={studioStyles.mainElem}>
                <div className={`${studioStyles.mainHeaderContent} ${studioStyles.marginTop} ${studioStyles.marginLeft} ${studioStyles.marginRight}`}>
                    <div className={studioStyles.imageWrapper}>
                        <img src={values.studioImg} alt={values.studioName} className={studioStyles.itemImg} />
                    </div>
                    <div className={studioStyles.studioInformation}>
                        <div className={studioStyles.studioTopContent}>
                            <div>
                                <h1>{values.studioName}</h1>
                                <h3 style={{ color: "gray" }}>
                                    {values.studioAddress}, {values.studioCity.charAt(0).toUpperCase() + values.studioCity.slice(1)}
                                </h3>
                            </div>
                            <FormButton text="Book Online" className={studioStyles.bookBtn} onClick={bookBtnHandler} disabled={!!message} />
                        </div>
                        <p>{values.studioDescription}</p>
                    </div>
                </div>
                <div className={studioStyles.mainContentWrapper}>
                    <div className={`${studioStyles.mainContent} ${studioStyles.marginLeft} ${studioStyles.marginRight}`}>
                        <div className={studioStyles.servicesSection}>
                            <h1>Services</h1>
                            <br />
                            <form ref={formRef} onSubmit={onSubmit}>
                                <ul>
                                    {values?.services.map((service, index) => (
                                        <ServiceSelect key={index} name={service.name} price={service.price} />
                                    ))}
                                </ul>
                            </form>
                        </div>
                        <div className={studioStyles.workingHours}>
                            <h1>Working Hours</h1>
                            <br />
                            <ul>
                                <li>
                                    <span>Monday</span>
                                    <span>9:00 - 17:00</span>
                                </li>
                                <li>
                                    <span>Tuesday</span>
                                    <span>9:00 - 17:00</span>
                                </li>
                                <li>
                                    <span>Wednesday</span>
                                    <span>9:00 - 17:00</span>
                                </li>
                                <li>
                                    <span>Thursday</span>
                                    <span>9:00 - 17:00</span>
                                </li>
                                <li>
                                    <span>Friday</span>
                                    <span>9:00 - 17:00</span>
                                </li>
                                <li>
                                    <span>Saturday</span>
                                    <span>Closed</span>
                                </li>
                                <li>
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${studioStyles.bottomWrapper} ${studioStyles.marginLeft} ${studioStyles.marginRight} ${studioStyles.marginBottom}`}>
                    <div className={`${studioStyles.contacts}`}>
                        <h1>Contacts</h1>
                        <ul>
                            <li>
                                <span>Phone number:</span>
                                <span>{values.studioPhone}</span>
                            </li>
                            <li>
                                <span>Email:</span>
                                <span>{ownerEmail}</span>
                            </li>
                        </ul>
                    </div>
                    {isStudio && ownerEmail === email && (
                        <div className={`${studioStyles.ownerButtonsWrapper}`}>
                            <h1>Studio Management</h1>
                            <section className={studioStyles.ownerButtons}>
                                <Link to={`/studioView/${id}/edit`}>
                                    <button className={studioStyles.editBtn}>Edit</button>
                                </Link>
                                <Link to={`/studioView/${id}/delete`}>
                                    <button className={studioStyles.deleteBtn}>Delete</button>
                                </Link>
                            </section>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
