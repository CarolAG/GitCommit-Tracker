# Angular

##Summary

add stuff here

##Learning Goals

- 1
- 2
- 3
- 4

###What is Angular


##Getting started

###Setup

- [ ] Run `npm install` to install server-side dependencies
- [ ] Run `bower install` to install browser-side dependencies
- [ ] Run `npm start` to start your server. Open your browser to the following address:
````
localhost:3000
````

###Testing
- [ ] Run the following line to test your code
````
npm test
````
- [ ] Additionally, open your browser the following address to view your application:
````
localhost:3000
````

###Controllers
- [ ] Modify the ```HomeController``` scope have a ```name``` property. Set the ```name``` property to your name
- [ ] Modify the ```home.html``` partial to display the value set to the ```name``` property

###Adding Views
- [ ] Create another route at ```/about``` that displays the ```about.html``` partial.
- [ ] Create another module named ```Codesmith.AboutController``` (place inside ```./client/controllers/aboutController.js```)
- [ ] Create a controller named ```AboutController``` inside the ```Codesmith.AboutController``` module
- [ ] Modify the ```about.html``` partial to display the name property
- [ ] Inside the ```about.html``` partial, add the directive ```ng-model``` to the <input> tag. Set the value of the ```ng-model``` directive to ```name```
- [ ] Type into the input field. If done correctly, the input should be rendered alongside the input field

###Factories
- [ ] Create a separate module named ```Codesmith.UserFactory``` (place inside ```./client/factories/userFactory.js```)
- [ ] Create a factory named ```UserFactory``` inside the ```Codesmith.UserFactory``` module
- [ ] Inject ```UserFactory``` inside ```AboutController```
- [ ] Add a ```ng-click``` directive to the <button> on the ```about.html``` partial
- [ ] Add a function in ```AboutController``` that, when clicked, stores the ```name``` inside the ```UserFactory``` object.
- [ ] Inject ```UserFactory``` inside ```HomeController```
- [ ] Have the ```HomeController``` name property equal to the ```UserFactory``` name such that ```name``` saved in the ```/about``` page is displayed

###HTTP
- [ ] Inside the ```HomeController```, create a method called ```getMessages``` that makes a GET request to the following URI
```
http://slack-server.elasticbeanstalk.com/messages
```
- [ ] Store the array of messages inside the ```messages``` property of the ```HomeController``` scope
- [ ] Use the ```ng-repeat``` directive to display all the messages in the ```home``` partial

###Extension Challenges
- [ ] Add an <input> tag to the ```home.html``` partial. Add the necessary directives such that, when clicked, a message is sent to the messaging server
- [ ] Replace with ngRoute with [ui-router](https://github.com/angular-ui/ui-router).
- [ ] Connect to your own custom API instead of the URI provided above

##Additional Links and Resources
- [https://github.com/johnpapa/angular-styleguide](https://github.com/johnpapa/angular-styleguide)
- [https://docs.angularjs.org/guide/concepts](https://docs.angularjs.org/guide/concepts)
- [https://docs.angularjs.org/guide/controller](https://docs.angularjs.org/guide/controller)
- [https://docs.angularjs.org/guide/providers](https://docs.angularjs.org/guide/providers)