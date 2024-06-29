
const mongoose = require('mongoose')
const PdfSchema = mongoose.Schema({
    Name:{
        type:String,
       required:true
    },
    Course:{
        type:String,
        required:true
    },
    PDfUrl:{
        type:String,
        required:true
    }
  
   
 
   
})




const PdfModel = mongoose.model('pdfs',PdfSchema)

module.exports = PdfModel