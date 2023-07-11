import express from "express";
import { getAllTeams,postTeam ,updateTeam, deleteTeam} from "../Controllers/Teams.js";
const router = express.Router();

router.get("/",getAllTeams);
router.post("/",postTeam);
router.delete("/",deleteTeam);
router.put("/",updateTeam);
export default router;