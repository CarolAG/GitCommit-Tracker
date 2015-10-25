var app = angular
  .module('Codesmith.HomeController',['ngRoute','Codesmith.Users'])
  .controller('HomeController', HomeController)


function HomeController($scope) {
  $scope.unit = "Unit 10 Prototype";
}
