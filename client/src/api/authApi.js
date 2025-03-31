import { useContext, useEffect } from "react";
import request from "../utils/request";
import validateForm from "../validators/formValidator";
import { UserContext } from "../contexts/UserContext";

export const useRegister = () => {
    const { userLoginHandler } = useContext(UserContext);
    const register = async (data) => {
        try {
            validateForm(data);
            const endpoint = data.loginType === "forUser" ? "/registerUser" : "/registerStudio";

            const result = await request("POST", endpoint, data);

            for (const key in result) {
                localStorage.setItem(key, result[key]);
            }
            userLoginHandler(result);

            return;
        } catch (err) {
            return err.message;
        }
    };

    return { register };
};

export const useLogout = () => {
    const { id, userLogoutHandler } = useContext(UserContext);
    console.log(id);

    useEffect(() => {
        if (!id) {
            return;
        }

        const options = {
            headers: {
                authorization: id
            }
        };

        request("GET", "/logout", null, options).then(userLogoutHandler);
    }, [id, userLogoutHandler]);

    return {
        isLoggedOut: !!id
    };
};
