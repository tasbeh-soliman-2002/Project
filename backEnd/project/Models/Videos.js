
const mongoose = require('mongoose')
const VideoSchema = mongoose.Schema({
    Name:{
        type:String,
       required:true
    },
    Course:{
        type:String,
        required:true
    },
    VideoUrl:{
type:String,
required:true
    }
  
   
 
   
})




const VideoModel = mongoose.model('videos',VideoSchema)

module.exports = VideoModel