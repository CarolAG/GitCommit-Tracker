/**
 * AboutController goes here
 */


// to remove
var app = angular
  .module('Codesmith.AboutController',['ngRoute','Codesmith.Users'])
  .controller('AboutController', AboutController);

function AboutController($scope) {
  $scope.unit = "Unit 10 Prototype";
  console.log(UserFactory);
}


