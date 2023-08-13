import mongoose from "mongoose";

const TimesheetSchema = mongoose.Schema(
  {
    empId: {
      type: String,
      required: false,
    },
    empName: {
      type: String,
      required: false,
    },
    projectName: {
      type: String,
      required: false,
    },
    feature: {
      type: String,
      required: false,
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
      required: false
    }
  },
  { timestamps: true }
);

const TimeSheet = mongoose.model("TimeSheet", TimesheetSchema);
export default TimeSheet;
