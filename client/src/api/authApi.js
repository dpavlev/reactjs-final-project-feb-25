import request from "../utils/request";
import validateForm from "../validators/formValidator";

export const useRegister = () => {
    const register = async (data) => {
        try {
            validateForm(data);
            const endpoint = data.loginType === "forUser" ? "/registerUser" : "/registerStudio";

            const result = await request("POST", endpoint, data);

            for (const key in result) {
                localStorage.setItem(key, result[key]);
            }

            return;
        } catch (err) {
            return err.message;
        }
    };

    return { register };
};
