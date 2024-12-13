


const mongoose = require("mongoose");
const stuSchema = new mongoose.Schema({

empno:{
    type:Number,
    require:true
},


empname:{
    type:String,
    require:true
},

empcity:{
    type:String,
    require:true
},


empdesi:{
    type:String,
    require:true
},

empsalary:{
    type:String,
    require:true
}






})


module.exports = mongoose.model("test",stuSchema)