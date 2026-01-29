const DietPlan = require('../../model/DietPlan');

const updateDietPlan = async(req,res)=>{
    try {
        const {planId} = req.params ;
        console.log(planId)
        const updatedplan = await DietPlan.findByIdAndUpdate(planId , req.body , {new:true ,runValidators:true});
        if(!updatedplan){
            return res.status(400).json({message:"Plan not found"})
        }
        
        return res.status(201).json({
            message:"Plan updated succesfully",
            plan:updatedplan
        })
    } catch (error) {
        res.status(500).json({
      message: "Error updating diet plan",
      error: error.message,
    });
  
    }
}

module.exports = updateDietPlan ;