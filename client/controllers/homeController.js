var app = angular
  .module('Codesmith.HomeController',['ngRoute'])
  .controller('HomeController', HomeController)


function HomeController($scope) {
  $scope.unit = "Unit 10 Prototype";

  // to remove
  $scope.name = 'name'
}
