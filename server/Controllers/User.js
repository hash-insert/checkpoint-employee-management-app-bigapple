import User from "../Models/User.js";
import bcrypt from "bcrypt";

export const addUser = async (req, res) => {
  try {
    const {
      userid,
      userName,
      role,
      designation,
      email,
      password,
      DOB,
      phone,
      profileImg,
      noOfLeaves,
    } = req.body;
    let saltRounds = 5;
    let salt = await bcrypt.genSalt(saltRounds);
    let hashedPassword = await bcrypt.hash(password, salt);
    let newObj = {
      userId: userid,
      userName: userName,
      role: role,
      designation: designation,
      email: email,
      password: hashedPassword,
      DOB: DOB,
      phone: phone,
      profileImg: profileImg,
      noOfLeaves: noOfLeaves,
    };
    const check = await User.find({ userId: userid });
    if (check.length > 0) {
      res.status(200).json("Employee Already exists");
    } else {
      let newUser = new User(newObj);
      await newUser.save();

      res.status(200).json("Saved Successfully");
    }
  } catch (err) {
    res.send("Error occured while saving the data", err);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.status(200).json(getUsers);
  } catch (err) {
    res.send("Your error occured at getting all Employees ", err);
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.userid;
    const getUser = await User.find({ userId: userId });
    res.status(200).json(getUser);
  } catch (err) {
    res.json("your error occured while getting the employee by Id ", err);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.userid;
    await User.deleteOne({ userId: userId });
    res.json("Removed Successfully");
  } catch (err) {
    res.json("Your error occured while deleting the employee ", err);
  }
};

export const updateUserData = async(req,res)=>{
    try{
        const userId = req.params.userId
        const obj = req.body;
        const result = await User.updateOne({ userId: userId }, obj);
        if(result.modifiedCount==1){
            res.status(200).json("Updated Sucessfully")
        }
    }catch(err){
        res.json("Error occured while updating the data", err)
    }
}