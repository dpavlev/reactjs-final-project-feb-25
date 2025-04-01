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
