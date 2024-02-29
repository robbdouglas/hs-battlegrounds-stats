// gamesRoutes.js

import express from "express";
import { getAllGames } from "../controllers/gamesControllers.js";

const gamesRouter = express.Router();

gamesRouter.get("/", getAllGames);

export default gamesRouter;