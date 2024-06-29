const UsersModel = require('../Models/Users')


//ADD
const addNewUser=async (req,res)=>{
    let catgeory=req.body

    let newCategory=new UsersModel(catgeory)
    newCategory.save().then((e)=>{
        res.status(200).send("Added new user Succesfully")
    }).catch((err)=>{
        for(let e in err.errors){
            console.log(err.errors[e].message)
            res.status(400).send("Bad Request...")
        }
    })


}

//Edit

const updateUser=async(req,res)=>{
    const catgeory= await UsersModel.findByIdAndUpdate(req.params.id,req.body).exec()
    if(!catgeory){
        return res.status(404).send("not found")
    }
    res.status(200).send("updated succefuly")
}

//Delete
const deleteUser=async(req,res)=>{
    const catgeory= await UsersModel.findByIdAndDelete(req.params.id,req.body).exec()
    if(!catgeory){
        return res.status(404).send("not found")
    }
    res.status(200).send("deleted succefuly")
}
//get
const getUser=async(req,res)=>{
    const catgeory= await UsersModel.findById(req.params.id).exec()
    if(!catgeory){
        return res.status(404).send("not found")
    }
    res.status(200).send(catgeory)
}
const getAllUsers=async(req,res)=>{
    const catgeory= await UsersModel.find({}).exec()
    if(!catgeory){
        return res.status(404).send("not found")
    }
    res.status(200).send(catgeory)
}

module.exports={
    addNewUser,updateUser,deleteUser,getUser,getAllUsers
}