webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('blogApp').controller('qCtrl', __webpack_require__(3));
angular.module('blogApp').controller('questionCtrl', __webpack_require__(4));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('blogApp').service('dataService', __webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function questionCtrl($scope, $log, $state, dataService){

  dataService.getQuestion($state.params.id,function(response){
    $scope.question = response.data.text;
  })

}

module.exports = questionCtrl;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DataService($http, $q){

  this.getQuestions = function(cb){
    $http.get('/api/questions').then(cb);
  };

  this.getQuestion = function(id,cb){
    $http.get('/api/questions/' + id).then(cb);
  }

}

module.exports = DataService;


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(0);
var myApp = angular.module('blogApp', ['ui.router']);

__webpack_require__(2);
__webpack_require__(1);

myApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('questions',{
      url: '/questions',
      templateUrl: 'templates/questions.html',
      controller: 'qCtrl'
    })
    .state('question',{
      url: '/questions/:id',
      templateUrl: 'templates/question.html',
      controller: 'questionCtrl'
    });
  }]);


/***/ })
],[7]);