angular
  .module('Codesmith.HomeController', ['ngRoute', 'Codesmith.UserFactory', 'Codesmith.MessageFactory'])
  .controller('HomeController', HomeController)


  function HomeController($scope, UserFactory, MessageFactory) {
    MessageFactory.fetch().then(function(response) {
      $scope.messages = response.data.slice(-35);
    });
    $scope.name = UserFactory.name;
    $scope.age = UserFactory.age;
    $scope.usersort = '-created_by';


    // $scope.post = function(){
    //   MessageFactory.post
    // }
    $scope.post = function() {
      var message = {
        created_by: $scope.author,
        message: $scope.currpost
      };

      MessageFactory.post(JSON.stringify(message));
      $scope.messages.unshift(message);
    }
  };
