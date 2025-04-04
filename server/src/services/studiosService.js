import Studio from "../models/Studio.js";
import StudioAcc from "../models/StudioAcc.js";

async function createStudio(studioData) {
    try {
        const newStudio = await Studio.create(studioData);
        await StudioAcc.findByIdAndUpdate(studioData.studioAcc, { $set: { studio: newStudio._id } });
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

async function getAllStudios(query = {}) {
    try {
        const studios = await Studio.find({});

        if (!query.city) {
            return studios;
        }

        return studios.filter((studio) => {
            return query.city.toLowerCase() === studio.studioCity.toLowerCase();
        });
    } catch (error) {
        console.error("Error fetching studios:", error);
        throw new Error("Failed to retrieve studios");
    }
}

async function updateStudio(id, studioData) {
    try {
        const updatedStudio = await Studio.findByIdAndUpdate(id, studioData, { new: true });
        if (!updatedStudio) {
            throw new Error("Studio not found");
        }
        return updatedStudio;
    } catch (err) {
        throw new Error("Error updating studio: " + err.message);
    }
}

async function deleteStudio(id) {
    try {
        const studio = await Studio.findByIdAndDelete(id);
        if (!studio) {
            throw new Error("Studio not found");
        }
        return studio;
    } catch (err) {
        throw new Error("Error deleting studio: " + err.message);
    }
}

export default {
    getOneStudio,
    getAllStudios,
    createStudio,
    updateStudio,
    deleteStudio
};
