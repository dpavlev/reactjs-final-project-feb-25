import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Notification(message) {
    useEffect(() => {
        const timer = setTimeout(() => {
            // TODO: useRef to get the notification element and remove it
            const notificationElement = document.querySelector(".notification");
            if (notificationElement) {
                notificationElement.remove();
            }
        }, 3000);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);
    return createPortal(
        <div className="notification">
            <p>{message}</p>
        </div>,
        document.getElementById("portal-root")
    );
}
