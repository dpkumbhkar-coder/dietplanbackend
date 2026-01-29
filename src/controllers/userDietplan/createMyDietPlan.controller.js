const DietPlan = require("../../model/DietPlan");

const createMyDietPlan = async(req,res)=>{
    try {
        const user = req.user._id
        const {title, breakfast, lunch, dinner, snacks, calories } = req.body ;

        const newplan = await DietPlan.create({
              user:user,
              title, breakfast, lunch, dinner, snacks, calories ,
              createdBy:user
        });

        res.status(201).json({
            message:'Dietplan created successfully',
            newplan
        })

    } catch (error) {
     return res.status(500).json({
        message:"Error in creating dietplan",
        error:error.message
     })   
    }
}

module.exports = createMyDietPlan ;