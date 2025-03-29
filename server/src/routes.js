import { Router } from "express";
import authController from "./controllers/authController.js";

const routes = Router();

routes.use("/auth", authController);
routes.use("/studios", authController);

export default routes;
