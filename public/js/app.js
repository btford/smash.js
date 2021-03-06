'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/play', {
      templateUrl: 'partials/play',
      controller: PlayCtrl
    });
    $routeProvider.when('/debug', {
      templateUrl: 'partials/debug',
      controller: DebugCtrl
    });
    $routeProvider.when('/name', {
      templateUrl: 'partials/name',
      controller: NameCtrl
    });
    $routeProvider.when('/instr', {
      templateUrl: 'partials/instr',
      controller: function () {}
    });
    $routeProvider.otherwise({
      redirectTo: '/play'
    });
    $locationProvider.html5Mode(true);
  });
