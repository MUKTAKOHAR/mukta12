var express = require('express');
var app = express();

var empController=function (req, res) {
  console.log("CAlling rest API");
  var emp=[
            {firstName:'Ram',lastName:'T',age:22},
            {firstName:'mukta',lastName:'k',age:21},
            {firstName:'Vishal',lastName:'S',age:30},
            {firstName:'Komal',lastName:'j',age:33}
      ];
  res.send(emp);
};

app.get('/emp',empController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("listen to localhost:8088", host, port)
})