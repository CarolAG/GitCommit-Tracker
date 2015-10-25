var app = angular
  .module('Codesmith.HomeController',[])
  .controller('HomeController', HomeController)


function HomeController($scope) {
  $scope.unit = "Unit 10 Prototype";
}
