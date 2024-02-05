const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app=express()
const port=5000
app.use(cors());
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("App is working")
})
mongoose.connect('mongodb://127.0.0.1:27017/', { dbName:'complaints', useNewUrlParser: true, useUnifiedTopology: true });

const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  restaurantName: String,
  complaint: String,
});

const Complaint = mongoose.model('Complaint', complaintSchema);
Complaint.createIndexes()
// var com=new Complaint({
//     name:'Aditya',
//     email:'dfksdfk@gmail',
//     mobile:'943234324',
//     restaurantName:'dsfdf',
//     complaint:'dfsdfs'
// })
// com.save()
app.get('/',(req,res)=>{
  res.send("Hello")
})

app.post('/complaints', async (req, res) => {
  try {
    const formData = req.body;
    const newFormData = new Complaint(formData);
    await newFormData.save();
    res.json({ message: 'Form data saved successfully' });
    console.log(formData)

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port,function(err){
  if (err) console.log("Error")
  console.log("listenin on 5000");
});
