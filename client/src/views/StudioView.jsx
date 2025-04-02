import studioStyles from "../styles/StudioView.module.css";
import Service from "../components/common/Service";
import FormButton from "../components/common/FormButton";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router";
import { useStudioApi } from "../api/studioApi";

export default function StudioView() {
    const { isStudio } = useContext(UserContext);
    const { id } = useParams();
    const { getOneStudio } = useStudioApi();

    useEffect(() => {
        getOneStudio(id)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id, getOneStudio]);

    return (
        <main className={studioStyles.mainElem}>
            <div className={`${studioStyles.mainHeaderContent} ${studioStyles.marginTop} ${studioStyles.marginLeft} ${studioStyles.marginRight}`}>
                <div>
                    <img src="https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?class=width-small" alt="" className="item-img" />
                </div>
                <div className={studioStyles.studioInformation}>
                    <div className={studioStyles.studioTopContent}>
                        <div>
                            <h1>Студио за красота Ангел</h1>
                            <h3 style={{ color: "gray" }}>София</h3>
                        </div>
                        {/* TODO: Check if this button is component */}
                        <FormButton text="Запази час" className={studioStyles.bookBtn} />
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, delectus sequi vel consequatur, cupiditate mollitia doloribus autem assumenda nostrum, quaerat architecto placeat. Nam eaque dolorum possimus temporibus porro dolorem quae accusantium rem laudantium, et iure odit tempore. Rerum, veniam! Culpa architecto minus dolorem numquam in, quae fuga a consectetur inventore?</p>
                </div>
            </div>
            <div className={studioStyles.mainContentWrapper}>
                <div className={`${studioStyles.mainContent} ${studioStyles.marginLeft} ${studioStyles.marginRight}`}>
                    <div className={studioStyles.servicesSection}>
                        <h1>Услуги</h1>
                        <br />
                        <form action="">
                            <ul>
                                <Service />
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
                            <span>0888888888</span>
                        </li>
                        <li>
                            <span>Имейл:</span>
                            <span>test@test.test</span>
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
