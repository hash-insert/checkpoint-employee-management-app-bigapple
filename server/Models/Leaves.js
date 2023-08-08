import mongoose from "mongoose";
const leaveSchema = mongoose.Schema({
  reason: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  LeaveStatus: {
    type: String,
    requried: true,
    default: "pending",
  },
  userId: {
    type: Number,
    ref: "user",
    required: true,
  },
});
const Leave = mongoose.model("Leaves", leaveSchema);
export default Leave;
