'use strict';

var Question = require('./models/models').Question;
// console.log(Question);
var questions = [
  "This is the first question?",
  "This is the second question?",
  "This is the third question?",
  "This is the fourth question?",
  "This is the fifth question?",
  "This is the sixth question?"
];

questions.forEach(function(question,index){
  // console.log(question);
  Question.find({'text': question}, function(err, questions){
    if(!err && !questions.length){
      Question.create({text: question});
    }
  });
});
