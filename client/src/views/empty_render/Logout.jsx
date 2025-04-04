import { Navigate, useNavigate } from "react-router";
import { useLogout } from "../../api/authApi";
import { useEffect } from "react";

export default function Logout() {
    const navigate = useNavigate();
    const { isLoggedOut } = useLogout();

    useEffect(() => {
        if (isLoggedOut) {
            navigate("/");
        }
    }, [isLoggedOut, navigate]);
}
