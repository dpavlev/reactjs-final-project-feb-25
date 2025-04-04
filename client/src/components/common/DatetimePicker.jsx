import { DatePicker } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";

export default function DatetimePicker({ onChange }) {
    const getInitialDate = () => {
        let date = new Date(Date.now());
        date.setHours(date.getHours() + 4);
        let minutes = date.getMinutes();
        minutes = Math.round(minutes / 10) * 10;
        date.setMinutes(minutes);
        return dayjs(date.toISOString());
    };

    const buddhistLocale = {
        ...en,
        lang: {
            ...en.lang,
            fieldDateFormat: "YYYY-MM-DD",
            fieldDateTimeFormat: "DD/MM/YYYY HH:mm",
            yearFormat: "YYYY",
            cellYearFormat: "YYYY"
        }
    };

    const defaultValue = getInitialDate();

    const handleDateChange = (date) => {
        onChange({
            target: {
                name: "date",
                value: date ? date.format("YYYY-MM-DDTHH:mm") : ""
            }
        });
    };

    return (
        <div className="form-div datetime-container">
            <DatePicker
                className="datetime-input"
                defaultValue={defaultValue}
                locale={buddhistLocale}
                showTime={{ minuteStep: 5 }}
                allowClear={false}
                minDate={defaultValue}
                onChange={handleDateChange}
                name="date"
                id="date"
            />
        </div>
    );
}
