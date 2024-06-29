const categoryModel = require('../Models/Category')


//ADD
const addNewCategory=async (req,res)=>{
    let catgeory=req.body

    let newCategory=new categoryModel(catgeory)
    newCategory.save().then((e)=>{
        res.status(200).send("Added new category Succesfully")
    }).catch((err)=>{
        for(let e in err.errors){
            console.log(err.errors[e].message)
            res.status(400).send("Bad Request...")
        }
    })


}

//Edit

const updateCategory=async(req,res)=>{
    const catgeory= await categoryModel.findByIdAndUpdate(req.params.id,req.body).exec()
    if(!catgeory){
        return res.status(404).send("not found")
    }
    res.status(200).send("updated succefuly")
}

//Delete
const deleteCategory=async(req,res)=>{
    const catgeory= await categoryModel.findByIdAndDelete(req.params.id,req.body).exec()
    if(!catgeory){
        return res.status(404).send("not found")
    }
    res.status(200).send("deleted succefuly")
}
//get
const getCategory=async(req,res)=>{
    const catgeory= await categoryModel.findById(req.params.id).exec()
    if(!catgeory){
        return res.status(404).send("not found")
    }
    res.status(200).send(catgeory)
}
const getAllCategory=async(req,res)=>{
    const catgeory= await categoryModel.find({}).exec()
    if(!catgeory){
        return res.status(404).send("not found")
    }
    res.status(200).send(catgeory)
}

module.exports={
    addNewCategory,updateCategory,deleteCategory,getCategory,getAllCategory
}