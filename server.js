const express = require('express');

const app = express();

app.listen(5100, function(req,res){
  console.log("Server is started succesfully");
});

//Handling cors
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",
  "http://localhost:4200");

  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type, Accept");

  next();
});

details = [[{"Name" : "Piyush","Salary":2400000, "Age":35},
            {"Name" : "Vedant","Salary":1200000, "Age":20},
            {"Name" : "Atharva","Salary":600000, "Age":22}],

            [{"Name" : "Pranav","Salary":2400000, "Age":35},
            {"Name" : "Shreyas","Salary":1200000, "Age":20},
            {"Name" : "Siddhant","Salary":600000, "Age":20}],

            [{"Name" : "Ayush","Salary":2400000, "Age":35},
            {"Name" : "Anish","Salary":1200000, "Age":22},
            {"Name" : "Virat","Salary":600000, "Age":20}],
            
            [{"Name" : "Vikrant","Salary":600000, "Age":25},
            {"Name" : "Rohit","Salary":650000, "Age":20},
            {"Name" : "Dinesh","Salary":500000, "Age":30}],
            
            [{"Name" : "Rakshit","Salary":600000, "Age":20},
            {"Name" : "Aditya","Salary":800000, "Age":22},
            {"Name" : "Anvay","Salary":1000000, "Age":23}]]

app.get('/departments/:id', ReadData);
function ReadData(req, res)
{
  paramID = ((req.params.id) - 1)
 
  res.send(details[paramID]);
}
            