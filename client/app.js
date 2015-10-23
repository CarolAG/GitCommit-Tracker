// we create our angular app inserting any external dependencies as an array as the second parameter, these will be available to $inject throughout our codebase
var app = angular
  .module('myApp');

// we pass in a function that handles our routes and config to the config function on that same angular module 'myApp' that we created above
//
// NOTE: we do not redeclare our external dependencies, we only need to do this once
app.config(configFunction);
console.log('there');
// we $inject any dependencies that that function will need
// configFunction.$inject = ['$routeProvider', '$locationProvider'];

// make sure these arguments are ordered the same as the ones in your $inject
function configFunction($routeProvider, $locationProvider) {
  // we define different routes on our route provider by passing in a url it should respond to, and an object of options
  $routeProvider
    .when('/Home/', {
      // the template to load
      template: require('./partials/home.html'),
      // what controller to use, and what it should be new'd up as
      controller: 'HomeController as homeCtrl'
    });
}

