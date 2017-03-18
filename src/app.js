'use strict';

var express = require('express');
var app = express();
var routes = require('./api/routes')

var jsonParser = require('body-parser').json;
var logger = require('morgan');

require('./database');
require('./seed');

app.use(logger("dev"));
app.use('/', express.static('public'));
app.use(jsonParser());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  if(req.method === "OPTIONS"){
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/questions",routes);

// catch 404 and forward to error handler
app.use(function(req, res, next){
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error Handler
app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message
      }
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express server is listening on post", port);
});
