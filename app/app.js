var angular = require('angular');
var myApp = angular.module('blogApp', ['ui.router']);

require('./scripts/services');
require('./scripts/controllers');

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
