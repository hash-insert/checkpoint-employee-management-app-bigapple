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
export const getEmpLeave = async (req, res) => {
  try {
    const empId = req.params.empid;
    const employee = await Employee.findOne({ employeeId: empId });
    if (!employee) {
      return res.status(404).json("Employee not found");
    }
    const leaves = employee.leaves;
    res.status(200).json(leaves);
  } catch (err) {
    res.status(500).json("Error occurred while retrieving employee leaves");
  }
};
export const postEmpLeave = async (req, res) => {
  try {
    const empId = req.params.empid;
    const { title, reason, fromDate, toDate } = req.body;

    const employee = await Employee.findOne({ employeeId: empId });
    if (!employee) {
      return res.status(404).json("Employee not found");
    }

    const newLeave = {
      title,
      reason,
      fromDate,
      toDate,
      LeaveStatus: "pending",
    };

    employee.leaves.push(newLeave);
    await employee.save();

    res.status(200).json("Leave added successfully");
  } catch (err) {
    res.status(500).json("Error occurred while adding employee leave");
  }
};
export const updateEmpLeave = async (req, res) => {
  try {
    const empId = req.params.empid;
    const { title, reason, fromDate, toDate } = req.body;

    const employee = await Employee.findOne({ employeeId: empId });
    if (!employee) {
      return res.status(404).json("Employee not found");
    }

    for (let i = 0; i < employee.leaves.length; i++) {
      const leave = employee.leaves[i];
      leave.title = title;
      leave.reason = reason;
      leave.fromDate = fromDate;
      leave.toDate = toDate;
    }

    await employee.save();

    res.status(200).json("Leave updated successfully");
  } catch (err) {
    res.status(500).json("Error occurred while updating employee leave");
  }
};
export const updateLeave = async (req, res) => {
  try {
    const empId = req.params.empid;
    const { leaveStatus } = req.body;

    const employee = await Employee.findOne({ employeeId: empId });
    if (!employee) {
      return res.status(404).json("Employee not found");
    }

    for (let i = 0; i < employee.leaves.length; i++) {
      const leave = employee.leaves[i];
      leave.LeaveStatus = leaveStatus;
    }

    await employee.save();

    res.status(200).json("Leave status updated successfully");
  } catch (err) {
    res.status(500).json("Error occurred while updating leave status");
  }
};

