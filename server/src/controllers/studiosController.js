import { Router } from "express";
import { getErrorMessage } from "../utils/errorUtils.js";
import studiosService from "../services/studiosService.js";

const studiosController = Router();

studiosController.get("/all", async (req, res) => {
    res.json(studios);
});

studiosController.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const studio = await studiosService.getOneStudio(id);
        res.json(studio);
    } catch (err) {
        res.status(404).json({ message: getErrorMessage(err) });
    }
});

studiosController.post("/create", async (req, res) => {
    const studioData = req.body;
    try {
        const newStudio = await studiosService.createStudio(studioData);
        res.json(newStudio);
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) });
    }
});

export default studiosController;
