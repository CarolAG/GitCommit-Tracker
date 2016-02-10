angular
  .module('Codesmith.messages', [])
    .directive('messages', function() {
      return {
        restrict: 'E',
        template: '<p></p>',
        controller: function($scope, $http) {
          $http.get('http://localhost:8000/wired')
            .success(function(data) {
              $scope.data = data;
            })
        }
      }
    });
