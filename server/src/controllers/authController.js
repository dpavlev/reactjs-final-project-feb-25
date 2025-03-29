import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.post("/loginUser", async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.loginUser(email, password);

        res.cookie("auth", token, { httpOnly: true });
        // ! CHECK HOW TO REDIRECT WITH REACT
        // TODO: Redirect user
        res.end();
        // res.redirect('/');
    } catch (err) {
        // /! HOW TO RETURN ERROR IN REACT
        // /TODO: Return error
        // ? Maybe correct?
        res.send(getErrorMessage(err));
    }
});

authController.post("/registerUser", async (req, res) => {
    const userData = req.body;
    try {
        const token = await authService.registerUser(userData);
        res.cookie("auth", token, { httpOnly: true });
        res.end();
    } catch (err) {
        // ! HOW TO RETURN ERROR IN REACT
        // TODO: Return error
        res.status(404);
    }
});

authController.post("/logout", async (req, res) => {
    res.clearCookie("auth");
    res.end();
});

authController.post("/loginStudio", async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.loginStudio(email, password);
        localStorage.setItem("isStudio", true);
        res.cookie("auth", token, { httpOnly: true });
        // ! CHECK HOW TO REDIRECT WITH REACT
        // TODO: Redirect user
        res.end();
        // res.redirect('/');
    } catch (err) {
        // /! HOW TO RETURN ERROR IN REACT
        // /TODO: Return error
        // ? Maybe correct?
        res.send(getErrorMessage(err));
    }
});

authController.post("/registerStudio", async (req, res) => {
    const userData = req.body;
    try {
        const token = await authService.registerStudio(userData);
        localStorage.setItem("isStudio", true);
        res.cookie("auth", token, { httpOnly: true });
        res.end();
    } catch (err) {
        // ! HOW TO RETURN ERROR IN REACT
        // TODO: Return error
        res.status(404);
    }
});

export default authController;
