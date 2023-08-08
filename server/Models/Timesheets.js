import mongoose from "mongoose";

const TimesheetSchema = mongoose.Schema(
  {
    empId: {
      type: String,
      required: true,
    },
    empName: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    feature: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    productiveHrs: {
      type: Number,
      required: true,
    },
    screenshots: {
      type:[String],
      required: false,
    },
    status: {
      type: String,
      default: "pending",
    },
    date:{
      type:String,
      required: true
    }
  },
  { timestamps: true }
);

const TimeSheet = mongoose.model("TimeSheet", TimesheetSchema);
export default TimeSheet;
