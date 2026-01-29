const DietPlan = require("../../model/DietPlan");
const User = require("../../model/usermodel");

const createDietPlain = async (req, res) => {
  try {
    const { userId, title, breakfast, lunch, dinner, snacks, calories } =
      req.body;

      console.log(userId , title)

    const user = await User.findById(userId);
    console.log(user + 'user')
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const plan = await DietPlan.create({
      user: userId,
      title,
      breakfast,
      lunch,
      dinner,
      snacks,
      calories,
      createdBy: req.user._id,
    });
    console.log(plan + 'plan')
    res.status(201).json({
        messsage:"DietPlan Created",
        plan
    })
  } catch (error) {
    res.status(500).json({
        message:"Error creating diet plan",
        error:error.message
    })
  }
};


module.exports = createDietPlain ;