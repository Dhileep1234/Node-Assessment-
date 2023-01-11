const express = require('express');
const dbcon=require('./connection');
const uploadfile =require('express-fileupload');
const stdata=require('./student.json');
const portno =8605;

//here using the module..
const app=express();
app.use(uploadfile());

//body parser
app.use(express.json());


//get all students
app.get('/check',(req,res)=>{
   res.json(stdata); 
});

//getbyid
 app.get('/student/:id',async(res,req)=>{
    const id=stdata.filter(e=> e.id === req.params.id);
    console.log(id);
});

//post student.json file 
app.post('/', async(req,res)=>{
  console.log(req.body);
});

//get upload file query
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
   });
 

//post request
app.post('/', async(req, res)=> {
    if(req.files){
        // the uploaded file object
        console.log(req.files);
        var file =req.files.file
        var filename=file.name
        console.log(filename);
     await file.mv('./Upload/student/'+filename,function(err){
            if(err){
                res.send(err);
             }else{
                res.send("File Uploaded!");
            }
        });       
    }    
    res.json("file uploaded successfully!");
});

//server listening..
app.listen(portno,(res,req)=>{
     console.log(`server listening the port ${portno}`);
     dbcon.connect((err)=>{
        if(err) throw err; 
        console.log("DB connected!");
    })
});

