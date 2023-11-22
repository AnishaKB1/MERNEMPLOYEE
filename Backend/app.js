const express = require('express');

const cors = require('cors');
const mongoose=require('mongoose');
const path=require('path');
const app=new express();

const employeedata = require('./model/employee');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require("./db/connect");

const emprouter=require('./routes/basic');
app.use('/emp',emprouter);




  
  const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})