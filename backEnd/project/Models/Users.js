
const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    Name:{
        type:String,
       required:true
    },
    Grade:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Type:{
type:Number,
required:true
    },
    category:{
        type:String,
        required:true
    }
 
   
})




const userModel = mongoose.model('Users',UserSchema)

module.exports = userModel