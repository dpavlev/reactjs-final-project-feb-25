import studioStyles from "../styles/StudioView.module.css";

export default function StudioView() {
    return (
        <main className={studioStyles.mainElem}>
            <div className={`${studioStyles.mainHeaderContent} ${studioStyles.marginTop} ${studioStyles.marginLeft} ${studioStyles.marginRight}`}>
                <div>
                    <img src="https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?class=width-small" alt="" className="item-img" />
                </div>
                <div className="studio-information">
                    <div className="studio-top-content">
                        <div>
                            <h1>Студио за красота Ангел</h1>
                            <h3 style={{ color: "gray" }}>София</h3>
                        </div>
                        <button className="form-submit-btn book-btn">Запази час</button>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, delectus sequi vel consequatur, cupiditate mollitia doloribus autem assumenda nostrum, quaerat architecto placeat. Nam eaque dolorum possimus temporibus porro dolorem quae accusantium rem laudantium, et iure odit tempore. Rerum, veniam! Culpa architecto minus dolorem numquam in, quae fuga a consectetur inventore?</p>
                </div>
            </div>
            <div className="main-content-wrapper">
                <div className="main-content margin-left margin-right">
                    <div className="servicesSection">
                        <h1>Услуги</h1>
                        <br />
                        <form action="">
                            <ul>
                                <li>
                                    <span>Test Service</span>
                                    <div>
                                        <span>Price&nbsp;</span>
                                        <label htmlFor="selectService1" className="radioContainer">
                                            <input type="checkbox" name="selectService1" id="selectService1" />
                                            <span className="radioLabel">Select</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Test Service</span>
                                    <div>
                                        <span>Price&nbsp;</span>
                                        <label htmlFor="selectService2" className="radioContainer">
                                            <input type="checkbox" name="selectService2" id="selectService2" />
                                            <span className="radioLabel">Select</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Test Service</span>
                                    <div>
                                        <span>Price&nbsp;</span>
                                        <label htmlFor="selectService3" className="radioContainer">
                                            <input type="checkbox" name="selectService3" id="selectService3" />
                                            <span className="radioLabel">Select</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Test Service</span>
                                    <div>
                                        <span>Price&nbsp;</span>
                                        <label htmlFor="selectService4" className="radioContainer">
                                            <input type="checkbox" name="selectService4" id="selectService4" />
                                            <span className="radioLabel">Select</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Test Service</span>
                                    <div>
                                        <span>Price&nbsp;</span>
                                        <label htmlFor="selectService5" className="radioContainer">
                                            <input type="checkbox" name="selectService5" id="selectService5" />
                                            <span className="radioLabel">Select</span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className="workingHours">
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
            <div className="owner-buttons margin-left margin-right margin-bottom">
                <div>
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
            </div>
            {/* <!-- <div className="owner-buttons margin-left margin-right margin-bottom">
        <button className="editBtn">Edit</button>
        <button className="deleteBtn">Delete</button>
    </div> -->
    <!-- <div className="login-container">
    </div> --> */}
        </main>
    );
}
