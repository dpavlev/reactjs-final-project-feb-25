import { createContext } from "react";

export const UserContext = createContext({
    id: "",
    email: "",
    name: "",
    isStudio: false,
    hasStudio: false,
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
    addMoreAuthData: () => null
});
