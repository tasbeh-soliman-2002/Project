const courseModel = require('../Models/Courses')


//ADD
const addNewcourse=async (req,res)=>{
    let course=req.body

    let newcourse=new courseModel(course)
    newcourse.save().then((e)=>{
        res.status(200).send("Added new course Succesfully")
    }).catch((err)=>{
        for(let e in err.errors){
            console.log(err.errors[e].message)
            res.status(400).send("Bad Request...")
        }
    })


}

//Edit

const updatecourse=async(req,res)=>{
    const course= await courseModel.findByIdAndUpdate(req.params.id,req.body).exec()
    if(!course){
        return res.status(404).send("not found")
    }
    res.status(200).send("updated succefuly")
}

//Delete
const deletecourse=async(req,res)=>{
    const course= await courseModel.findByIdAndDelete(req.params.id,req.body).exec()
    if(!course){
        return res.status(404).send("not found")
    }
    res.status(200).send("deleted succefuly")
}
//get
const getcourse=async(req,res)=>{
    const course= await courseModel.findById(req.params.id).exec()
    if(!course){
        return res.status(404).send("not found")
    }
    res.status(200).send(course)
}
const getAllcourse=async(req,res)=>{
    const course= await courseModel.find({}).exec()
    if(!course){
        return res.status(404).send("not found")
    }
    res.status(200).send(course)
}

module.exports={
    addNewcourse,updatecourse,deletecourse,getcourse,getAllcourse
}