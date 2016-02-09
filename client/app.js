var app = angular
  .module('myApp', [
    'ngRoute',
    'Codesmith.HomeController',
    'Codesmith.AboutController',
  ]);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: './partials/about.html',
      controller: 'AboutController'
    });
}
