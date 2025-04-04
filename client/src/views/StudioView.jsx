import studioStyles from "../styles/StudioView.module.css";
import ServiceSelect from "../components/common/ServiceSelect";
import FormButton from "../components/common/FormButton";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useParams } from "react-router";
import { useStudioApi } from "../api/studioApi";

export default function StudioView() {
    const { isStudio } = useContext(UserContext);
    const { id } = useParams();
    const { getOneStudio, getOwner } = useStudioApi();
    const [ownerEmail, setOwnerEmail] = useState("");
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

    return (
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
                        <FormButton text="Book Online" className={studioStyles.bookBtn} />
                        {/* TODO: Add book page */}
                    </div>
                    <p>{values.studioDescription}</p>
                </div>
            </div>
            <div className={studioStyles.mainContentWrapper}>
                <div className={`${studioStyles.mainContent} ${studioStyles.marginLeft} ${studioStyles.marginRight}`}>
                    <div className={studioStyles.servicesSection}>
                        <h1>Services</h1>
                        <br />
                        <form action="">
                            <ul>
                                {values?.services.map((service, index) => (
                                    <ServiceSelect key={index} i={index} name={service.name} price={service.price} />
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
                {isStudio && (
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
    );
}
