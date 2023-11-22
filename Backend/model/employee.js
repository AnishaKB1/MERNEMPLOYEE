const mongoose=require ('mongoose');
const employee=mongoose.Schema({
    name:String,
    designation:String,
    location:String,
    salary:Number,
    email : String,
    password:String
})
const employeedata=mongoose.model('employeedata',employee);
module.exports=employeedata;