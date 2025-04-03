import Studio from "../models/Studio.js";
import StudioAcc from "../models/StudioAcc.js";

async function createStudio(studioData) {
    try {
        const newStudio = await Studio.create(studioData);
        await StudioAcc.findByIdAndUpdate(studioData.studioAcc, { $push: { studio: newStudio._id } });
        return newStudio;
    } catch (err) {
        throw new Error("Error creating studio: " + err.message);
    }
}

async function getOneStudio(id) {
    return Studio.findById(id).then((studio) => {
        if (!studio) {
            throw new Error("Studio not found");
        }
        return studio;
    });
}

async function getAllStudios() {
    return Studio.find({});
}

export default {
    getOneStudio,
    getAllStudios,
    createStudio
};
