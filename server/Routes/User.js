import express from 'express';
import { addUser, deleteUserById, getAllUsers, getUserById, updateUserData } from '../Controllers/User.js';
const app = express()

const router = express.Router();

router.post("/addUser",addUser)
router.get("/allUsers",getAllUsers)
router.get("/userById/:userid",getUserById);
router.delete("/delete/:userid",deleteUserById);
router.put("/updateUser/:userId",updateUserData)
export default router;