import { useEffect, useState } from "react";
import request from "../utils/request";
import validateForm from "../validators/formValidator";

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
        try {
            validateForm(studioData);
            const data = await request("POST", "studios/create", studioData);
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
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

    const editStudio = async (studioId, studioData) => {
        try {
            validateForm(studioData);
            const data = await request("PUT", `studios/edit/${studioId}`, studioData);
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    };

    const bookServices = async (studioId, bookingData) => {
        const data = await request("POST", `studios/book/${studioId}`, bookingData);
        return data;
    };

    return { getOneStudio, getAllStudios, createStudio, getOwner, editStudio, bookServices };
}

export function useDeleteStudio(id) {
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        const deleteStudio = async () => {
            try {
                await request("DELETE", `studios/${id}`);
                setIsDeleted(true);
            } catch (err) {
                console.error(err.message);
            }
        };

        if (id) {
            deleteStudio();
        }
    }, [id]);

    return { isDeleted };
}
