import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.post("/registerUser", async (req, res) => {
    const userData = req.body;
    try {
        const payload = await authService.registerUser(userData);
        res.json(payload);
    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

authController.post("/registerStudio", async (req, res) => {
    const userData = req.body;
    try {
        const payload = await authService.registerStudio(userData);
        res.json(payload);
    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

authController.post("/loginUser", async (req, res) => {
    const { email, password } = req.body;
    try {
        const payload = await authService.loginUser(email, password);
        res.json(payload);
    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

authController.post("/loginStudio", async (req, res) => {
    const { email, password } = req.body;
    try {
        const payload = await authService.loginStudio(email, password);
        res.json(payload);
    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

authController.get("/logout", async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).send("Unauthorized");
        return;
    }
    res.end();
});

export default authController;
