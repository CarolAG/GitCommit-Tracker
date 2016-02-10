angular
  .module('Codesmith.HomeController', ['ngRoute', 'Codesmith.UserFactory', 'Codesmith.MessageFactory', 'Codesmith.messages'])
  .controller('HomeController', HomeController)


  function HomeController($interval, $scope, UserFactory, MessageFactory) {
    MessageFactory.fetch().then(function(response) {
        $scope.messages = response.data.reverse().slice(-35);
    });

    $interval(function() { return MessageFactory.fetch().then(function(response) {
        $scope.messages = response.data.reverse().slice(-35);
      })
    }, 3000);
    $scope.name = UserFactory.name;
    $scope.age = UserFactory.age;
    $scope.usersort = "-created_at";

    $scope.post = function() {
      var message = {
        created_by: $scope.author,
        message: $scope.currpost
      };

      MessageFactory.post(JSON.stringify(message));
      $scope.messages.unshift(message);
    }
  };
