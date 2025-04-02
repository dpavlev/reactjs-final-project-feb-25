import request from "../utils/request";

export function useStudioApi() {
    const getOneStudio = async (id) => {
        const data = await request("GET", `studios/${id}`);
        console.log(data);
    };

    return { getOneStudio };
}
