
const mongoose = require('mongoose')
const CategorySchema = mongoose.Schema({
    Name:{
        type:String,
       required:true
    },
  
   
 
   
})




const categoryModel = mongoose.model('Categories',CategorySchema)

module.exports = categoryModel