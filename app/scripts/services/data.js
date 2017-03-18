'use strict';

function DataService($http, $q){

  this.getQuestions = function(cb){
    $http.get('/api/questions').then(cb);
  };

  this.getQuestion = function(id,cb){
    $http.get('/api/questions/' + id).then(cb);
  }

}

module.exports = DataService;
