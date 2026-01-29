const crypto = require('crypto');
const User = require('../../model/usermodel');
const { hashedPassword } = require('../../utils/hashedpassword')
const resetPassword = async(req,res)=>{
        console.log('checking request coming')
       try {
         const { token } = req.params ;
         const { password } = req.body ;
         if(!password){
            return res.status(400).json({message:"password required"});
         }
         const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
           console.log('hashed run fine',hashedToken)
         const user = await User.findOne({
            resetPasswordToken:hashedToken,
            resetPasswordTokenExpires:{$gt:Date.now()}

         })
         console.log('user found ',user)
       
         if(!user){
            return res.status(400).json({message:'Invaid or expired token'})
         }

         user.password = await hashedPassword(password);
         user.resetPasswordToken = undefined ;
         user.resetPasswordTokenExpires = undefined ;

         await user.save()

           return res.status(200).json({
            message: 'Password reset successful'
            });

       } catch (error) {
           console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
       } 
}

module.exports = resetPassword