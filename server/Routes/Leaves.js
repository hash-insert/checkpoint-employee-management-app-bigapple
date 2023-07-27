import express from "express";
import {
  getEmpLeave,
  postEmpLeave,
  updateEmpLeave,
  deleteEmpLeave,
  updateLeave,
} from "../Controllers/Employee.js";

const router = express.Router();
router.get("/empLeave/:userId", getEmpLeave);
router.post("/empLeave/:userId", postEmpLeave);
router.put("/empLeave/:id", updateEmpLeave);
router.delete("/empLeave/:id", deleteEmpLeave);
router.put("/empLeave", updateLeave);
export default router;
