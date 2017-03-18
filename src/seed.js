'use strict';

var Question = require('./models/models').Question;
// console.log(Question);
var questions = [
  {text:"This is the first question?", title:"first"},
  {text:"This is the second question?", title:"second"},
  {text:"This is the third question?", title:"third"},
  {text:"This is the fourth question?", title:"fourth"},
  {text:"This is the fifth question?", title:"fifth"},
  {text:"This is the sixth question?", title:"sixth"}
];

// var questions = [
//   "This is the first question?",
//   "This is the second question?",
//   "This is the third question?",
//   "This is the fourth question?",
//   "This is the fifth question?",
//   "This is the sixth question?"
// ];

questions.forEach(function(question,index){
  console.log(question.title);
  Question.find({'text': question.text}, function(err, questions){
  if(!err && !questions.length){
      Question.create({title: question.title, text: question.text});
  }
  });
});
