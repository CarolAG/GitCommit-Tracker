/* eslint-env mocha, jasmine, browser, es6 */

console.log('tests staarted');
console.log(describe);

describe('Angular Spec', function() {
  beforeEach(function() {
    angular.mock.module('myApp');
  });

  describe('Controller', function() {
    beforeEach(inject(function ($controller, $rootScope) {
      $scope = $rootScope.$new();
      controller = $controller('HomeController', {
        $scope: $scope
      });
    }));


    it('HomeController should have "name" property', function() {
      expect(controller.name).to.be.truthy;
    });
  });

  describe('Adding Views', function() {
    // body...
  });

  describe('Factories',function() {

  });
  xit('should be registered', inject(function($rootScope, $controller) {
    console.log('first one');
    expect(controller).to.not.be.undefined;
  }));
  xit('should have a homecontroller', function() {
    expect(controller).not.to.equal(null);
  });
  xit('test', function() {
    expect(controller.greeting).to.equal('Hello codesmith!');
  });
  xit('has an array to hold contacts', function() {
    expect(controller.contacts).to.be.a('array');
  });
  xit('has a function "addContact"', function() {
    expect(controller.addContact).to.be.a('function');
  });
  xit('has model contact with firstName, lastName and email properties', function() {
    expect(controller.contact).to.eql({firstName: '', lastName: '', email: ''});
  });
  xit('Adds a contact to the contacts array when you call "addContact" with the fields filled in', function() {
    controller.contact.firstName = 'rob';
    controller.contact.lastName = 'wilkinson';
    controller.contact.email = 'rob@codesmith.io';
    var length = controller.contacts.length;
    controller.addContact();
    expect(controller.contacts.length).not.to.eql(length);
    expect(controller.contacts[controller.contacts.length - 1].firstName).to.equal('rob');
  });
  xit('Resets the contact when you call "addContact" with the fields filled in', function() {
    controller.contact.firstName = 'rob';
    controller.contact.lastName = 'wilkinson';
    controller.contact.email = 'rob@codesmith.io';
    var length = controller.contacts.length;
    controller.addContact();
    expect(controller.contacts.length).not.to.eql(length);
    expect(controller.contact).to.eql({firstName: '', lastName: '', email: ''});
  });
});

