import request from "../utils/request";

export function useStudioApi() {
    const getOneStudio = async (id) => {
        const data = await request("GET", `studios/${id}`);
        return data;
    };

    const getAllStudios = async (query) => {
        const data = await request("GET", `studios/all${query ? `?${new URLSearchParams(query)}` : ""}`);
        return data;
    };

    const createStudio = async (studioData) => {
        const data = await request("POST", "studios/create", studioData);
        return data;
    };

    const getOwner = async (ownerId) => {
        try {
            const data = await request("GET", `user/studioAccs/${ownerId}`);
            return data;
        } catch (err) {
            console.error("Error fetching owner data:", err);
            throw err;
        }
    };

    return { getOneStudio, getAllStudios, createStudio, getOwner };
}
