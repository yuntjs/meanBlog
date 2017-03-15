webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(0);
var myApp = angular.module('blogApp', ['ui.router']);

myApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'templates/home.html'
    })
}]);


/***/ })

},[2]);