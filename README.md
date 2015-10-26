# Angular

##Summary

In this unit you will be building a full MVC-style frontend website to display the content of your API. You will be using Angular, a frontend framework maintained by Google, and still the most popular framework for building web applications today.

##Learning Goals

1. Understand how views, controllers and models interact in Angular
2. Use factories to maintain data consistency across your application
3. Use your own API to reinforce the value of API design
4. Successfully make http requests in Angular

###What is a framework?

Developing modern frontend web applications requires us to manage complex patterns of data on the frontend. This data (for example, the number of favorites on a tweet, whether a button has been selected or not) constantly change as new information becomes available from the server or as users interact with the data. Frameworks give us the structure to more easily design applications that handle this complexity. 

###What is Angular?

Angular is the currently the most popular frontend JavaScript framework using the Model-View-Controller pattern. 

Angular uses two-way data binding to ensure that any data-related changes affecting the underlying data model immediately update the relevant view or views (the UI that the user interacts with). Any changes to the view (for example by a user) immediately updates the relevant data model. 

!()[https://www.dropbox.com/s/lj2013fj1e8c213/Screenshot%202015-10-26%2008.09.55.png?dl=1]

'Controllers' [AngularJS Controller Tutorial](http://viralpatel.net/blogs/angularjs-controller-tutorial/) join the dots between the 'data' in the view (that the user interacts with) and data in the underlying 'model'

We must write the models, views and controllers ourselves as developers - Angular gives us plenty of tools to do so as well as a structure it expects us to follow.

##Things to look out for

* Angular documentation can be obscure, so ensure you balance interpreting the documentation with reading posts & tutorials by other developers

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
