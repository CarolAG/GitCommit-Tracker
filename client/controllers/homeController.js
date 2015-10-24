// Define a controller on the same module, by calling 'controller' and passing in a function that I create externally
var app = angular
  .module('Codesmith.HomeController',['ngRoute'])
  .controller('HomeController', HomeController);

function HomeController($scope) {
  $scope.greeting = "Hello codesmith!";
  $scope.hi = 'hi';
}


