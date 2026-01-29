const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    resetPasswordToken:{
        type:String
    },
    resetPasswordExperes:{
        type:Date
    }
},
 {timestamps:true}
);

module.exports = mongoose.model('User',UserSchema)