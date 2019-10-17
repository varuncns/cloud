const express = require('express')
const fs=require('fs')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const AWS = require('aws-sdk'); 

app.use(bodyParser.urlencoded({extended:false}))

    var connection = mysql.createConnection({
        host     : "database-1.csj7nr0eb1z7.us-east-1.rds.amazonaws.com",
        user     : "admin",
        password : "aeroplane1",
        port     : "3306",
        database : "varun"/*
        var connection = mysql.createConnection({
            host     : "localhost",
            user     : "root",
            password : "",
            port     : "3306",
            database : "varun"*/
    });
connection.connect((err)=>{
    if(err){
        console.log('Server refused to connect.')
        console.log(err)}
    else{
        console.log('Connected to Server')}
})


app.post('/',(req,res)=>{
  console.log(req.body)
  var flag=0;
  var sql = "select * from district where district='"+req.body.District+"';"
  connection.query(sql, function (err, result) {
    if (err){
        // console.log('Error inserting records')
        
        console.log(err)
        res.end()
    }else{
        console.log("Done");
        console.log(result);
        flag=1;
       /* fs.appendFile('main.txt', JSON.stringify(result), function (err) {
          if (err) throw err;
          console.log('Saved!');
        });*/
    if(flag==1)
    {
        res.send(result);
    }    

        

        //--------------------------------------------------------
      const s3 = new AWS.S3({  
          accessKeyId: "ASIAXIFV4BWJFFZQ7QPB", 
              secretAccessKey: "y3z4s2Xa6yNnloo0S0eoorshAFyH3xMHdLgpFOSY",   
                /*if you are using educate account include this here*/  
               sessionToken:"FQoGZXIvYXdzEOX//////////wEaDLNKf9W7lTwsimmCkCKWAku1EirGJp9UQlUChkh/gkjeGthw80OwOkL5/Y1KxsR7qNRJdfR61TAmRk+iZ6uemUvAd7aWJnuFIJwYDG2GOw8HsCMhpl+BeIIf/E6EC1NJrpBIFNTkukx0M2eswsLDmOYJVJPyAx3a3fIPZPNyc4JnVyMJUnD49zxXRHWRDJdHg40x1ikvCZlyOyIOBgHUIMQmrnNgzd2vCpsC6poDqtkc+seIJYVGaokFNzA0y5qdH/pKMHDWH1qD/q0/Wa9w8IKBmAkEve7SeYFch6ZG1zUtnbxY/jYAo46nIEkRGnUPNQ9XBfl1SrDnn92MRQhj6UXgnuRpPk4dsj1ue18FWVrlL+EXEC88sOhKu2oo754t2dG31+O8KIfzi+wF"});
    
   const fileName = 'main.txt'; 
    
   const uploadFile = () => {    
        fs.readFile(fileName, (err, data) => {    
                 if (err) throw err;      
                    const params = {    
                                 Bucket: 'case78', // pass your bucket name       
                                 Key: 'main.txt', // file will be saved as testBucket/  
                              Body: JSON.stringify(data, null, 2)       
                             };      
            s3.upload(params, function(s3Err, data) { 
    
               if (s3Err) throw s3Err        
                console.log(`File uploaded successfully at ${data.Location}`)  
                      });
                }); 
               }; 
    
   uploadFile(); 
              //----------------------------------------------------------------
              
      res.end()
    }
  })
 
})

app.listen(8080);