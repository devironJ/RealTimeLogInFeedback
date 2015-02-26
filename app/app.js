'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute','myAppControllers']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/view1",{
      templateUrl: "view1/view1.html",
      controller: "View1Controller"
    })
      .when("/view2", {
          templateUrl:"view2/view2.html",
          controller: "View2Controller"
      })

    .otherwise({redirectTo: '/view1'});
}]);
