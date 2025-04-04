import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";
import validateForm from "../validators/formValidator";

export function useFindUser(id) {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        request("GET", `user/${id}`).then(setUserData);
    }, [id]);
    return { userData };
}

export function useUpdateUser(id) {
    const { userLoginHandler } = useContext(UserContext);
    const update = async (data) => {
        try {
            validateForm(data);
            const result = await request("PUT", `user/${id}`, data);

            for (const key in result) {
                localStorage.setItem(key, result[key]);
            }
            userLoginHandler(result);

            return;
        } catch (err) {
            return err.message;
        }
    };

    return { update };
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

export function useRemoveStudio() {
    const { addMoreAuthData, hasStudio, id } = useContext(UserContext);
    useEffect(() => {
        const removeStudio = async () => {
            try {
                await request("PUT", `user/studioAccs/${id}`);
                addMoreAuthData({ hasStudio: false });
                localStorage.setItem("hasStudio", false);
            } catch (err) {
                console.error(err.message);
            }
        };
        if (hasStudio) {
            removeStudio();
        }
    }, [hasStudio, addMoreAuthData, id]);
}
