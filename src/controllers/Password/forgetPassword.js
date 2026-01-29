const User = require('../../model/usermodel')
const { genrateRestToken } = require('../../utils/genWebToken')
const sendEmail = require('../../utils/sendEmaill')
const forgetPassword = async(req ,res)=>{
    
     try {
        const { email } = req.body ;
        if(!email){
            return res.status(400).json({message:'Email is required'});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(409).json({message:'If the email exists, a reset link has been sent'})
        }
        const {resetToken ,hashedToken ,expiresIn } = genrateRestToken() ;
        
        user.resetPasswordToken = hashedToken ;
        user.resetPasswordTokenExpires = expiresIn ;

        await user.save() ;


        const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
         await sendEmail({
            to:user.email,
            subject:'Password reset requrest',
            html:`<p>You requested a password reset.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link expires in 15 minutes.</p>`
         })


        return res.status(200).json({
            message:'If the email exists, a reset link has been sent'
        });



     } catch (error) {
        res.status(500).json({message:"Internal server error"})
     }
}

module.exports = forgetPassword ;