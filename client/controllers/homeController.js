var app = angular
  .module('Codesmith.HomeController',['ngRoute'])
  .controller('HomeController', HomeController)


function HomeController($scope) {
  console.log(UserFactory);
  $scope.unit = "Unit 10 Prototype";
}
