import { DatePicker } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import { formDiv, datetimeInput } from "./DatetimePicker.module.css";
import { CalendarOutlined } from "@ant-design/icons";

export default function DatetimePicker({ onChange, name, id }) {
    const { RangePicker } = DatePicker;
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

    return (
        <div className={formDiv}>
            <RangePicker
                className={datetimeInput}
                defaultValue={defaultValue}
                locale={buddhistLocale}
                showTime={{ minuteStep: 5 }}
                minDate={defaultValue}
                onChange={onChange}
                suffixIcon={null}
                prefix={<CalendarOutlined />}
                name={name}
                id={id}
            />
        </div>
    );
}
