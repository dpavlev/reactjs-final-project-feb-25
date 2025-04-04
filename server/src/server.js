import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes.js";

const app = express();

try {
    const databaseUrl = "mongodb://localhost:27017/react-project";
    await mongoose.connect(databaseUrl);
    console.log("Database Connected Successfully!");
} catch (err) {
    console.log("Cannot connect to DB!");
    console.error(err.message);
}

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(5000, () => {
    console.log("Server is listening on http://localhost:5000...");
});
