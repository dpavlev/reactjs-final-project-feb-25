import { Router } from "express";
import authController from "./controllers/authController.js";
import userController from "./controllers/userController.js";
import studiosController from "./controllers/studiosController.js";

const routes = Router();

routes.use("/auth", authController);
routes.use("/studios", studiosController);
routes.use("/user", userController);

export default routes;
