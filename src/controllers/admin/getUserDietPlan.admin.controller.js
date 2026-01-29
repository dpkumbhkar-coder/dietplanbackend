const Dietplan = require("../../model/DietPlan");

const getUserDietPlan = async(req,res)=>{
    try {
        const {userId} = req.params ;
        const plans = await Dietplan.find({user:userId}).populate("createdBy","name email");
        res.status(200).json({
            message:"diet plan fetched succesfully",
            plans
        })


    } catch (error) {
        res.status(500).json({
            message:"error fetching diet plan",
            error:error.message
        })
    }
}

module.exports = getUserDietPlan ;