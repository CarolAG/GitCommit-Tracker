/* eslint-env mocha, jasmine, browser, es6 */
describe('Home Controller', function() {

  beforeEach(function() {
    angular.mock.module('myApp');
  });
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('HomeController', {
      $scope: $scope
    });
  }));
  it('should be registered', inject(function($rootScope, $controller) {
    expect(controller).to.not.be.undefined;
  }));
  it('should have a homecontroller', function() {
    expect(controller).not.to.equal(null);
  });
  it('test', function() {
    expect(controller.greeting).to.equal('Hello codesmith!');
  });
  it('has an array to hold contacts', function() {
    expect(controller.contacts).to.be.a('array');
  });
  it('has a function "addContact"', function() {
    expect(controller.addContact).to.be.a('function');
  });
  it('has model contact with firstName, lastName and email properties', function() {
    expect(controller.contact).to.eql({firstName: '', lastName: '', email: ''});
  });
  it('Adds a contact to the contacts array when you call "addContact" with the fields filled in', function() {
    controller.contact.firstName = 'rob';
    controller.contact.lastName = 'wilkinson';
    controller.contact.email = 'rob@codesmith.io';
    var length = controller.contacts.length;
    controller.addContact();
    expect(controller.contacts.length).not.to.eql(length);
    expect(controller.contacts[controller.contacts.length - 1].firstName).to.equal('rob');
  });
  it('Resets the contact when you call "addContact" with the fields filled in', function() {
    controller.contact.firstName = 'rob';
    controller.contact.lastName = 'wilkinson';
    controller.contact.email = 'rob@codesmith.io';
    var length = controller.contacts.length;
    controller.addContact();
    expect(controller.contacts.length).not.to.eql(length);
    expect(controller.contact).to.eql({firstName: '', lastName: '', email: ''});
  });
});

