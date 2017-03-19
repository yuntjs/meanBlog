'use strict';

function qCtrl($scope, $log, dataService){
  $scope.displayLabel = "Post a question";

  dataService.getQuestions(function(response){
    $scope.questions = response.data;
  });

  $scope.changeDisplay = function(){
    if($scope.display){
      $scope.question = null;      
      $scope.displayLabel = "Cancel post";
    } else {
      $scope.displayLabel = "Post a question";
    }
  }

  $scope.submitQuestion = function(newTitle, newQuestion){
    var question = {title: newTitle, text: newQuestion};
    dataService.addQuestion(question, function(response){
      $scope.questions.unshift(response.data);
    })

    $scope.display = false;
    $scope.changeDisplay();
    $scope.question = null;
  };
}

module.exports = qCtrl;
