const dietplans = require('../../model/DietPlan');

const updateMyDietPlan = async(req,res)=>{
    try {
        
        const {planId} = req.params ;
        const updatedplan = await dietplans.findOneAndUpdate( { _id: planId, user: req.user._id }, req.body,{new:true,runValidators:true})
        if(!updatedplan){
            return res.status(404).json({
                message:"plan not found",
            })
        }
        return res.status(202).json({
            message:"Plan updated successfully",
            updatedplan
        })

    } catch (error) {
        return res.status(500).json({
            message:"error in Plan updation",
            error:error.message
        })
    }
}

module.exports = updateMyDietPlan ;