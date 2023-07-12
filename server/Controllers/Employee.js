import Leaves from "../Models/Leaves.js";
// getEmpLeave
// postEmpLeave
// updateEmpLeave
// deleteEmpLeave
// updateLeave
export const getEmpLeave = async (req, res) => {
  try {
    const userId = req.params.userId;
    const leaves = await Leaves.find({ userId: userId });
    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ message: "Failed to get leaves" });
  }
};

const postEmpLeave = async (req, res) => {
  const { title, reason, fromDate, toDate } = req.body;
  const userId = req.params.userId;
  try {
    const newLeave = await Leaves.create({
      title,
      reason,
      fromDate,
      toDate,
      userId,
    });
    res.status(201).json(newLeave);
  } catch (error) {
    res.status(500).json({ message: "Failed to create leave request" });
  }
};

const updateEmpLeave = async (req, res) => {
  const { title, reason, fromDate, toDate } = req.body;
  const leaveId = req.params.id;

  try {
    const leave = await Leaves.findByIdAndUpdate(
      leaveId,
      {
        $set: { title, reason, fromDate, toDate },
      },
      { new: true }
    );

    if (!leave) {
      return res.status(404).json({ message: "Leave not found" });
    }

    res.status(200).json(leave);
  } catch (error) {
    res.status(500).json({ message: "Failed to update leave request" });
  }
};

const deleteEmpLeave = async (req, res) => {
  const leaveId = req.params.id;

  try {
    const leave = await Leaves.findByIdAndRemove(leaveId);

    if (!leave) {
      return res.status(404).json({ message: "Leave not found" });
    }

    res.status(200).json({ message: "Leave deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete leave request" });
  }
};

const updateLeave = async (req, res) => {
  const { leaveId, leaveStatus } = req.body;

  try {
    const leave = await Leaves.findByIdAndUpdate(
      leaveId,
      {
        $set: { LeaveStatus: leaveStatus },
      },
      { new: true }
    );

    if (!leave) {
      return res.status(404).json({ message: "Leave not found" });
    }

    res.status(200).json(leave);
  } catch (error) {
    res.status(500).json({ message: "Failed to update leave status" });
  }
};

export {
  getEmpLeave,
  postEmpLeave,
  updateEmpLeave,
  deleteEmpLeave,
  updateLeave,
};
