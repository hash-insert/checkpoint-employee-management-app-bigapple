import Admin from "../Models/Admin.js";
import bcrypt from "bcrypt";
export const addAdmin = async (req, res) => {
  try {
    const { adminName, email, password, DOB, phone } = req.body;
    if (!adminName || !email || !password || !DOB || !phone) {
      return res.status(400).json("Missing required fields.");
    }
    let saltRounds = 5;

    let salt = await bcrypt.genSalt(saltRounds);
    let hashedPassword = await bcrypt.hash(password, salt);

    let adminObj = {
      adminName,
      email,
      password: hashedPassword,
      DOB,
      phone,
    };
    const newAdmin = await Admin(adminObj);
    newAdmin.save();
    console.log(newAdmin);
    res.status(200).json("Saved Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred while adding the Admin.", err);
  }
};
