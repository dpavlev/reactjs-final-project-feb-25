import { createContext } from "react";

export const UserContext = createContext({
    id: "",
    email: "",
    name: "",
    isStudio: false,
    userLoginHandler: () => null,
    userLogoutHandler: () => null
});
