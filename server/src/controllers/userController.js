import { Router } from "express";
import { getErrorMessage } from "../utils/errorUtils.js";
import userService from "../services/userService.js";

const userController = Router();

userController.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userService.getUser(id);
        res.json(user);
    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

userController.put("/:id", async (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    try {
        const updatedUser = await userService.updateUser(id, userData);
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

userController.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await userService.deleteUser(id);
        res.end();
    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

userController.get("/studioAccs/:ownerId", async (req, res) => {
    const ownerId = req.params.ownerId;
    try {
        const studioAcc = await userService.getStudioAcc(ownerId);
        res.json(studioAcc);
    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

userController.put("/studioAccs/:ownerId", async (req, res) => {
    const ownerId = req.params.ownerId;
    try {
        await userService.removeStudio(ownerId);
        res.end();
    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

export default userController;
