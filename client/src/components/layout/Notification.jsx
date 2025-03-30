import { createPortal } from "react-dom";
import { useNotification } from "../../contexts/NotificationContext";
import styles from "./Notification.module.css";

export default function Notification() {
    const { notification } = useNotification();

    if (!notification) {
        return null;
    }

    return createPortal(
        <div className={styles.notification}>
            <p>{notification}</p>
        </div>,
        document.getElementById("portal-root")
    );
}
