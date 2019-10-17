var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var app= express();
var bodyParser = require("body-parser")
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "dbms",
    port:"3306",
    // insecureAuth : true
  });
const httpProxy =require('http-proxy');
const proxy = httpProxy.createServer({});
  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
});
var x;
connection.query('SELECT * from authenatication', function (error, results, fields) {
  if (error) throw error;
  var length=results.length
  // for(i=0;i<length;i++)
  app.post('/login', function (req, res) {
    var username= req.param('Username', null)
     x= req.param('Username', null)
    var password= req.param('Password', null)
    var type= req.param('type', null)
    var logi=0;
    var flag=0;
    for(i=0;i<length;i++)
    {
    if(username==results[i].emp_id)
    {
       if(password==results[i].password_)
         {
            if(type==results[i].designation)
            {
              console.log('\nThe solution is: ', results[i].emp_id , results[i].password_);
              if(type=="Admin")
              {
                flag=2;
              }
              else if(type=="Employee")
              {
                flag=1;
                
              }
             }
          }
     }
    }
    if(flag==2)
    {
      
        console.log('valid Admin');
        logi=2;
        res.send({log : logi })
           res.end()
  //  res.write('<br/>'+ username + '<br/>' + password);
    }
    else if(flag==1)
    {
      console.log('valid Employee');
      logi=1;
      res.send({log : logi })
      // var sql = "select * from employee where emp_id='"+username+"';"
      // connection.query(sql, function (err, result) {
      //   if (err){
      //     // console.log('Error inserting records')
          
      //     console.log(err)
      //     res.end()
      // }
      // else{
      //   console.log("Done");
      //   // console.log(result);
      // }});
      res.end();
    }
   else {
      console.log('not valid');
      res.send({log : logi})
        res.end();  

}});
});
app.post('/open',(req,res)=>
{
  p= req.param('p', null)
  if(p==0)
  {
  console.log('hi')
  var k=0;
  var sql = "select * from employee where emp_id='"+x+"';"
  connection.query(sql, function (err, result)
  {
    if(err)
    {
      console.log(err);
    }
    else{
      console.log(result);
      console.log(k);
      // emp_id,fname,lname,emp_city,emp_mail,p_id,b_id,dept_id,join_date
      res.send({Emp : result[0].emp_id, FN :result[0].fname,LN:result[0].lname,CI:result[0].emp_city,MA:result[0].emp_mail,P:result[0].p_id,B:result[0].b_id,D:result[0].dept_id,J:result[0].join_date })
      res.end();
    }
  }
    )}
    if(p==1)
    {
      var sql ="select (select salary from salary where emp_id='"+x+"')+(select bonus_amount from bonus where b_id=(select b_id from employee where emp_id='"+x+"')) as total;"
      connection.query(sql, function (err, result)
      {
        if(err)
        {
          console.log(err);
        }
        else{
          console.log(result);
          // console.log(k);
          res.send({Pay : result[0].total})
          res.end();
        }
    })
  }
    
});


app.post('/open1',(req,res)=>{
  console.log(req.body)
  d= req.param('d', null)
  if(d==0)
  {
  var emp=req.body.employee
  var fnam=req.body.firstname
  var lnam=req.body.lastname
  var ci=req.body.city
  var ma=req.body.mail
  var pro=req.body.project
  var bo=req.body.bonus
  var dep=req.body.depart
  var joi=req.body.joindate
  var sal=req.body.sala
  // var sql="INSERT INTO salary (emp_id, salary) VALUES ('"+emp+"','"+sal+"');"
  // var sql = "INSERT INTO Employee(emp_id,fname,lname,emp_city,emp_mail,p_id,b_id,dept_id,join_date) VALUES ('" +req.body.employee+"','" +req.body.firstname+"','" +req.body.lastname+"','"+req.body.city+"','"+req.body.mail+"','"+req.body.project+"','"+req.body.bonus+"','"+req.body.depart+"','"+req.body.joindate+"');"
  connection.query("INSERT INTO employee VALUES ('" +emp+"','" +fnam+"','" +lnam+"','"+ci+"','"+ma+"','"+pro+"','"+bo+"','"+dep+"','"+joi+"');" , function (err, result,fields) {
    if (err){
        console.log('Error inserting records')
        console.log(err)
        res.end()
    }else{
        console.log("1 record inserted")
        res.send({value10:'Added Row . Done'});
        res.end()
    }
    
  })
  connection.query("INSERT INTO salary VALUES ('"+emp+"','"+sal+"');", function (err, result)
      {
        if(err)
        {
          console.log(err);
        }
        else{
          console.log(result);
          console.log('Added Salary')
          // console.log(k);
          
        }
    })

}
if(d==1)
{
  var em=req.body.employee1
  var bi=req.body.bonus1
  var sql="UPDATE salary SET salary='"+bi+"' where emp_id='"+em+"';"
  connection.query(sql, function (err, result)
      {
        if(err)
        {
          console.log(err);
        }
        else{
          console.log(result);
          // console.log(k);
          res.send({Up : bi})
          res.end();
        }
    })

  
}
if(d==2)
{
  var emp=req.body.employee2
  connection.query("DELETE from salary where emp_id='"+emp+"';", function (err, result)
      {
        if(err)
        {
          console.log(err);
        }
        else{
          connection.query("DELETE from leaves where emp_id='"+emp+"';", function (err, result)
      {
        if(err)
        {
          console.log(err);
        }
        else{
          connection.query("DELETE from employee where emp_id='"+emp+"';", function (err, result)
      {
        if(err)
        {
          console.log(err);
        }
        else{
          console.log("deleted row")
          res.send({Del : emp})
        }
    })
        }
    })
          
        }
    })
}
}
)
app.listen(8080);