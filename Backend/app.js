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

app.use(express.static(path.join(__dirname,'/build')));
app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname,'/build/index.html')); }); 


  
  const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
