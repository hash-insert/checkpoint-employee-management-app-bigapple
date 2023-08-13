import TimeSheet from "../Models/Timesheets.js";

export const getTimesheets=async(req,res,next)=>{
  try{
  const id=req.params.id;
  const time=await TimeSheet.findById({userId:id});
  res.send(time);
  }
  catch(err)
  {
      res.status(404).send(err);
  }
}

export const getallTimesheets=async(req,res,next)=>{
  try{
  const time=await TimeSheet.find();
  res.send(time);
  }
  catch(err)
  {
      res.status(404).send(err);
  }
}

export const addTimesheets=async(req,res,next)=>{
  
  try{
     const empId=req.body.empId;
     const empName=req.body.empName;
     const projectName=req.body.projectName;
     const feature= req.body.feature;
     const description=req.body.description;
     const productive=req.body.productiveHrs;
     const screenshots=req.body.screenshots;
     const status=req.body.status;
     const date=req.body.date
     console.log(req.body)
     const time=await TimeSheet.create({
      empId:empId,
      empName:empName,
      projectName: projectName,
      feature:feature,
      description:description,
      productiveHrs:productive,
      screenshots:screenshots,
      status:status,
      date:date
     })

     res.status(200).send(req.body);

  }

  catch(err){
      console.log("the error is ",err);
      res.status(400).json({error:err})
  }
}

export const updatebyemployee=async(req,res,next)=>{

  try{
      const _id=req.params.id;
      console.log(_id);
      const updated=await TimeSheet.findByIdAndUpdate(_id,req.body);

      res.send(updated);
  }
  catch(err)
  {
      res.json({error:err})
  }
}

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
    const { empId, empName, projectName, feature, description, productiveHrs,date } = req.body;
    const timeSheetObj = {
      empId: empId,
      empName: empName,
      projectName: projectName,
      feature: feature,
      description: description,
      productiveHrs: productiveHrs,
      date:date,
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
    console.log(updateTimeSheet);
    if (await updateTimeSheet.modifiedCount === 1) {
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
    const allAccepted = await TimeSheet.find({ status: "Approved" });
    res.status(200).json(allAccepted);
  } catch (err) {
    res
      .status(500)
      .json("Error Occured while getting the accepted time sheets" + err);
  }
};
export const allRejectedTimeSheets = async (req, res) => {
  try {
    const allRejected = await TimeSheet.find({ status: "Rejected" });
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

export const TimesheetbyDate = async (req,res) => {
  try{
    const date = req.params.date
    const empTimesheetsbydate = await TimeSheet.find({date:date})
    res.status(200).json(empTimesheetsbydate);
  } catch (err){
    res
      .status(500)
      .json("Error while getting Timesheets of employee" + err);
  }
}