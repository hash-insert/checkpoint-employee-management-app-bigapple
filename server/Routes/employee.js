import express from 'express';
import { deleteEmpById, getAllEmp, getEmpById, saveEmployee } from '../Controllers/empController.js';
const app = express()

const router = express.Router();

router.post("/save",saveEmployee)
router.get("/getAllEmployees",getAllEmp)
router.post("/getEmpById/:empid",getEmpById)
router.delete("/deleteEmp/:empid",deleteEmpById)
export default router;