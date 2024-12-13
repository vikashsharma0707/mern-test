const stuModel = require('../Model/model')


const usersave = async(req,res)=>{

    const {empno,empname,empcity,empdesi,empsalary} = req.body;

  try{
  const data = await stuModel.create({

   empno:empno,
   empname:empname,
   empcity:empcity,
   empdesi:empdesi,
   empsalary:empsalary
  

  })
  res.status(200).json(data)

}catch(err){
    res.status(404).json("data not save")
}


  
}


const userdiasplay = async(req,res)=>{
    try{
    const data = await stuModel.find()
    res.status(200).json(data)
}


catch(err){
  res.status(404).json("data not display")
}

}

const usersearch = async(req,res)=>{
    const {empno} = req.body

    const data = await stuModel.find({empno:empno})
    res.send(data)
}

const userdataDelete = async(req,res)=>{
    const myid = req.body.id
    const data = await stuModel.findByIdAndDelete(myid)
    res.send("record deleted")
}

const userdataEdit = async(req,res)=>{
    const id = req.body.id;
    const empedit = await stuModel.findById(id);
    res.send(empedit)
}


const userdataEditsave = async(req,res)=>{
  const {_id,empno,empname,empcity,empdesi,empsalary} = req.body;

  const empsave = await stuModel.findByIdAndUpdate(_id,{
    empno:empno,
    empname:empname,
    empcity:empcity,
    empdesi:empdesi,
    empsalary:empsalary,

    
  })

  res.send("data sucessfully updated")
}



module.exports ={
    usersave,
    userdiasplay,
    usersearch,
    userdataDelete,
    userdataEdit,
    userdataEditsave
}