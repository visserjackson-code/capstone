import express from "express";
import { getEncounters, addEncounter, toggleEncounter, deleteEncounter } from "../controllers/encounterController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:game", protect, getEncounters);
router.post("/", protect, addEncounter);
router.patch("/:id/toggle", protect, toggleEncounter);
router.delete("/:id", protect, deleteEncounter);

export default router;