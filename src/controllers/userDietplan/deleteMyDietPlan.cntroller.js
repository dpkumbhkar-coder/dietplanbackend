const DietPlan = require("../../model/DietPlan");

const deleteMyDietPlan = async(req,res)=>{
       
    try {
        
        
        const {planId} = req.params ;
        
        const deletedPlan = await DietPlan.findOneAndDelete({_id:planId , user:req.user._id});
        if(!deletedPlan){
            return res.status(404).json({message:"Plan not found"})
        }
        return res.status(204).json({
            message:"Plan deleted successfully",
            deletedPlan
        })
    } 
    catch (error) {
        return res.status(500).json({
            message:"error in deleting plan",
            error:error.message
        })
    }
}

module.exports = deleteMyDietPlan ;