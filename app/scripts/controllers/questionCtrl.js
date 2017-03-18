'use strict';

function questionCtrl($scope, $log, $state, dataService){

  dataService.getQuestion($state.params.id,function(response){
    $scope.question = response.data.text;
  })

}

module.exports = questionCtrl;
