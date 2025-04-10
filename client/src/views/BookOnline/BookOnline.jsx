import FormButton from "../../components/common/FormButton";
import formsStyles from "../../styles/Forms.module.css";
import bookOnlineStyles from "./BookOnline.module.css";
import Notification from "../../components/layout/Notification";
import { useContext, useEffect, useState } from "react";
import { useStudioApi } from "../../api/studioApi";
import { Link, useLocation, useNavigate } from "react-router";
import DatetimePicker from "../../components/common/DatetimePicker/DatetimePicker";
import userProfileStyles from "../../styles/UserProfile.module.css";
import { UserContext } from "../../contexts/UserContext";

export default function BookOnline() {
    const navigate = useNavigate();
    const { id } = useContext(UserContext);
    const { state } = useLocation();
    const [message, setMessage] = useState("");
    const [services, setServices] = useState([]);
    const [dates, setDates] = useState({
        dateRangeStart: null,
        dateRangeEnd: null
    });
    const { getOneStudio, bookServices } = useStudioApi();

    useEffect(() => {
        async function fetchStudio() {
            try {
                const studio = await getOneStudio(state.studioId);
                const filteredServices = studio.services.filter((service) => {
                    const normalizedServiceName = service.name.split(" ").join("").toLowerCase();
                    return state.services.some((requestedService) => normalizedServiceName === requestedService.toLowerCase());
                });
                setServices(filteredServices);
            } catch (err) {
                setMessage(err.message);
            }
        }
        fetchStudio();
    }, []);

    function onChange(values) {
        if (values && values[0] && values[1]) {
            const dateRangeStart = values[0].format("YYYY-MM-DDTHH:mm:ss");
            const dateRangeEnd = values[1].format("YYYY-MM-DDTHH:mm:ss");
            setDates({ dateRangeStart, dateRangeEnd });
        } else {
            setDates({ dateRangeStart: null, dateRangeEnd: null });
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        try {
            const formattedDates = {
                dateRangeStart: new Date(dates.dateRangeStart).toISOString(),
                dateRangeEnd: new Date(dates.dateRangeEnd).toISOString()
            };
            const bookingData = {
                ...formattedDates,
                services,
                studioId: state.studioId,
                userId: id
            };
            bookServices(state.studioId, bookingData)
                .then(() => {
                    setMessage("Booking successful!");
                    setTimeout(() => {
                        navigate(`/studioView/${state.studioId}`);
                    }, 3000);
                })
                .catch((err) => {
                    setMessage(err.message);
                });
        } catch (err) {
            setMessage("Please select dates again!");
            return;
        }
    }

    return (
        <>
            <Notification message={message} onClose={() => setMessage("")} />
            <main className={formsStyles.main}>
                <div className={formsStyles.loginContainer}>
                    <form onSubmit={onSubmit} className={`${formsStyles.formContent} ${formsStyles.loginForm}`}>
                        <div className={bookOnlineStyles.rangePickerContainer}>
                            <h2>Your selected services</h2>
                            <ul className={bookOnlineStyles.servicesList}>
                                {services.map((service) => (
                                    <li key={service.name} className={bookOnlineStyles.serviceItem}>
                                        <p>{service.name}</p>
                                        <span>{service.price.toFixed(2)} lv.</span>
                                    </li>
                                ))}
                                <li>
                                    <span>Total</span>
                                    <span>{services.reduce((acc, service) => acc + service.price, 0).toFixed(2)} lv.</span>
                                </li>
                            </ul>
                        </div>
                        <div className={bookOnlineStyles.rangePickerContainer}>
                            <h2>Choose your free time</h2>
                            <div>
                                <div className={bookOnlineStyles.labelsContainer}>
                                    <label htmlFor="date">Start date</label>
                                    <label htmlFor="date">End date</label>
                                </div>
                                <DatetimePicker id="date" name="date" onChange={onChange} />
                            </div>
                        </div>
                        <div className={userProfileStyles.buttons}>
                            <FormButton text="Book now" className={bookOnlineStyles.formSubmitBtn} disabled={!!message} />
                            <Link
                                to={`/studioView/${state.studioId}`}
                                className={`${formsStyles.formSubmitBtn} ${userProfileStyles.backBtn} ${userProfileStyles.formSubmitBtn}`}
                            >
                                Back
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
