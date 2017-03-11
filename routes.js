'use strict';

var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
  res.json({response: "You sent me a GET request"});
});

router.post("/", function(req,res){
  res.json({
    response: "You sent me a POST request",
    body: req.body
  });
});

router.get("/:id", function(req,res){
  res.json({
    response: "You sent me a POST request for ID" + req.params.id
  });
});

module.exports = router;
