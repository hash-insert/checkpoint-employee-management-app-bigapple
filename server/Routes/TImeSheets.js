import express from "express";
import { acceptedTimeSheets, allAcceptedTimesheets, allRejectedTimeSheets, deleteTimeSheet, getPendingEmployeeTimeSheets,rejectedTimeSheets,saveTimesheets, updateTimeSheet } from "../Controllers/Timesheets.js";

const router = express.Router();

router.get("/pendingEmployeeTimesheets",getPendingEmployeeTimeSheets)
router.post("/savetimesheets",saveTimesheets);
router.put("/updateTimeSheet",updateTimeSheet);
router.get("/allAcceptedTimesheets",allAcceptedTimesheets)
router.get("/allrejectedtimesheets",allRejectedTimeSheets)
router.delete("/deletetimesheet",deleteTimeSheet)
router.get("/employeeacceptedTimesheets",acceptedTimeSheets)
router.get("/employeerejectedtimesheet",rejectedTimeSheets);
export default router;