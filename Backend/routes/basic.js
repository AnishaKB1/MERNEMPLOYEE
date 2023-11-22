const express = require('express');
const employeedata = require('../model/employee');
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
router.use(express.urlencoded({ extended: true }));
router.use(express.json());


function verifytoken(req,res,next){
  try{
    const token= req.headers.token;
    console.log(token);
    if(!token) throw 'Unauthorized';
    let payload=jwt.verify(token,'reactempapp');
    if(!payload) throw 'Unauthorized';
    //res.staus(200).send(payload);
    next();

  }catch(error){
    res.status(401).send(error);
  }
}



router.post('/login',async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin123';

    if (email === adminEmail && password === adminPassword) {
      // Admin login
      const payload = { email: adminEmail };
      const token = jwt.sign(payload, 'reactempapp');
      res.status(200).json({ message: 'success', token });
    } else {
      // User login
      const foundUser = await employeedata.findOne({ email, password });

      if (foundUser) {
        let payload ={email:email,password:password};
        let token = jwt.sign(payload,'reactempapp');

         res.status(200).send({message:'success',token:token});
     } else {
         res.status(401).send('Invalid credentials');
     }
 }
 } catch (error) {
     console.error('Error during login:', error);
     res.status(500).send(error);
 }
});

//CRUD for employee

router.get("/",verifytoken,async (req, res) => {
    try {
      const getemployee = await employeedata.find();
      res.json(getemployee);
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  });
  
router.post('/add',verifytoken,async (req, res) => {
    const data = new employeedata({
       name: req.body.name,
        designation: req.body.designation,
         location :req.body.location,
         salary : req.body.salary,
         email : req.body.email,
         password :req.body.password
    })
  
    try {
        const dataToSave = await data.save();
        res.status(200).send("Updated Successfully")
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
  })
  
  
  
  
  router.put("/update/:id",verifytoken,async (req, res) => {
  try {
    // const id = req.params.id;
  const item = req.body;
  const data = await employeedata.findByIdAndUpdate(req.params.id, item);
   
    res.status(200).send('Updated Successfully');
  } catch (error) {
    res.status(500).send(error);
  }
  });
  
  
  router.delete('/delete/:id',verifytoken,async (req, res) => {
  try {
      const id = req.params.id;
      const data = await employeedata.findByIdAndDelete(id);
      res.json(`Document has been deleted..`);
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
  })

  
module.exports=router;
  