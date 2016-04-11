angular
  .module('Github.HomeController', ['ngRoute', 'Github.MyCommitsFactory', 'Github.LookupFactory'])
  .controller('HomeController', HomeController)


  function HomeController($interval, $scope, MyCommitsFactory, projectLookup) {
    // console.log(fetch);
    // console.log(HomeController.$scope.fetch);
    $scope.fetch = function(project, language){
      console.log('in here, projectname',  $scope.project)
      console.log('language', $scope.language);
      return projectLookup.fetch($scope.project,$scope.language).then(
        function(response) {
          console.log('data items', response.data.items)
          $scope.projectLookups = response.data.items;
    })
  },

    $scope.retrieve = function(owner, repo){
      console.log('in here, Owner',  $scope.owner)
      console.log('repo', $scope.repo);
      return MyCommitsFactory.fetch($scope.owner, $scope.repo).then(
      function(response){
          console.log('RESPONSE TO COMMITS', response.data);
          $scope.commits = response.data;
      })
    }
  };

  //   $scope.$watch('project', function() {
  //     if(!$scope.currentCompanyId) return;
  //
  //     $http.get().success(); // replace with whatever mechanism you use to request data
  // });


      // $interval(function() { return MessageFactory.fetch().then(function(response) {
      //     $scope.messages = response.data;
      //   })
      // }, 3000);

      // $scope.post = function() {
      //   var projectLookup = {
      //     created_by: $scope.author,
      //     message: $scope.currpost
      //   };

        // MessageFactory.post(JSON.stringify(message));
        // $scope.messages.unshift(message);
      //}
