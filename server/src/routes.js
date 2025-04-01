import { Router } from "express";
import authController from "./controllers/authController.js";
import userController from "./controllers/userController.js";

const routes = Router();

routes.use("/auth", authController);
routes.use("/studios", authController);
routes.use("/user", userController);

export default routes;
