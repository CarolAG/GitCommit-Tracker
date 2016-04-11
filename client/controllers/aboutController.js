angular
.module('Github.AboutController', ['ngRoute', 'Github.MyCommitsFactory'])
  .controller('AboutController', AboutController)


  function AboutController($scope, MyCommitsFactory) {
      // $scope.name = MyCommitsFactory.project;
      // $scope.age = MyCommitsFactory.language;
      // // $scope.save = function() {
      // //   UserFactory.name = $scope.name;
      // //   UserFactory.age = $scope.age;
      // // }
  }
