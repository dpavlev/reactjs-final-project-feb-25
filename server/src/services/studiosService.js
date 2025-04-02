import Studio from "../models/Studio";

async function createStudio(studioData) {}

async function getOneStudio(id) {
    return Studio.findById(id).then((studio) => {
        if (!studio) {
            throw new Error("Studio not found");
        }
        return studio;
    });
}

export default {
    getOneStudio
};
