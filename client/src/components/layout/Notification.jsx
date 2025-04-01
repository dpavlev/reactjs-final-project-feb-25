import { createPortal } from "react-dom";
import { useEffect } from "react";
import styles from "./Notification.module.css";

export default function Notification({ message, onClose }) {
    useEffect(() => {
        if (message) {
            const timeout = setTimeout(() => {
                onClose?.();
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [message, onClose]);

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
