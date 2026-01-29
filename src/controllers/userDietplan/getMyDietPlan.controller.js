const DietPlan = require('../../model/DietPlan');

const getMyDeitPlan = async(req,res)=>{
    try {
        const  userId  = req.user._id ;
        const plans = await DietPlan.find({user:userId}).populate('createdBy','name email');
        console.log(plans)
        return res.status(200).json({message:"Deitplan fetched succesfully",count:plans.length , plans});


    } catch (error) {
        return res.status(500).json({
            message:"error in fetching diet plan",
            error:error.message
        })
    }
}

module.exports = getMyDeitPlan ;