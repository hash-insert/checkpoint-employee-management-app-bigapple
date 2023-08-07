import mongoose from "mongoose";

const TimesheetSchema = mongoose.Schema(
  {
    userId: {
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
    productive: {
      type: Number,
      required: false,
    },
    screenshots: {
      type:[String],
      required: false,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const TimeSheet = mongoose.model("TimeSheet", TimesheetSchema);
export default TimeSheet;
