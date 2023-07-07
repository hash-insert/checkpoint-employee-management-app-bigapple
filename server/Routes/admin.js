import express from "express";
import {
  addAdmin
} from "../Controllers/adminController.js";
const router = express.Router();
router.post("/createadmin",addAdmin)
export default router;