import { createPortal } from "react-dom";
import styles from "./Notification.module.css";

export default function Notification({ message }) {
    if (!message) {
        return null;
    }

    return createPortal(
        <div className={styles.notification}>
            <p>{message}</p>
        </div>,
        document.getElementById("portal-root")
    );
}
