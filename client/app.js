var app = angular
  .module('myApp', [
    'ngRoute',
    'Github.HomeController',
    'Github.AboutController',
    'Github.myAccountController',
    'ngAnimate'
  ]);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })
    .when('/', {
      templateUrl: './partials/about.html',
      controller: 'AboutController'
    })
    .when('/myaccount', {
      templateUrl: './partials/myAccount.html',
      controller: 'myAccountController'
    });

}
