import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.post("/loginUser", async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.loginUser(email, password);
        res.json({ token });
    } catch (err) {
        res.status(400).send(getErrorMessage(err));
    }
});

authController.post("/registerUser", async (req, res) => {
    const userData = req.body;
    try {
        const token = await authService.registerUser(userData);
        res.json({ token });
    } catch (err) {
        res.status(400).send(getErrorMessage(err));
    }
});

authController.post("/logout", async (req, res) => {
    localStorage.removeItem("isStudio");
    localStorage.removeItem("token");
    res.end();
});

authController.post("/loginStudio", async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.loginStudio(email, password);
        localStorage.setItem("isStudio", true);
        res.json({ token });
    } catch (err) {
        res.status(400).send(getErrorMessage(err));
    }
});

authController.post("/registerStudio", async (req, res) => {
    const userData = req.body;
    try {
        const token = await authService.registerStudio(userData);
        localStorage.setItem("isStudio", true);
        res.json({ token });
    } catch (err) {
        res.status(400).send(getErrorMessage(err));
    }
});

export default authController;
