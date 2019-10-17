exports.handler=  (event,context,callback)=>{
    context.callbackWaitsForEmptyEventLoop = false;
  const mysql = require('mysql')

 
 var connection = mysql.createConnection({
        host     : "database-1.csj7nr0eb1z7.us-east-1.rds.amazonaws.com",
        user     : "admin",
        password : "aeroplane1",
        port     : "3306",
        database : "varun"
    });
connection.connect((err)=>{
    if(err){
        console.log('Server refused to connect.')
        console.log(err)}
    else{
        console.log('Connected to Server')}
})
     
       var flag=0;
  var sql = "select * from district where district='"+event.District+"';"
  connection.query(sql, function (err, result) {
    if (err){
        // console.log('Error inserting records')
        
        console.log(err)
       
    }else{
        console.log("Done");
        console.log(result);
        flag=result.length;
       /* fs.appendFile('main.txt', JSON.stringify(result), function (err) {
          if (err) throw err;
          console.log('Saved!');
        });*/
    }
    if(flag>0)
    {
        logi=1
        callback(null,result)
         
    }
    else
      { 
          logi=0
          callback(null,'No Data Found Please Try Again')
      }
  } ) 
    }