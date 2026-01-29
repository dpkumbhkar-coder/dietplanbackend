const DietPlan = require("../../model/DietPlan");

const deleteDeitPlain = async (req, res) => {
  try {
    const { planId } = req.params;
    const deletedplan = await DietPlan.findByIdAndDelete(planId);
    if (!deleteDeitPlain) {
      return res.status(404).json({ message: "Plan not found" });
    }
    return res
      .status(204)
      .json({ message: "plan deleted succesfully", deleteDeitPlain });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error in deleting pla", error: error.message });
  }
};

module.exports = deleteDeitPlain ;
