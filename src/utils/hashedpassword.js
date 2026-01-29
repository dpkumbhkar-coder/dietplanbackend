const bcrypt = require('bcrypt') ;

 const hashedPassword = async(password)=>{
    
    return await bcrypt.hash(password , 10);

    
}

const comparePassword = async(password , hassedpassword)=>{
    return await bcrypt.compare(password ,hassedpassword)
}
module.exports = {hashedPassword , comparePassword}