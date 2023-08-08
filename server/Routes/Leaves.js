import express from "express";
import {
  getEmpLeave,
  postEmpLeave,
  updateEmpLeave,
  deleteEmpLeave,
  updateLeave,
  getEmpLeavePending,
} from "../Controllers/Employee.js";

const router = express.Router();
router.get("/:userId", getEmpLeave);
router.post("/:userId", postEmpLeave);
router.put("/:id", updateLeave); 
router.delete("/:id", deleteEmpLeave);
router.get("/", getEmpLeavePending);
export default router;

