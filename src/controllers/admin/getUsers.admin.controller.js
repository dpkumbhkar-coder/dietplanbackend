const User = require('../../model/usermodel') ;
const getAllUser = async(req,res)=>{
    try {
        const users =await User.find().select("-password");
        res.status(200).json({
            message:"Users Fetched succesfully",
            count:users.length ,
            users
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error in fetching users",
            error:error.message
        })
    }
      
}

module.exports = getAllUser ;