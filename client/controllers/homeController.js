var app = angular
  .module('Codesmith.HomeController',['ngRoute','Codesmith.Users'])
  .controller('HomeController', ['$scope', 'UserFactory', HomeController])


function HomeController($scope, UserFactory) {
  console.log(arguments);
  $scope.unit = "Unit 10 Prototype";
  console.log('instatiated');
  // console.log(Factory);
  console.log(UserFactory);
  $scope.name = UserFactory.name;
}
