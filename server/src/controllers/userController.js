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

export default userController;
