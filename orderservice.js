var express = require('express');
var app = express();

var empController=function(req, res){

  var emp = [
    {id:1, Name:"Nikita",salary:2300, status:"rejected"},
    {id:2, Name:"Pratima",salary:3003, status:"completed"},
    {id:3,  Name:"Komal",salary:5900, status:"rejected"},
	 {id:4,  Name:"Vishal",salary:900, status:"inprocess"}
  ];
  res.send(emp);
};
 


app.get('/emp',ordersController);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(" Listen to localhost:8087", host, port)
})