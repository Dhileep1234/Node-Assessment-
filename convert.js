const convertor =require('csvtojson');
const csvfilepath="./Upload/student/StudentDB.csv";
const fs=require('fs');

//get a file then convert into json here
convertor()
.fromFile(csvfilepath)
.then((json)=>{
  console.log(json);
  //do a file sync
  fs.writeFileSync("student.json",JSON.stringify(json),"utf-8",(err)=>{
    if(err){
      console.log(err);
    }
  });
});

module.exports ={
  convertor:convertor,
  csvfilepath:csvfilepath,
  fs:fs
}
