const mongoose = require("mongoose");

const DietPlanSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    breakfast: String,
    lunch: String,
    dinner: String,
    snacks: String,

    calories: Number,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("DietPlan", DietPlanSchema);
