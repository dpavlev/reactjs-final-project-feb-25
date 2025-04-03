import studioStyles from "../styles/StudioView.module.css";
import ServiceSelect from "../components/common/ServiceSelect";
import FormButton from "../components/common/FormButton";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router";
import { useStudioApi } from "../api/studioApi";

export default function StudioView() {
    const { isStudio } = useContext(UserContext);
    const { id } = useParams();
    const { getOneStudio, getOwner } = useStudioApi();
    const [ownerEmail, setOwnerEmail] = useState("");
    const [values, setValues] = useState({
        studioName: "",
        studioAddress: "",
        studioPhone: "",
        studioDescription: "",
        studioImg: null,
        services: [],
        ownerId: ""
    });

    useEffect(() => {
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
    }, [id, getOneStudio]);

    useEffect(() => {
        if (ownerEmail) {
            return;
        }
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
                            <h3 style={{ color: "gray" }}>{values.studioAddress}</h3>
                        </div>
                        <FormButton text="Запази час" className={studioStyles.bookBtn} />
                    </div>
                    <p>{values.studioDescription}</p>
                </div>
            </div>
            <div className={studioStyles.mainContentWrapper}>
                <div className={`${studioStyles.mainContent} ${studioStyles.marginLeft} ${studioStyles.marginRight}`}>
                    <div className={studioStyles.servicesSection}>
                        <h1>Услуги</h1>
                        <br />
                        <form action="">
                            <ul>
                                {values.services.map((service, index) => (
                                    <ServiceSelect key={index} i={index} name={service.name} price={service.price} />
                                ))}
                            </ul>
                        </form>
                    </div>
                    <div className={studioStyles.workingHours}>
                        <h1>Работно време</h1>
                        <br />
                        <ul>
                            <li>
                                <span>Понеделник</span>
                                <span>9:00 - 17:00</span>
                            </li>
                            <li>
                                <span>Вторник</span>
                                <span>9:00 - 17:00</span>
                            </li>
                            <li>
                                <span>Сряда</span>
                                <span>9:00 - 17:00</span>
                            </li>
                            <li>
                                <span>Четвъртък</span>
                                <span>9:00 - 17:00</span>
                            </li>
                            <li>
                                <span>Петък</span>
                                <span>9:00 - 17:00</span>
                            </li>
                            <li>
                                <span>Събота</span>
                                <span>9:00 - 17:00</span>
                            </li>
                            <li>
                                <span>Неделя</span>
                                <span>9:00 - 17:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${studioStyles.bottomWrapper} ${studioStyles.marginLeft} ${studioStyles.marginRight} ${studioStyles.marginBottom}`}>
                <div className={`${studioStyles.contacts}`}>
                    <h1>Контакти</h1>
                    <ul>
                        <li>
                            <span>Телефон:</span>
                            <span>{values.studioPhone}</span>
                        </li>
                        <li>
                            <span>Имейл:</span>
                            <span>{ownerEmail}</span>
                        </li>
                    </ul>
                </div>
                {isStudio && (
                    <div className={`${studioStyles.ownerButtonsWrapper}`}>
                        <h1>Управление на услуги</h1>
                        {/* <button className="addBtn">Добави услуга</button> */}
                        <section className={studioStyles.ownerButtons}>
                            <button className={studioStyles.editBtn}>Edit</button>
                            <button className={studioStyles.deleteBtn}>Delete</button>
                        </section>
                    </div>
                )}
            </div>
            {/* <!-- <div className="login-container">
    </div> --> */}
        </main>
    );
}
