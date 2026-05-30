import express from "express";
import { getTeams, saveTeam } from "../controllers/teamController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getTeams);
router.post("/", protect, saveTeam);

export default router;