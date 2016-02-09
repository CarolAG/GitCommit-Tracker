angular
.module('Codesmith.AboutController', ['ngRoute', 'Codesmith.UserFactory'])
  .controller('AboutController', AboutController)


  function AboutController($scope, UserFactory) {
    $scope.name = UserFactory.name;
    $scope.age = UserFactory.age;
    $scope.save = function() {
      UserFactory.name = $scope.name;
      UserFactory.age = $scope.age;
    }
  }
