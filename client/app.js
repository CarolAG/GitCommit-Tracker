// we create our angular app inserting any external dependencies as an array as the second parameter, these will be available to $inject throughout our codebase
var app = angular
  .module('myApp',[
    'ngRoute',
    'Codesmith.HomeController',
    // 'Codesmith.AboutController',
    // 'Codesmith.Users'
    ]);

// we pass in a function that handles our routes and config to the config function on that same angular module 'myApp' that we created above
//
// NOTE: we do not redeclare our external dependencies, we only need to do this once
app.config(configFunction);

// we $inject any dependencies that that function will need
// configFunction.$inject = ['$routeProvider', '$locationProvider'];

// make sure these arguments are ordered the same as the ones in your $inject
function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      // templateUrl: './partials/home.html',
      templateUrl: '/tpl.html',
      controller: 'HomeController'
    })
    // to remove
    .when('/about', {
      templateUrl: './partials/about.html',
      controller: 'AboutController'
    });
}

