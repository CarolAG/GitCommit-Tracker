// Define a controller on the same module, by calling 'controller' and passing in a function that I create externally
angular
  .module('Codesmith.HomeController',[])
  .controller('HomeController', HomeController);

function HomeController() {
  this.greeting = "Hello codesmith!";
  this.hi = 'hi';
}


