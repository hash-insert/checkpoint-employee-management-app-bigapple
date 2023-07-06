import Employee from "../Models/Employee.js";
import bcrypt from "bcrypt";

export const saveEmployee = async (req, res) => {
  try {
    const {
      empId,
      empName,
      password,
      designation,
      email,
      DOB,
      phone,
      leaves,
      noOfLeaves,
      profileImg,
      timesheets,
    } = req.body;

    let saltRounds = 5;

    let salt = await bcrypt.genSalt(saltRounds);
    let hashedPassword = await bcrypt.hash(password, salt);

    let employeeObj = {
      employeeId: empId,
      empName: empName,
      password: hashedPassword,
      designation: designation,
      email: email,
      dateOfBirth: DOB,
      phoneNumber: phone,
      leaves: leaves,
      noOfLeaves: noOfLeaves,
      profileImage: profileImg,
      timeSheets: timesheets,
    };
    const newEmployee = await Employee(employeeObj);
    newEmployee.save();
    res.status(200).json("Saved Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred while adding the employee.", err);
  }
};

export const getAllEmp = async (req, res) => {
  try {
    const getEmployee = await Employee.find();
    res.status(200).json(getEmployee);
  } catch (err) {
    res.send("Your error occured at getting all Employees ", err);
  }
};

export const getEmpById = async (req, res) => {
  try {
    const empId = req.params.empid;
    const getemp = await Employee.find({ employeeId: empId });
    res.status(200).json(getemp);
  } catch (err) {
    res.json("your error occured while getting the employee by Id ", err);
  }
};

export const deleteEmpById = async(req,res)=>{
    try{
        const empId = req.params.empid;
        await Employee.deleteOne({ employeeId: empId })
        res.json("Removed Successfully")
    }catch(err){
        res.json("Your error occured while deleting the employee ",err)
    }
}
