/**
 * AboutController goes here
 */


// to remove
var app = angular
  .module('Codesmith.AboutController',['ngRoute'])
  .controller('AboutController', AboutController);

function AboutController($scope) {
  $scope.name = 'l';
}


