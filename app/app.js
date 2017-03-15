var angular = require('angular');
var myApp = angular.module('blogApp', ['ui.router']);

myApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'templates/home.html'
    })
}]);
