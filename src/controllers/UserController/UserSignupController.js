const User = require('../../model/usermodel')
const { hashedPassword } = require('../../utils/hashedpassword')
const signupUser = async(req,res)=>{
    try {
        
        
        const {name ,email,password} = req.body ;
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const userExist = await User.findOne({email}) ;
        if(userExist){
            return res.status(409).json({message:"User Already Exist"}) ;
        }
        
        const hassedPass = await hashedPassword(password)
        const newUser= await User.create({
            name:name,
            email:email,
            password:hassedPass
        })
        
        return res.status(201).json({
            message:"User Registred successfully",
            user:{
                id:newUser._id,
                email:newUser.email,
                name:newUser.name
            }
        })
        
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})
}
}

module.exports = signupUser