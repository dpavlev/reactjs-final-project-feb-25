import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const studiosController = Router();

studiosController.get("/all", async (req, res) => {
    const studios = await authService.getAllStudios();
    res.json(studios);
});
