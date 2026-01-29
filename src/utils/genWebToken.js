const jwt = require('jsonwebtoken'); 
const crypto = require('crypto') ;

const genWebToken = (user)=>{
     const token = jwt.sign(
        {id:user._id},
        process.env.SECRET_KEY,
        {
            expiresIn:'1d'
        }
     )

     return token ;
}

const verifyToken = (token) => {
    try {
        let verify = jwt.verify(token,process.env.SECRET_KEY)
        return verify ;
        
    } catch (error) {
        return null ;
    }
}


const genrateRestToken = ()=>{
    const resetToken = crypto.randomBytes(32).toString('hex');
    // hashed token
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    return {
        resetToken,
        hashedToken,
        expiresIn:Date.now() + 15 * 60 * 1000
    }
}
module.exports = {genWebToken , verifyToken , genrateRestToken}