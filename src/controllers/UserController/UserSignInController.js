const User = require('../../model/usermodel');
const { comparePassword } = require("../../utils/hashedpassword")
const { genWebToken } = require("../../utils/genWebToken")
const UserSignIn = async(req,res)=>{
  try {
    const {email , password} = req.body ;
    if(!email || !password){
        return res.status(400).json({message:'All fileds  are requiredaaaaaaaaaaaaaa'})
    }
    const user =await User.findOne({email}) ;
    if(!user){
        return res.status(401).json({message:'User Does not exist'})
    }
    const isMatch = await comparePassword(password , user.password) ;
    if(!isMatch){
        return res.status(401).json({message:"Wrong Credentials"})
    }

    const token = genWebToken(user)
    return res.status(200).json({
        message:'User LogedIn succesfully',
        token,
        user:{
          id:user._id,
          role:user.role,
          email:user.email
        }
    })

    
  } catch (error) {
    return res.status(500).json({message:"Internal server error"}) 
  }
}

module.exports = UserSignIn ;