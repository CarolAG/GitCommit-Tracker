// we create our angular app inserting any external dependencies as an array as the second parameter, these will be available to $inject throughout our codebase
var app = angular
  .module('myApp',[
    'ngRoute',
    'Codesmith.HomeController',
    'Codesmith.AboutController',
    // 'Codesmith.Users'
    ]);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })
    // to remove
    .when('/about', {
      templateUrl: './partials/about.html',
      controller: 'AboutController'
    });
}

