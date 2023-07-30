import TimeSheet from "../Models/Timesheets.js";
export const getPendingEmployeeTimeSheets = async (req, res) => {
  try {
    const pendingTimeSheets = await TimeSheet.find({ status: "pending" });
    res.json(pendingTimeSheets);
  } catch (err) {
    res.statusCode(500).send(err);
  }
};
export const saveTimesheets = async (req, res) => {
  try {
    const { empId, empName, projectName, feature, description, productiveHrs } =
      req.body;
    const timeSheetObj = {
      empId: empId,
      empName: empName,
      projectName: projectName,
      feature: feature,
      description: description,
      productiveHrs: productiveHrs,
    };
    const newTimeSheet = new TimeSheet(timeSheetObj);
    await newTimeSheet.save();
    res.status(200).json("Saved Successfully");
  } catch (err) {
    res.status(500).json("Error occured while saving the data" + err);
  }
};
export const updateTimeSheet = async (req, res) => {
  try {
    const { id, status } = req.body;
    const updateTimeSheet = await TimeSheet.updateOne(
      { _id: id },
      { status: status }
    );
    if (updateTimeSheet.modifiedCount === 1) {
      res.status(200).json("Updated Successfully");
    } else {
      res.status(500).json("Error while saving");
    }
  } catch (err) {
    res.status(500).json("Error occured while updating the Timesheet" + err);
  }
};
export const allAcceptedTimesheets = async (req, res) => {
  try {
    const allAccepted = await TimeSheet.find({ status: "accepted" });
    res.status(200).json(allAccepted);
  } catch (err) {
    res
      .status(500)
      .json("Error Occured while getting the accepted time sheets" + err);
  }
};
export const allRejectedTimeSheets = async (req, res) => {
  try {
    const allRejected = await TimeSheet.find({ status: "rejected" });
    res.status(200).json(allRejected);
  } catch (err) {
    res
      .status(500)
      .json("Error occured while getting rejected time sheets" + err);
  }
};
export const deleteTimeSheet = async (req, res) => {
  try {
    const { id } = req.body;
    const deleteData = await TimeSheet.deleteMany({});
    res.send("Deleted");
  } catch (err) {
    res.status(500).json("Error while deleting" + err);
  }
};
export const acceptedTimeSheets = async (req, res) => {
  try {
    const { empId } = req.body;
    const empAcceptedTimesheets = await TimeSheet.find({
      empId: empId,
      status: "accepted",
    });
    res.status(200).json(empAcceptedTimesheets);
  } catch (err) {
    res
      .status(500)
      .json("Error while getting employee accepted timesheets" + err);
  }
};

export const rejectedTimeSheets = async (req, res) => {
  try {
    const { empId } = req.body;
    const employeeRejectedTimeSheets = await TimeSheet.find({
      empId: empId,
      status: "rejected",
    });
    res.status(200).json(employeeRejectedTimeSheets);
  } catch (err) {
    res
      .status(500)
      .json("Error while getting rejected Timesheets of employee" + err);
  }
};
