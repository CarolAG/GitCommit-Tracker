# Angular

##Summary

We're going to be building an address book application using angular å la google contacts.
You should see a list of contacts with their first and last names, phone numbers, and emails.
You should be able to add new contacts!

This should be on the home page; additionally, we should also have a link to a second page that displays information about you that we will eventually get from an external API. For now just mock it up and write it inline in the controller.


This is going to involve a few key steps:
* Using the controller you've been given, checking out some angular **directives**, for the action that you want and getting the functionality to work
* Taking a look at the code I've given you, plus reading the comments and figuring out what's happening
* I've got an npm module `partialify` running too if you look at how I source the `home` html

Electives:
* **angular-material** is installed in the `package.json` and the stylesheet is loaded; do a little research on the different directives it gives you and try to use some of them.

##Learning Goals

###What is Angular


##Getting started

###Setup

* `npm install` to install all the dependencies
* `bower install` to install other dependencies
* `npm start`
* open your browser to
````
localhost:8080
````

###Testing
Run the following line to test your code
````
npm test
````

###Controllers
- [ ] Modify the ```HomeController``` have a ```name``` property. Have the ```name``` property equal to your name
- [ ] Modify the ```home``` partial to display the value set to the ```name``` property

###Adding Views
- [ ] Create another route at ```/about``` that displays the ```about``` partial.
- [ ] Create another module named ```Codesmith.AboutController``` (place inside ```./client/controllers/aboutController.js```) and add a controller named ```AboutController``` to it
- [ ] Add the directive ```ng-model``` to the input tag. Set the value of the directive to ```name```
- [ ] Modify the ```about``` partial to display the name property

###Factories
- [ ] Create a separate module called ```Codesmith.UserFactory``` and add a factory called ```UserFactory```
- [ ] Add a ```ng-click``` directive to the button on the ```about``` partial
- [ ] Add a function in ```AboutController``` that, when clicked, stores the name inside the ```UserFactory``` object. You will need to inject ```UserFactory``` inside ```AboutControlller```
- [ ] Inject ```UserFactory``` inside the ```HomeController```
- [ ] Have the ```HomeController``` name property equal to the ```UserFactory``` name such that names saved in the ```/about``` page is displayed


##Additional Links and Resources
- [https://github.com/johnpapa/angular-styleguide](https://github.com/johnpapa/angular-styleguide)
