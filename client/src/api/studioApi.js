import request from "../utils/request";

export function useStudioApi() {
    const getOneStudio = async (id) => {
        const data = await request("GET", `studios/${id}`);
        return data;
    };

    const createStudio = async (studioData) => {
        const data = await request("POST", "studios/create", studioData);
        return data;
    };

    return { getOneStudio, createStudio };
}
