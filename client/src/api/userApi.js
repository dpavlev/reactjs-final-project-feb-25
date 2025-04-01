import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

export function useFindUser(id) {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        request("GET", `user/${id}`).then(setUserData);
    }, [id]);
    return { userData };
}

export function useDeleteUser(id) {
    const { userLogoutHandler } = useContext(UserContext);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        const deleteUser = async () => {
            try {
                await request("DELETE", `user/${id}`);
                userLogoutHandler();
                setIsDeleted(true);
            } catch (err) {
                console.error(err.message);
            }
        };

        if (id) {
            deleteUser();
        }
    }, [id, userLogoutHandler]);

    return { isDeleted };
}
