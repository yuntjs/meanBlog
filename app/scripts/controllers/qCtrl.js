'use strict';

function qCtrl($scope, $log, dataService){
  $scope.displayLabel = "Post a question";

  dataService.getQuestions(function(response){
    $scope.questions = response.data;
  });

  $scope.changeDisplay = function(){
    if($scope.display){
      $scope.displayLabel = "Cancel post";
    } else {
      $scope.displayLabel = "Post a question";
    }
  }

  $scope.submitQuestion = function(newTitle, newQuestion){
    console.log("title: "+ newTitle+"; question: " +newQuestion);
    $scope.display = false;
    $scope.changeDisplay();
    $scope.question = null;
  };
}

module.exports = qCtrl;
